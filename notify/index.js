//connect fcm
var FCM = require('fcm-node');
var serverKey = 'AAAAvpFwH74:APA91bEu58AdsNguSZwy288MLtjCJOa_2RpB69QgBmymGxBrvX_Iec3IMXpKWLO-lt4ZNCLEDhduESmvUkFzuwXK7GjQ1NTFLp1u9XO8DvE50o2b7vhujq9PCS8a7S3LcMcfdOLEfVMh'; //put your server key here
var fcm = new FCM(serverKey);

//connect redis
//get redis lists
redis = require("redis").createClient,
    red = redis({host:'0.0.0.0', port:6379, auth_pass: "yjF1f7uiHttcp" })

const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "UpvMy",
    database: "speed4dev",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//check changed field in user_app read N of those users
//ΝΒ is N (Count) Badge of login
//NN is N (Count) New badge of changes
//is NN > NB then send Notification and update NB after notification event
function intervalFunc() {
    red.select(2, function () {
        red.keys("NN*", function (err, list) {
            console.log(list);
            for(var i in list) {
                var NN= list[i];
                var uid=NN.substring(2);
                console.log("uid "+uid);
                var NB="NB"+uid;
                red.get(NN, function (err, newbadge) {
                    console.log('NN '+newbadge);
                    red.get(NB, function (err, oldbadge) {
                    console.log('NB '+oldbadge);
                    var content_available = parseInt(newbadge) > parseInt(oldbadge) ? true :false;
                    if(parseInt(newbadge) != parseInt(oldbadge)){
                        pool.query("SELECT * from user_app where loggedin=1 AND uid="+uid, function (er, results, fields) {
                            if (er) log(err);
                        for(var j in results) {
                            //SEND PUSH NOTIFICATION
                            console.log(results[j].regid);
                            var message = {
                                "notification": {
                                    "title": "From Speedemployer",
                                    "body": "You have an urgent notification",
                                    "icon": "fcm_push_icon"
                                },
                                "data": {
                                    "title": "From Speedemployer",
                                    "body": "You have an urgent notification",
                                    "badge": newbadge,
                                    "click_action": "FCM_PLUGIN_ACTIVITY",
                                    "color": "#ff0000",
                                    "icon": "fcm_push_icon"
                                },
                                "to": results[j].regid,
                                "priority": "high",
                                "restricted_package_name": "",
                                "content_available": content_available
                            }
                            fcm.send(message, function(err, response){
                                if (err) {
                                    console.log(err)
                                    console.log(response)
                                    //console.log("Something has gone wrong!");
                                } else {
                                    console.log("push with response "+response+" successfully sent to "+results[j].regid);
                            pool.query("UPDATE user_app SET badge="+newbadge+" where uid="+uid, function (er, res, fields) {
                                red.set(NB, newbadge, redis.print);
                                red.del(NN);
                            })
                                }
                             });
                        }
                            // con.end();
                        });
                    }
                    })
                })
            }

        })
    });
}

setInterval(intervalFunc,15000);




