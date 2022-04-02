/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        // if(s.local.get('dic')==false) {
        //     var lang= s.local.get('LANG')!=false ? s.local.get('LANG') :'en';
        //     $.getJSON(DOMAIN + 'local/' + lang + '/lang_' + lang + '.json', function (dic) {
        //         s.local.set('dic', JSON.stringify(dic, null, 2));
        //     });
        // }
         this.bindEvents();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');


        function setup() {
            var spd_uid = s.local.get('spd_uid');
            $.getJSON("https://api.speedemployer.gr/notify/" + spd_uid, function (dat) {
                if(dat.status==200) {
                    var data = dat.val;
                    console.log(data);
                    // $('#notifypage').show();
                     $("#notifypage").animate({width: 'toggle'}, 350);
                    $('.idName').text(data['fullname']);
                    $('#bgimg').css('background-image', "url(" + data['bgimg'] + ")");
                    $('#profileimg').attr('src', data['profileimg']);
                    // if (parseInt(data['notify']) > 0) {
                        $('#badge').html('<em class="mm-counterTop countTopY">' + data['notify'] + '</em>');
                    // } else {
                    //     $('#badge').html('');
                    // }
                }
            })
        }

        if(s.local.get('spd_uid')!=false) {
            setup();
        }else{
            // $('#loginpage').show()
            $("#loginpage").animate({width:'toggle'},350);
        }


//onclick login
        $(document).on("click","#loginf",function() {
            var user = $('#username').val();
            var pass = $('#password').val();
            var agent_auth = $('#agent_auth').val();
            var authArray = ['2', '3', '4', '5'];

            var push = PushNotification.init({"android": {"senderID": "818483830718","icon": "img/logo_round.png"}});
            push.on('notification', function (data) {
                // window.open('https://api.speedemployer.gr', '_system');
                // alert(data.title+" Message: " +data.message);
            });
            push.on('error', function (e) {
                alert(e);
            });

            push.on('registration', function (r) {
                console.log(r.registrationId);
                $.getJSON('https://api.speedemployer.gr/login/?pass=' + pass + '&name=' + user + '&regid='+r.registrationId, function (res) {
                    if(res.status==200) {
                        var data = res.val;
                        console.log(data);
                        if (data == 0) {
                            alert("ACCOUNT_NOT_EXIST");
                            return false;
                        } else if (data === 1) {
                            alert("AUTHENTICATION_PENDING");
                        } else if (data == 'No') {
                            alert("Username or Password is not correct");
                        } else {
                            // s.local.set('spd_LANG', data['lang']);
                            s.local.set('spd_uid', data['id']);
                            s.local.set('spd_grp', data['grp']);
                            $('#loginpage').hide('slow');
                            setup();
                            // pushInit();
                            // $.getJSON(DOMAIN + 'local/' + data["lang"] + '/lang_' + data["lang"] + '.json', function (dic) {
                            //     s.local.set('dic', JSON.stringify(dic, null, 2));
                            //     var uid=data['uid'];
                            //     var grp= data['grp'];
                            //     // notify(uid,grp,dic);
                            // });
                        }
                    }
                })
            });
        })

        $(document).on("click","#logout",function(){
            var spd_uid= s.local.get('spd_uid');
            $.ajax({
                type: "POST",
                crossDomain: true,
                url: 'https://api.speedemployer.gr',
                data: {method:'logout',uid:spd_uid},
                dataType: 'json',
                success: function(res){
                    //switch to login
                    if(res.status==200) {
                        var data = res.val;
                        if (data == 'yes') {
                            s.local.clear();
                            toggle1('notifypage', 'loginpage');
                        }
                    }

                }
            });
        })


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        //
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');
        //
        // console.log('Received Event: ' + id);
    }
};

app.initialize();