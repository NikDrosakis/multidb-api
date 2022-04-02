/*
* This is the PUBSUB channel
* NO PORT IS NEEDED, NO SOCKETIO
* 2nd make php queries GQL
* update WORKING
* insert WORKING
* fetch
* fetchAll
* _ID
* GQL must publish true | false on query execute _ID
*
*  METHOD 1 - add redis user identity "me" string (name, fullname, img, usergroup) to redis, as a type of metadata
*  fullname must be updated in ready users first, if name,fn,img,grp
*  add redis post/cv "cv" "post[id]" (uid,title,uri,status)
*  METHOD 2 - add cassandra/hbase user
*  METHOD 3 - add mongo rel (with contact > affiliate_terms_check)
* */
var redis = require("redis").createClient;
var SUB = redis({host:'0.0.0.0', port:6379, auth_pass: "yjF1f7uiHttcp" });
var PUB= redis({host:'0.0.0.0', port:6379, auth_pass: "yjF1f7uiHttcp" });
var channel = "R";
var fs = require("fs"), util = require('util');
//MONGO CONNECTION
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
SUB.subscribe(channel);
SUB.on("message", function (channel, mes) {
    var mes=JSON.parse(mes)
    if(mes.a=='INSERT' || mes.a=='UPDATE') {
        // console.log(mes.SET.name+","+mes.SET.img+','+mes.SET.usergroup);
        console.log(mes)
    }
    var querymap={"search":2};
    // if(typeof mes["UPDATE"]!='undefined'){
    //     console.console.log(mes["UPDATE"]);
    // } else if(typeof mes["INSERT"]!='undefined'){
    //     console.console.log(mes["INSERT"]);
    // }
    // console.log(mes["UPDATE"])
    if(querymap[mes["UPDATE"]]==2 || querymap[mes["INSERT"]]==2) {
        // var command=querymap[mes["UPDATE"]]==2 ? "UPDATE":"INSERT";
        // console.log(command);
        MongoClient.connect(url,{ useNewUrlParser: true },function (err,client) {
            var db = client.db("dev1");
            var collection = db.collection(mes[command]);
            if(mes.a=="UPDATE") {
                var where = mes["WHERE"];
                if (typeof mes["SET"]!='undefined') {
                    var action = {$set: mes["SET"]};
                }else if (typeof mes["INCR"]!='undefined') {
                    var action = {$inc: mes["INCR"]}
                }
                console.log(action)
                collection.updateOne(where, action, {upsert: true, safe: false}, function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                       // console.log(mes["_ID"]);
                        console.log("UPDATED DATA")
                      //    SUB.unsubscribe(channel);
                       // PUB.publish(channel, "message14");
                    }
                    // assert.equal(err, null);
                    // client.close();
                });
            }else if(mes.a=="INSERT") {
                delete mes.a;
                if (typeof mes["SET"] != 'undefined') {
                    // var action = {$set: mes["SET"]};
                    var action = mes["SET"];
                } else if (typeof mes["INCR"] != 'undefined') {
                    var action = {$inc: mes["INCR"]}
                } else if (typeof mes["DECR"] != 'undefined') {
                    var action = {$inc: mes["DECR"]}
                }
                // console.log(action);
                collection.insertOne(action, {upsert: true, safe: false}, function (err, result) {
                    if (err) {console.log(err);} else {console.log("ok");
                        //  SUB.unsubscribe(channel);
                        // PUB.publish(channel, "message14");
                         // PUB.publish(channel.mes["_ID"]);
                    }
                    // client.close();
                })
            }else if(command=="FETCH") {

            }else if(command=="FETCHALL") {

            }
        });
    }
});
