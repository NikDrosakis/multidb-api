//SUDO client of WEBSOCKET 3004
var express = require('express'),app = express(),path = require('path'),fs=require("fs"),g = require('../gaia'),https=require("https")
const privateKey = fs.readFileSync('/etc/letsencrypt/live/dev.speedemployer.gr/privkey.pem', 'utf8'),certificate = fs.readFileSync( '/etc/letsencrypt/live/dev.speedemployer.gr/fullchain.pem', 'utf8'),credentials = {key: privateKey, cert: certificate};
var server=https.createServer(credentials, app).listen(3004, function(){g.l('listening on 3004')}).on('error', function(err) {exec('/var/www/spd4/api/sudo')});
app.get('/', function(req, res, next){
///  console.log('get route', req.testing);
 // console.log(__dirname)
  res.sendFile(path.join(__dirname, '/sudo.html'));    
});
