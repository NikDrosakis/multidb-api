//server to server communication with 3003 ECMASCRIPT
import WebSocket, {WebSocketServer}  from 'ws';
import {createServer} from 'https';
import {readFileSync} from 'fs';
import cluster from 'cluster';
import os from 'os';

//API v2 developed by Nikos Drosakis 2021
if (cluster.isMaster) {
    // Count the machine's CPUs
    var cpuCount = os.cpus().length;
    // Create a worker for each CPU
	console.log(cpuCount)
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
}else{
const privateKey = readFileSync('/etc/letsencrypt/live/dev.speedemployer.gr/privkey.pem', 'utf8'),certificate = readFileSync( '/etc/letsencrypt/live/dev.speedemployer.gr/fullchain.pem', 'utf8'),credentials = {key: privateKey, cert: certificate};
const server=createServer(credentials).listen(3003, function(){console.log('listening on 3003')}).on('error', function(err) {exec('/var/www/spd4/api/soc')});
const wss = new WebSocketServer({server: server});
var CLIENTS={};
console.log('RUNNING WS SOC %d running!', cluster.worker.id);

/*
@uid:"sudo",
@type:command,notify,chat,html
@cast:all,one
@rule:js condition
@funct: function | s object	
@text: message 
@to: client receiver
@time:
@img:
*/
wss.on('connection', function connection(ws, req, client) {	   

//MESSAGE DELIVERY		
  ws.on('message', function incoming(data, isBinary) {  
	//   var mes= JSON.parse(data);
	 //  var reply=JSON.stringify({text:"Goodmorning from server",type:"notify"})
	//	ws.send(reply,{ binary: isBinary })
//	console.log(data.toString())
	wss.clients.forEach(function each(client) {
	   if (client !== ws && client.readyState === WebSocket.OPEN) {
	   client.send(data);
	   }
	   });	
	   })


})
}
	