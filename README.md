# multidb-api
***SUMMARY:*** nodejs express api clustered currently use of POST GET methods

DATABASES
-----------
*MONGO READY
- POST ins 
s.api.mo.ins('form',{key:val});
- POST set 
s.api.mo.set('form',{key:val},{key1:val1});
- POST inc 
s.api.mo.inc('form',{key:val},{key1:1});
- POST upsert (update if not exist insert) 
s.api.mo.up('form',{key:val1},{key:val});
- GET get 
s.api.mo.get('form',{key1:val1});
- POST del 
s.api.mo.set('form',{key:val1});
- get all cols
s.api.mo.get('cols');

*mongo :inmemory upcoming*
*MARIA READY*
** GET show 
- GET get 
s.api.ma.get("* from ur where uid=1");
- POST set 
s.api.ma.set("ur SET mail='mailtest@mgail.com' where uid=1");
- POST ins s.api.ma.ins("")
- POST count 
s.api.ma.count(1,2);
- GET show 
s.api.ma.show("TABLES"); [get all db tables] 


*REDIS READY*
- POST set 
s.api.red.set("dev","nikos drosakis");
s.api.red.set("dev",obj);  
- POST rpush
s.api.red.rpush("lista",{key:val});
- GET get  
s.api.red.get("dev");
s.api.red.get("my*");
s.api.red.get("cols"); [get all db collections]
- GET lrange
s.api.red.lrange("Ne");
- POST del 
s.api.red.del("dev"); 

*ELASTIC SEARCH upcoming*
*sqlite :inmemory upcoming*


CURRENTLY WORKING AT
-------------------

1. COMPONENTS COLLECTION

test rule before ins to return true| false
name rule html 
{name:"pb",rule:"my.grp==2 || (my.extended<s.phptimestamp() && G.uname=='home')" 
html:$('#pb_supermenu').html()}

2. LOCALS
data-

3. EVENTS 
```
s.api.mo.get("compo",{name:'pb'},function(d){
d=d[0];
if(eval(d.rule)){
$('.speedMenuBoxSrch').append(d.html)
}else{
console.info("Not permitted")
}
})

try {
 eval("my.grp==2 || (my.extended<s.phptimestamp() && G.uname=='home')")
}
catch(err) {
  s.l("err")
}

- HOW TO CHECK RULES 
function checkrule(){

try {
    eval("my.rp===2 || (my.extended<|s.hptimestamp() && G.uname=='home')"); 
} catch (e) {
    if (e instanceof SyntaxError) {
        return ("err12");
    }	
}
 return true;
}
```
compo
rules υπάρχουν στην εμφάνιση components
αλλά και στα events 
αλλά και στα notifications 

4. RULES
components -events -notifications 

- onpage G.uname/G.mode/GET vars 
- onpost  
- ontime (intervals)
- onevent 

*session.storage administration 
*compo:{b2,c3,c4,c5},notifications:{} 
*το σενάριο είναι να δημιουργηθούν 10,10 components 

TODO
-----------
- chat update with 
- store
- rules COMPO NOTIFY
- χρειάζομαι κάτι για το elastic search 
- s.api => axios
- dic elastic search 
- flask dash 

MODS my, N in login
----
[to set]
s.api.ma.my("get",my.uid,my.grp,my.membership,liste)
[to get]
s.api.red.sinter('mye1',liste=>{s.api.ma.my("get",my.uid,my.grp,my.membership,liste)})
[rule]
if not cache set 
s.api.red.get('my'+data.uid,red=>{if(red=="NO"){
	s.api.ma.my("set",my.uid,my.grp,my.membership,liste) //set
}else{
	s.api.red.sinter('mye1',liste=>{s.api.ma.my("get",my.uid,my.grp,my.membership,liste)})
}
})

SPD API 1 
==========
### SCHEMA
1) express dynamic routing GET, POST, DELETE
2) mysql, mongodb, redis basic functions files
3) mysql data with schema /database/table/where (=1/<1000, etc)
4) databases supported: mysql, redis, mongo
5) AUTHENTICATION primary level (NOT REST)
6) shell exec (use with CURL PHP) php2mongo.sh
7) cron.js running at 3004 

#####TODO
* SUPPORT DELETE
* SUPPORT cassandra, elastic search
* insert all mods packages, admin, read custom methods from files, for complex ones
get a large input for mysql and mongo queries for post methods
* SAVE JSON (LOCALS, PACKAGES) AT MONGO TO BE CACHED BY REDIS
* READ AND WRITE TO MYSQL ACCORDING TO URLS
* ADD MONGO $mod IN GET query.q.WHERE FOR SQL SELECT IN(0,1,3) cases
* ADD MONGO $switch for complex SQL CASE WHEN conditions (like in search)
* http/2 missing


###MODS
* chat
* admin (nodejs socketio dashboard)
* pyadmin (python with flask)

##GET
Param a default value is "fetch". Also a==count.
with query params, producing ALWAYS multiple DOCUMENTS, data[0] is for one
>    $.getJSON(CONF.apimongourl+"tkt?status=1",function(data){
>	 })

##POST
Params UPDATE and INSERT. 
>$.post(CONF.apimongourl+"tkt",{command:"UPDATE",type:"POST",WHERE:{"id":tid},SET:{category:category}},function(data){  
> if(data=='ok'){}})
```
$.ajax({type: 'POST',
            url: CONF.apimongourl+"tkt",
            data: {command:"UPDATE",type:"POST",WHERE:{"id":tid,status:1},SET:{status:2,gett:s.phptimestamp(),uid3:uid3}},
            success: function (data) {
                log(data)
                if(data=='ok'){
                    location.href='/admin/support?mode=board&id='+tid+'&ticket='+code;
                }else{
                    bootbox.alert("You cannot get this ticket right now.");
                }
            }
        })
```   

###shell exec Mass document import 
* mysql2mongo.sh through curl params =>export json => mongoimport exported json from /var/api/json


####JQUERY LOAD method, producing one ROW RESULT
query load param but Not currently work.
#### $switch aggregation => toggle query if false, true viceversa  

##DELETE


#MONGO API 
* MONGO.JS EXPORT 
* REQUIRED PARAMS 
1) limit, order for ordering (+asc,-desc)
2) identity
3) page for pagination, combined with order 
4) count 
5) json with find param
greater, smaell than , match (sql LIKE)
###RESERVED query.PARAMS
                params.q.a; 
                params.q.identity;
                params.q.limit;
                params.q.order;
                params.q.page;
                params.q.load;
                params.q.count;
### READ SCHEMA OF COLLECTION 
#MONGOJS                
###mongo var
CONF.apimongourl= https://devapi.speedemployer.gr:3005/m/devspeedemployergr/

##IDENTITY METHOD var req.query.identity=1 for active
Use SUPER FAST REDIS identity for user, post, cv data
to push data in loops  
a) all identities must be saved in redis
implement with data[i]= s.identity(data[i]);
b) is analyzed and appended before the loop appended with data[i]=identity[i];
c) pass param identity to the GET call 
d) redis saved in cvs style (no json to gain time) and split(',');
e) index maps of cvs must be clear
f) user supports multiple vars (uid, uid1,uid2)
g) develop post and cv identities as well.
 
###OFFLINE METHODS
* To DELETE FIELDS FROM DOCUMENTS, USE SHELL
> db.tkt.update({},{ $unset: {"code": "","id":""}},{ multi: true }); 
###MONGIFY WITH RUBY ???
what's the plan of replicate mysql to mongodb through mongify????
> the schema we want is very different.
* RELS SHOULD INCLUDE EVERYTHING
* MySQL dump by query > USE select sql format is better


###  REL - IPANEL needs real time data
CONTACT DATA{
EOI DATA{CV SOMEDATA{}, POSTSOMEDATA{},INTERDATA{}}
INTERDATA{}
}
* if we do show we cut rel table and most of the triggers. 
> Thaat's good!
* we get the tables themselves from shell cron 
> Thaat's NOT good! 
* WE NEED TRIGGERED REAL TIME DATA, else we analyze queries and update
mongo tables  
* Use PUBSUB REDIS with GQL analyzing INSERT UPDATE queries. 
Use this schema 
> CONTACT DATA{
EOI DATA {INTERDATA{}}
INTERDATA{}
 > THIS IS POSSIBLE!
 * But we also need php to run agent_policy()
 * Then run php2mongo.sh which uses mongify after json is exported.
 Add agent_policy php method and add it as a field.
(Take out cookieSet from this method)
 agent_policy READS agent_policy field from aff_jobs and returns a prefix to chat div
 so by clicking chat or send eoi or create inter request the terms modal is 
 provided or not
 
 #ELASTICSEARCH API http://dev.speedemployer.gr:9200/
 Database =>Index
 Table =>Type
 Row=> Document
 connect to shell elasticsearch-sql-cli http://dev.speedemployer.gr:9200
 Indices are databases 


#nodejs api crons
Daily report every day saving to mongo all invoices 

###Mass document import 
* mysql2mongo.sh through curl params =>export json => mongoimport exported json from /var/api/json

#nodejs rest authentication

##SUPPORT LANGUAGES
###python with flask and reactjs
export FLASK_DEBUG=1
export FLASK_APP=index.py
flask run --host=0.0.0.0 --port=3006

###java with tomcat at 8080
http://devapi.speedemployer.gr:8080/index.jsp
introduced tomcat, 
TODO 1) change CATALINA_HOME, 2) connect to DB 3) run javadash

