const g = require('../gaia');
const fastify = require('fastify')
const app = fastify()
const https = require('https')
const path = require('path'),fs = require("fs")
const privateKey = fs.readFileSync('/etc/letsencrypt/live/dev.speedemployer.gr/privkey.pem', 'utf8')
const certificate = fs.readFileSync('/etc/letsencrypt/live/dev.speedemployer.gr/fullchain.pem', 'utf8')
const credentials = {key: privateKey, cert: certificate}
const redis = require("redis");
const httpsServer = https.createServer(credentials,app)
const red = redis.createClient({host:'0.0.0.0', port:6379, password: "yjF1f7uiHttcp",detect_buffers: true,db:2 });
const bodyParser = require("body-parser");
//const { promisify } = require('util');
var cookieParser = require('cookie-parser');
app.use(cookieParser())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
const { exec } = require("child_process");
// Set a GET route "/"
app.get("/:type/:col", (req, res) => {
//auth(req,res);
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT');
    res.header('Transfer-Encoding', 'chunked');
    res.header('Access-Control-Allow-Origin', req.get('origin'));
    res.header("Access-Control-Allow-Credentials", true);
    var bin=(req.cookies['session-id']+req.cookies['sp']).toString()
    var authorization= new Buffer.from(bin).toString('base64');
    res.header("Authorization","Basic "+authorization);    
	var type = req.params.type || '';    
    var col = req.params.col || '';
	console.log("GET API 2 "+type+col)
// MONGO GET API get cols 
    if(type=="mo") {
        //query params are two types: a) those for dbquery and b) reserved (not for dbquery use)             
        req.params.q=req.query;
        var mon = require('../dbs/mongo')(req.params);
        mon.fetch(function (data) {
            res.status(200).send(data); 
			res.end()				
        });
// MYSQL GET API
    }else if (type=="ma") { 		
		if(col=="count"){
			req.params.q=req.query
			var mon = require('./mods/count')(req.params);
				mon[col](function (data) {
				   res.status(200).send(data);
					res.end()				   
				});	
		}else{	
		req.params.q=req.query.q;
		var mon = require('../dbs/maria')(req.params);
				mon[col](function (data) {
				   res.status(200).send(data);	
					res.end()				   
				});		
		}
// REDIS GET API col=redis key  get lrange keys 
    }else if (type=="red") {			
		if(req.query.action=="lrange"){
			red.lrange(col,  0, -1, function(err, data) {
			 res.status(200).send(data);
			 res.end()
			})
		}else{ //get / keys with col*
			red[req.query.action](col, function(err, data) {
			 res.status(200).send(data);
			 res.end()
			});	
		}		
    }
})


// Start the server
app.listen({ port: 3000, host: '0.0.0.0', backlog: 511 }, (err) => {
  if (err) {  
	exec("/var/www/spd4/api/fast")
    process.exit(1)
  }
})