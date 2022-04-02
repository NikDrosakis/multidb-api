/*
MONGO API 2
??? UDPATED WITH CHANNEL N (counters) incr decr
@s for db/collection @q params [s.type=m(ongo),s.name='',s.col=activity]
@actions: get | query | N(for pubsub) counters
params 
@order - desc- asc+ 
@limit 
@params has switch cases 
eg- activity: GET m/dev1/activity {uid: SPID, order: "status-"}
s.q.uid=SPID,s.q.order=status-
@cols return all collections
cli auth mongodump -d spd6 -u nikosd --authenticationDatabase admin
cols with fn 
*/
const mongo=require('mongodb'),MongoClient= mongo.MongoClient,
url = 'mongodb://nikosd:UpvMy@0.0.0.0:27017/spd6?authMechanism=SCRAM-SHA-1&authSource=admin';

module.exports = function(s){
var options={};
let action = s.q.hasOwnProperty('a') ? s.q.a : "get";

const call = async function () {
    let client;		
    try {		
        client = await MongoClient.connect(url);
        const db = client.db(); 
		delete s.q.a;
		if(action=="ins"){								
		var response = await db.collection(s.col).insertOne(JSON.parse(s.q.set));			
		}else if(action=="insMany"){			
		var response = await db.collection(s.col).insertMany(JSON.parse(s.q.set));	
		}else if(action=="bulk"){			
		  var response = await db.collection(s.col).initializeOrderedBulkOp();
		   response.insert(JSON.parse(s.q.set));
		}else if(action=="set"){			
		var response = await db.collection(s.col).updateOne(JSON.parse(s.q.where),{$set:JSON.parse(s.q.set)});	
		
		}else if(action=="fup"){ //also use $unset:
		//example: s.api.mo.fup("chat",{cid:mes.cid},{$push: {chat: {"u": who, "c": mes.c, "t": mes.time}},$inc:{total:1},$inc:{[unread]:1}})							
		var where=JSON.parse(s.q.where);		
		var set=JSON.parse(s.q.set);
		if(Object.keys(where)[0]=="_id"){var id=Object.values(where)[0];where={};where["_id"]=new mongo.ObjectID(id)}
		var response = await db.collection(s.col).findOneAndUpdate(where,set,{new:true,upsert: true});	
					
		}else if(action=="upsert"){ //use instead of fup to create new document if not exist $set necessary		//example:s.api.mo.up("chat",{uid:2},{$set:{cid:mes.cid,uid1:mes.uid1,uid2:mes.uid2},$push:{chat: {"u": who, "c": mes.c, "t": mes.time}},$inc:{total:1},$inc:{[unread]:1}})			
		var where=JSON.parse(s.q.where);		
		var set=JSON.parse(s.q.set);		
		if(Object.keys(where)[0]=="_id"){var id=Object.values(where)[0];where={};where["_id"]=new mongo.ObjectID(id)}
		var response = await db.collection(s.col).updateOne(where,set,{upsert:true});	
			
		}else if(action=="upMany"){			
		var response = await db.collection(s.col).updateMany(JSON.parse(s.q.where),JSON.parse(s.q.set),{upsert:true});
			
		}else if(action=="del"){
		var response = await db.collection(s.col).deleteOne(s.q)		
		
		}else if(action=="delMany"){
		var response = await db.collection(s.col).deleteMany(s.q)		
		
		}else if(s.col=="cols"){ //getting all collections
		var response = await db.listCollections().toArray();
		
		}else if(action=="getOne"){			
		var response = await db.collection(s.col).findOne(g.mogetparams(s.q,mongo));
		if(s.col=='form' && response!=null){ delete response._id;delete response.name;}	
	
		}else if(action=="agg"){
		var set=[JSON.parse(s.q.set)];		
		var response = await db.collection(s.col).aggregate(set).toArray();
		}else if(action=="count"){	
		var response = await db.collection(s.col).find(g.mogetparams(s.q,mongo)).count();
		}else if(action=="get"){	
			let limit = s.q.hasOwnProperty('limit') ? parseInt(s.q.limit) : 0; //ok    
			let sort = s.q.hasOwnProperty('order') && s.q.order.slice(-1) === '-' ? -1 : +1; // ok
			let order = s.q.hasOwnProperty('order') ? {[s.q.order.slice(0, -1)]: sort} : {};    //ok
			let page = s.q.hasOwnProperty('page') ? parseInt(s.q.page) : 1; 
			let skip = limit * (page - 1);	//ok 
			delete s.q.limit;delete s.q.order;delete s.q.page;					
			let find=g.mogetparams(s.q,mongo);
			var response = await db.collection(s.col).find(find).skip(skip).limit(limit).sort(order).toArray();	
		}		
        client.close();
        return response;
    } catch (err) {
        (client) && client.close();
        console.log(err);
        throw err
    }
};  

options[action]= function (callback) {
	call().then(result => callback(result)).catch(err => callback(err));	
	}		
return options;
}