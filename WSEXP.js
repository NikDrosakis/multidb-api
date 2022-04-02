var express = require('express'),app = express(),path = require('path'),fs=require("fs"),g = require('./gaia'),https=require("https"),
const privateKey = fs.readFileSync('/etc/letsencrypt/live/dev.speedemployer.gr/privkey.pem', 'utf8'),certificate = fs.readFileSync( '/etc/letsencrypt/live/dev.speedemployer.gr/fullchain.pem', 'utf8'),credentials = {key: privateKey, cert: certificate};
var server=https.createServer(credentials, app).listen(3004, function(){g.l('listening on 3004')}).on('error', function(err) { 
exec('/var/www/spd4/api/wsexp')});
//socket = require('express-ws')(app,server,{leaveRouterUntouched:true,clientTracking :true}),

//app.use(function (req, res, next) {
//  console.log('middleware');
//  req.testing = 'testing';
//  return next();
//});

app.get('/', function(req, res, next){
///  console.log('get route', req.testing);
 // console.log(__dirname)
  res.sendFile(path.join(__dirname, '/wsexp.html'));    
});

//app.ws('/:uid', function(ws, req) {
//	var uid = req.params.uid || '';  
//	console.log(uid)	
//	ws.on('message', function(msg) {
	//  if(mes.type=="open"){	
	//	var mes={uname:uid,c:'',type:"open",mes:"send_mydata"};	 	  
	//	ws.send(JSON.stringify(mes));	
//	
//console.log(app.clients)
	
//socket.getWss().clients.forEach(client => {
	
      // Check if connection is still open
  //    if (client.readyState !== client.OPEN) return;
 // console.log(client)
     //client.send({uname:'sudo',c:'',type:'open',mes:'send_mydata'});
   // });
//console.log(socket.applyTo)		
	//	}else{
	//	console.log(msg);
	//	ws.send(msg);
	//	}
//  });
//})

