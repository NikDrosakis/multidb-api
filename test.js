var key="dev";
var key1="dev1";
var val="nikos drosakis";
var val1="nikos drosakis2";
var obj={"dev":"nikos drosakis"};

s.api.form('schemado');
//MONGO
//POST ins 
s.api.mo.ins('form',{key:val});
//POST set 
s.api.mo.set('form',{key:val},{key1:val1});
//POST upsert update if not exist insert 
s.api.mo.up('form',{key:val1},{key:val});
//GET get 
s.api.mo.get('form',{key1:val1});
//POST del 
s.api.mo.set('form',{key:val1});
//get all cols
s.api.mo.get('cols');

//MARIA 
//GET show 
s.api.ma.show("TABLES");
//GET get 
s.api.ma.get("* from ur where uid=1");
//POST set 
s.api.ma.set("ur SET mail='mailtest@mgail.com' where uid=1");
//POST ins s.api.ma.ins("")
//POST count 
s.api.ma.count(1,2);

//REDIS 
//POST set 
s.api.red.set("dev","nikos drosakis");  
s.api.red.set("dev",obj);
//POST rpush
s.api.red.rpush("lista",{key:val});
//GET get  
s.api.red.get("dev"); || s.cache('dev')
s.api.red.get("my*");
//GET lrange
s.api.red.lrange("Ne");
//POST del 
s.api.red.del("dev");

///API CHAINING MO+RED MA+RED 
s.api(mo.getOne('chat',{cid:56}[name])/ma.getOne()/form('schemado')/my(1)).(cache(colname[ie my1])) 

/*
s.api.
ma.getOne("SELECT * from ur where uid=1").my(1)
ma.getOne("SELECT * from ur where uid=1",(d)=>{s.api.mo.up('my',{uid:1},d),})
*/
