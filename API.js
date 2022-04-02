//API v2 developed by Nikos Drosakis 2021
var cluster = require('cluster');
if (cluster.isMaster) {
    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;
    // Create a worker for each CPU
	console.log(cpuCount)
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
}else{
const g = require('./gaia'), {promisify} = require("util"),{ exec } = require("child_process"),https = require('https'),path = require('path'),fs = require("fs"),express = require('express'),app = express(),compression = require('compression'),bodyParser = require("body-parser"),
redis = require("redis"),red = redis.createClient({host:'0.0.0.0', port:6379, password: "n130177!",detect_buffers: true,db:2 });
cookieParser = require('cookie-parser');app.use(express.static("public"))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.urlencoded({limit: '150mb', extended: true}));
//app.use(bodyParser.urlencoded({extended: false}));
//start server
//g.l(cluster.worker.id+' on '+g.port)
const privateKey = fs.readFileSync('/etc/letsencrypt/live/parapera.org/privkey.pem', 'utf8'),certificate = fs.readFileSync( '/etc/letsencrypt/live/parapera.org/fullchain.pem', 'utf8'),credentials = {key: privateKey, cert: certificate};
const api=https.createServer(credentials, app).listen(g.port, function(){}).on('error', function(err) { 
exec('/var/www/parapera.org/api/api')});
//A GET METHODS	
app.use(bodyParser.json({limit: '150mb'}));
app.get('/:type/:col', async (req,res,next) =>{ 	//auth(req,res);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Transfer-Encoding', 'chunked');
    res.header('Access-Control-Allow-Origin', req.get('origin'));
    res.header("Access-Control-Allow-Credentials", true);
    var bin=(req.cookies['session-id']+req.cookies['sp']).toString()
    var authorization= new Buffer.from(bin).toString('base64');
    res.header("Authorization","Basic "+authorization);    
	var type = req.params.type || '';    
    var col = req.params.col || '';
	console.log("GET -"+req.url);
// MONGO GET API get cols getOne
    switch(type){
	case 'mo':	
        req.params.q=req.query;			
		var action=req.params.q.a;
        var mon = require('./'+g.dbs[type])(req.params);		
        mon[action]((data)=>{
		//	console.log(data)
            data=Number.isInteger(data) ? data.toString():(!data ? "NO":data);			
			res.status(200).send(data);res.end()				
        });
	break;
// MARIA GET API
    case "ma": 		
		req.params.q=req.query.q;
		req.params.prm=JSON.parse(req.query.prm);
		var ma = require('./'+g.dbs[type])(req.params);
		ma[col](function(data){			
			data=data==""?"NO":(col=="getOne" ? data[0]:data);
	//			console.warn(data)
			res.status(200).json(data);res.end();
			})
	break;
	case "red":
// REDIS GET API col=redis key  get sinter keys //get / keys with col*
			red[col](req.query.key, function(err, data) {
			data=data=='' || data==null ? "NO" : data;
			res.status(200).send(data);res.end()
			})		
	break;
    case "compo":
		req.params=JSON.parse(req.query.q);		
		var swig  = require('swig');	
		var db = require('./'+g.dbs[req.params.type])(req.params);		
		db[col](function (data) {
			if(col=="getOne"){data=data[0]}
			var template = swig.compileFile('compo/'+col+'.html');
			var compohtml = template(data);
				res.status(200).send({data:data,html:compohtml});
				res.end()				
        });		
	break;
	}	
});
//B  POST METHODS
app.post('/:type/:col', async (req, res) => {
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Content-Type','application/x-www-form-urlencoded');
	res.header('Transfer-Encoding', 'chunked');
	res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Origin', req.get('origin'));
    res.header("Access-Control-Allow-Credentials", true);
	var bin=(req.cookies['session-id']+req.cookies['sp']).toString()
    var authorization= new Buffer.from(bin).toString('base64');
    res.header("Authorization","Basic "+authorization);
    var type = req.params.type || '';
    var col = req.params.col || '';	
	console.log("POST -"+req.url);
// MONGO POST API ins insMany del set upsert delMany upMany fup 
  switch(type){
  case "mo":
		req.params.q=JSON.parse(JSON.stringify(req.body));					
        var mon = require('./'+g.dbs[type])(req.params);
        mon[req.params.q.a](function (data) {
			res.status(200).send(data);
			res.end()			
        });
	break;
//MARIA POST API
    case 'ma':	
			if(col=="N" || col=="my"){		//chunks are get from mye/Ne
			req.params.q=JSON.parse(req.body.q) //chunk,uid,membership (my)						
			console.log(req.params.q)
			var uid=parseInt(req.params.q.uid);
			var ma = require('./mods/'+col)(req.params);			
			ma[col](mad=>{					
			if(Object.keys(mad).length===0){ 
			res.status(200).json("NO");res.end();
			}else{
			var mad2={};			
			if(col=='my'){			
			for(var i in mad){					
					if(["user","agentdata","caff","packdetails","aff","mship","affee","author","pack"].includes(i)){					
					mad2[i]=mad[i][0];
					if(i=="caff"){
						mad2.caff.accepted_taken=mad2.caff.accepted_taken+mad2.caff.releasedSP;
						mad2.caff.takes_left=mad2.caff.take_limit + mad2.caff.taken + mad2.caff.accepted_taken;
						mad2.caff.accounts_left=mad2.caff.total_limit - (mad2.caff.managedSP + mad2.caff.released + mad2.caff.renew);
						mad2.caff.total_takes_left=mad2.caff.takes_left > mad2.caff.accounts_left ? mad2.caff.accounts_left :(mad2.caff.accounts_left > mad2.caff.taken ? mad2.caff.takes_left:0);
						mad2.caff.accounts_registration=mad2.caff.accounts_left - mad2.caff.taken;
					}
					}else{
					mad2[i]=mad[i];
					}
					}
			}else if(col=="N"){
				for(var i in mad){					
					mad2[i]=mad[i][0];
					for(var j in mad2[i]){
					mad2[j]=mad2[i][j];
					}delete(mad2[i]);
				}			
			mad2.uid=uid;			
			}
		//saves to redis Object.keys(obj).length		
	//	fs.writeFileSync(path.resolve(__dirname, 'test/'+col+uid+'.json'), JSON.stringify(mad2, null, 4));
			if(Object.keys(mad2).length>0){
			red.get(col+uid,function(err,old){				
				var mad3=!old ? mad2:Object.assign(JSON.parse(old), mad2);				
				mad3.updated=g.date('Y-m-d H:i:s');								
				//save to file test 			
		
			red.set(col+uid,JSON.stringify(mad3),function(err,r){
				if(r=="OK"){					
					res.status(200).json(mad3);res.end();}
			});		
			});		
			//saves to mongo												
		//	req.params.q.where=JSON.stringify({uid:uid});		//req.params.q.set=JSON.stringify({$set:mad2});												
			//var mon = require('./mongo2')(req.params);			
		//	mon["upsert"](mo=>{														
		//	})			
			}else{ res.status(200).json("NO");res.end(); }
			}
			})
		}else{		
		req.params.q=req.body.q;
		req.params.prm=req.body.prm;				
		var mon = require('./'+g.dbs[type])(req.params);		
        mon[col](function(data){
			var r=data.affectedRows==1 ?"OK":"NO";
			res.status(200).json(r);res.end();
			})
		}
	break;	
// REDIS POST API set string & Object METHODS: set rpush del 
	case "red":
		if(col=="del"){
		red.del(req.body.key, function(err, data){		
			res.sendStatus(200);res.end()
		});	
		}else{		
		console.log(req.body)
		console.log(req.body.val)
			red[col](req.body.key,req.body.val,(err, data)=>{
			res.sendStatus(200);res.end();			
			});
		}			
	break;		 
    }
});
}