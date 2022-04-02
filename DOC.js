//API v2 developed by Nikos Drosakis 2021
const g = require('./gaia'), {promisify} = require("util"),{ exec } = require("child_process"),https = require('https'),path = require('path'),fs = require("fs"),express = require('express'),app = express(),compression = require('compression'),bodyParser = require("body-parser"),
cookieParser = require('cookie-parser');app.use(express.static("public"))
app.use(compression());app.use(cookieParser());app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//app.use(bodyParser.urlencoded({extended: false}));
console.log('RUNNING EXPRESS NODEJS DOC 1 at 3001');
//start server
const privateKey = fs.readFileSync('/etc/letsencrypt/live/dev.speedemployer.gr/privkey.pem', 'utf8'),certificate = fs.readFileSync( '/etc/letsencrypt/live/dev.speedemployer.gr/fullchain.pem', 'utf8'),credentials = {key: privateKey, cert: certificate};
const api=https.createServer(credentials, app);
var marked = require('marked');
var markedImages = require('marked-images');
// opts are optional
var opts = {
  xhtml: false,
  fqImages: { route: '/images/', url:'https://images.example.com' }, // use custom image endpoint url when link starts with route
  fqLinks: 'https://www.example.com',                                // generate fully qualified links if fqImages is not set
  relPath: false
}
marked.use(markedImages(opts));

api.listen(3001, function(){
    g.l('listening on 3001');
}).on('error', function(err) { 
exec('/var/www/spd4/api/doc')
});

app.get('/', function(req, res){
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Content-Type','text/html; charset=utf-8');
	res.header('Access-Control-Allow-Methods', 'GET,POST');    
	//header
	var list='';
	var mds = fs.readdirSync('./docs/');		
	for(var i in mds){
	var name=mds[i].split('.')[0];
	list+="<div><a href='/doc/"+name+"'>"+name+"</a></div>";
	}
	res.write("<header>"+list+"</header>",'utf8')
  res.end();
});
app.get('/:file', function(req, res){
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Content-Type','text/html; charset=utf-8');
	res.header('Access-Control-Allow-Methods', 'GET,POST');    
	//header
	var list='<div><a href="/">HOME</a></div>';
	var mds = fs.readdirSync('./docs/');		
	for(var i in mds){
	var name=mds[i].split('.')[0];
	list+="<div><a href='/doc/"+name+"'>"+name+"</a></div>";
	}
	res.write("<header>"+list+"</header>",'utf8')
//main
	var mainfile = req.params.file || '';    
	var path = __dirname + '/docs/'+mainfile+'.md';
	var mainpage = fs.readFileSync(path, 'utf8');
	res.write(marked(mainpage.toString()));
  res.end();
});