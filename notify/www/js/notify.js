var DOMAIN= 'https://api.speedemployer.gr/';
var GLOBAL= {
    usergroups:{1:'person',2:'company'},
    ACCOUNT_NOT_EXIST:"Account does not exist, or Password is not correct.",
    AUTHENTICATION_PENDING:"Authentication is pending. Click at the link at your email box.",
    authentication: {
    '1':'Account Active',
    '2':'Account Suspended. Proceed to Payment Page.',
    '3':'Account Registration Invoice Pending. Proceed to Payment Page.',
    '4':'Account Proactivated. Proceed to Registration Confirmation Page.',
    '5':'Account is banned.Contact with Administrator.'
    }
};

//onclick login
$(document).on("click","#loginf",function() {
    var user = $('#username').val();
    var pass = $('#password').val();
    var agent_auth = $('#agent_auth').val();
    var authArray = ['2', '3', '4', '5'];

    $.getJSON(DOMAIN + 'GET/login/?pass=' + pass + '&name=' + user + '&rcode=gr', function (res) {
        var data=res.val;
        if (data == 0) {
            alert(GLOBAL.ACCOUNT_NOT_EXIST);
            return false;
        } else if (data === 1) {
            alert(GLOBAL.AUTHENTICATION_PENDING);

        } else if (authArray.includes(data['authentication'])) {	//if not integer ie authentication pending
            confirm(GLOBAL.authentication[data['authentication']][LANG], function (result) {
                if (result == true) {
                    if (data.authentication == '4') {
                        s.local.set('SPREGID', data['id']);
                        s.local.set('SPAUTH', 2);
                        s.local.set('SPREGGROUP', data['usergroup']);
                        window.open(DOMAIN + "register/2", "_system");
                    }
                }
            })
        } else {
            s.local.set('LANG', data['lang']);
            s.local.set('uid', data['uid']);
            s.local.set('grp', data['grp']);
            s.local.set('sp', hash());
            $('#loginpage').hide('slow');
            $('#notifypage').show('slow');
            $.getJSON(DOMAIN + 'local/' + data["lang"] + '/lang_' + data["lang"] + '.json', function (dic) {
                s.local.set('dic', JSON.stringify(dic, null, 2));
                var uid=data['uid'];
                var grp= data['grp'];
                notify(uid,grp,dic);
             });
        }
    })
})

$(document).on("click","#en,#el",function(){
    if(this.id!=s.local.get('LANG')) {
        s.local.set('LANG', this.id);
        $.getJSON(DOMAIN + 'local/' + data["lang"] + '/lang_' + data["lang"] + '.json', function (dic) {
            s.local.set('dic', JSON.stringify(dic, null, 2));
        })
        $('#loginpage').hide('fast').show('fast');
    }
})

$(document).on("click","#logout",function(){
    document.getElementById("notifyList").innerHTML ='';
    $('#pimage').attr('src','');
    $('#name').text('');
    $('#status').text('');
    s.local.clear();
//switch to login
    toggle('notifypage','loginpage');
})

$(document).on("click","span[id^='line_']",function() {
    var link=explode('_',this.id)[1];
    window.open(DOMAIN+link,"_system")
})

function notify(uid,grp,dic){
    var AJAX= DOMAIN+'api/GET/notify/?id='+uid+'&grp='+grp;
    nlist = {};
    nlist[1] = {
        0: {
            1: '/eoi/received',
            3: dic.NP_RECEIVED_EOIEE,
            4: 'c_eoi_received',
            5: 'n_eoi_received',
            7: dic.INFONOTIF_RECEIVEDEOIEE,
            8: dic.NP_ACTIVE_APPLEE
        },
        1: {1: '/eoi/sent', 3: dic.NP_APPL_SENTEE, 4: 'c_eoi_sent', 5: 'n_eoi_sent'},
        2: {1: '/eoi/sent', 3: dic.NP_SEND_EOIEE, 4: 'c_eoi_sent', 5: 'n_eoi_sent'},
        3: {
            1: '/eoi/received',
            3: dic.APPLICATIONSEE + ' ' + dic.RECEIVEDEE,
            4: 'c_eoi_received',
            5: 'n_eoi_received'
        },
        4: {1: '/eoi/accepted', 3: dic.NP_APPL_ACCEPTEDEE, 4: 'c_eoi_accepted', 5: 'n_eoi_accepted'},
        5: {1: '/eoi/favorite', 3: dic.NP_FAVORITE_APPLEE, 4: 'c_eoi_favorite', 5: 'n_eoi_favorite'},
        6: {
            1: '/eoi.php?page=1&flag=shortlist',
            3: dic.NP_APPL_SHORTLISTEDEE,
            4: 'c_interview_shortlisted',
            5: 'n_interview_shortlisted'
        },
        7: {
            1: '/eoi.php?page=1&flag=finalist',
            3: dic.NP_APPL_FINALLISTEDEE,
            4: 'c_interview_finalisted',
            5: 'n_interview_finalisted'
        },
        8: {1: '/interview', 3: dic.NP_INTERVIEW_LISTEDEE, 4: 'c_interview', 5: 'n_interview'},
        //9:{1:'/eoi.php?page=1&flag=completed',3:NP_INTERVIEW_COMPLETED,4:'c_interview_completed',5:'n_interview_completed'},
        10: {1: '/eoi.php?page=1&flag=hotlist', 3: dic.NP_HOTLISTEE, 4: 'c_eoi_hotlist', 5: 'n_eoi_hotlist'},
        11: {
            1: '/contact.php?page=1&flag=joboffer',
            3: dic.NP_JOBOFFEREE,
            4: 'c_contact_joboffer',
            5: 'n_contact_joboffer'
        },
        12: {
            1: '/message/chat',
            3: dic.NP_MESSENGEREE,
            4: 'c_message_chat',
            5: 'n_message_chat',
            7: dic.INFONOTIF_MESSANGEREE,
            8: dic.NP_COMMUNICATIONSEE
        },
        13: {1: '/message/inbox', 3: dic.NP_SPEEDMAILEE, 4: 'c_message_inbox', 5: 'n_message_inbox'},
        14: {
            1: '/contact/received',
            3: dic.CONTACT_REQUESTEE,
            4: 'c_contact_received',
            5: 'n_contact_received',
            7: dic.INFONOTIF_REQUESTSRECEIVEDEE,
            8: dic.NP_NET_CONTACT_REQUEE
        },
        15: {
            1: '/contact/accepted',
            3: dic.ACCEPTEDEE + ' ' + dic.CONTACTSEE,
            4: 'c_contact_accepted',
            5: 'n_contact_accepted',
            7: dic.INFONOTIF_REQUESTSRECEIVEDEE,
            8: dic.P_NET_CONTACT_REQUEE
        },
        16: {
            1: '/contact/favorite',
            3: dic.FAVORITEEE + ' ' + dic.CONTACTSEE,
            4: 'c_contact_favorite',
            5: 'n_contact_favorite'
        },
        17: {
            1: '/contact/network',
            3: dic.NETWORKEE + ' ' + dic.CONTACTSEE,
            4: 'c_contact_network',
            5: 'n_contact_network'
        },
        18: {1: '/contact', 3: dic.NP_TOTALEE, 4: 'c_contact_posts', 5: 'n_contact_posts'}
    };
    nlist[2] = {
        0: {
            1: '/eoi/received',
            3: dic.NP_RECEIVED_EOI,
            4: 'c_eoi_received',
            5: 'n_eoi_received',
            7: dic.INFONOTIF_RECEIVEDEOI,
            8: dic.NP_ACTIVE_APPL
        },
        1: {1: '/eoi/sent', 3: dic.NP_APPL_SENT, 4: 'c_eoi_sent', 5: 'n_eoi_sent'},
        2: {1: '/eoi/sent', 3: dic.NP_SEND_EOI, 4: 'c_eoi_sent', 5: 'n_eoi_sent'},
        3: {
            1: '/eoi/received',
            3: dic.APPLICATIONS + ' ' + dic.RECEIVED,
            4: 'c_eoi_received',
            5: 'n_eoi_received'
        },
        4: {1: '/eoi/accepted', 3: dic.NP_APPL_ACCEPTED, 4: 'c_eoi_accepted', 5: 'n_eoi_accepted'},
        5: {1: '/eoi/favorite', 3: dic.NP_FAVORITE_APPL, 4: 'c_eoi_favorite', 5: 'n_eoi_favorite'},
        6: {
            1: '/eoi.php?page=1&flag=shortlist',
            3: dic.NP_APPL_SHORTLISTED,
            4: 'c_interview_shortlisted',
            5: 'n_interview_shortlisted'
        },
        7: {
            1: '/eoi.php?page=1&flag=finalist',
            3: dic.NP_APPL_FINALLISTED,
            4: 'c_interview_finalisted',
            5: 'n_interview_finalisted'
        },
        8: {1: '/interview', 3: dic.NP_INTERVIEW_LISTED, 4: 'c_interview', 5: 'n_interview'},
        //9:{1:'/eoi.php?page=1&flag=completed',3:NP_INTERVIEW_COMPLETED,4:'c_interview_completed',5:'n_interview_completed'},
        10: {1: '/eoi.php?page=1&flag=hotlist', 3: dic.NP_HOTLIST, 4: 'c_eoi_hotlist', 5: 'n_eoi_hotlist'},
        11: {
            1: '/contact.php?page=1&flag=joboffer',
            3: dic.NP_JOBOFFER,
            4: 'c_contact_joboffer',
            5: 'n_contact_joboffer'
        },
        12: {
            1: '/message/chat',
            3: dic.NP_MESSENGER,
            4: 'c_message_chat',
            5: 'n_message_chat',
            7: dic.INFONOTIF_MESSANGER,
            8: dic.NP_COMMUNICATIONS
        },
        13: {1: '/message/inbox', 3: dic.NP_SPEEDMAIL, 4: 'c_message_inbox', 5: 'n_message_inbox'},
        14: {
            1: '/contact/received',
            3: dic.CONTACT_REQUEST,
            4: 'c_contact_received',
            5: 'n_contact_received',
            7: dic.INFONOTIF_REQUESTSRECEIVED,
            8: dic.NP_NET_CONTACT_REQU
        },
        15: {
            1: '/contact/accepted',
            3: dic.ACCEPTED + ' ' + dic.CONTACTS,
            4: 'c_contact_accepted',
            5: 'n_contact_accepted',
            7: dic.INFONOTIF_REQUESTSRECEIVED,
            8: dic.NP_NET_CONTACT_REQU
        },
        16: {
            1: '/contact/favorite',
            3: dic.FAVORITE + ' ' + dic.CONTACTS,
            4: 'c_contact_favorite',
            5: 'n_contact_favorite'
        },
        17: {
            1: '/contact/network',
            3: dic.NETWORK + ' ' + dic.CONTACTS,
            4: 'c_contact_network',
            5: 'n_contact_network'
        },
        18: {1: '/contact', 3: dic.NP_TOTAL, 4: 'c_contact_posts', 5: 'n_contact_posts'}
    };

   // setInterval(function() {
        $.getJSON(AJAX, function (res) {
            s.l(res)
            var counter = res.val.counter;
            var my = res.val.globalmy;
            //append HEADER
            $('#pimage').attr('src',my.pimage);
            $('#name').text(my.name);
            $('#status').text(GLOBAL.usergroups[my.status]);
            //append BODY
                document.getElementById("notifyList").innerHTML = notify_html(grp,my,counter,nlist,dic);
         })
  //   },10000);
}

function notify_html(grp,my,counter,nlist,dic){
    var html='';
    if (grp == 2) {
        for (i in nlist[1]) {
            if ((grp == 1 && [2, 3].includes(i) == false) || (grp == 2 && [1, 14].includes(i) == false)) {
                if (my.affiliate == 3 && [0, 2, 3, 4, 5, 6, 7, 9, 10, 11].includes(i)) {
                } else {
                    if (my.affiliate == 2 && i == 2) {
                    } else {

                        if (i == 0) {
                            html += '<div class="notifListTitle2"><span class="notifNum">TODAY</span><span class="notifType floatLeft">TOTAL</span></div>';
                        }

                        if (i == 0 || i == 12 || (grp == 1 && i == 14) || (grp == 2 && i == 15)) {
                            html += '<div class="notifListTitle">' + nlist[grp][i][8] + '</div>';
                        }

                        if (grp == 2 && i == 0) {
                            continue;
                        } else {
                            html += '<div class="notifPending">' +
                                '<span id="line_' + nlist[grp][i][1] + '" class="notifPending2">' +
                                '<span class="notifState">' + nlist[grp][i][3] + '</span>' +
                                '<span class="notifNum">' + counter[nlist[grp][i][5]] + '</span>' +
                                '<span class="notifType floatLeft">' + counter[nlist[grp][i][4]] + '</span>' +
                                '</span>' +
                                '</div>';
                        }

                        if (i == 1 || i == 3 || i == 5) {
                            html += '<div class="notifPendingLine1"></div>';
                        }
                    }
                }
            }
        }

        html += '<div class="notifPending">' +
            '<span class="notifPending2b">' +
            '<span class="notifState">' + dic.TOTALEOI_CONTACTREQUESTS + '</span>' +
            '<span class="notifNum">-</span>' +
            '<span class="notifType">'+counter['totaleoicontactsrequests']+'</span>' +
            '</span>' +
            '</div>';
        html += '<div class="notifPending">' +
            '<span class="notifPending2c">' +
            '<span class="notifState">' + dic.DAILY_ACTIVITY_TOTAL + '</span>' +
            '<span class="notifNum">'+counter['dailyactivitytotal']+'</span>' +
            '<span class="notifType">-</span>' +
            '</span>' +
            '</div>' +
            '</div>';

    } else {

        for (var i in nlist[1]) {
            if ((grp == 1 && [2,3].includes(i)==false) || (grp == 2 && [1, 14].includes(i)==false)) {
                if (my.affiliate == 3 && [0, 2, 3, 4, 5, 6, 7, 9, 10, 11].includes(i)) {
                } else {
                    if (my.affiliate == 2 && i == 2) {
                    } else {

                        if (i == 0) {
                            html += '<div class="notifListTitle2"><span class="notifNum">TODAY</span><span class="notifType floatLeft">TOTAL</span></div>';
                        }

                        if (i == 0 || i == 12 || (grp == 1 && i == 14) || (grp == 2 && i == 15)) {
                            html += '<div class="notifListTitle">' + nlist[grp][i][8] + '</div>';
                        }

                        if (grp == 2 && i == 0) {
                            continue;
                        } else {
                            html += '<div class="notifPending">' +
                                '<span id="line_' + nlist[grp][i][1] + '" class="notifPending2">' +
                                '<span class="notifState">' + nlist[grp][i][3] + '</span>' +
                                '<span class="notifNum">' + counter[nlist[grp][i][5]] + '</span>' +
                                '<span class="notifType floatLeft">' + counter[nlist[grp][i][4]] + '</span>' +
                                '</span>' +
                                '</div>';
                        }
                        if (i == 1 || i == 3 || i == 5) {
                            html += '<div class="notifPendingLine1"></div>';
                        }
                    }
                }
            }
        }

        if (my.affiliate != 3) {
            html += '<div class="notifPending">' +
                '<span class="notifPending2b">' +
                '<span class="notifState">' + dic.TOTALEOI_CONTACTREQUESTSEE + '</span>' +
                '<span class="notifNum">-</span>' +
                '<span class="notifType">'+counter['totaleoicontactsrequests']+'</span>' +
                '</span>' +
                '</div>';
        }

        html += '<div class="notifPending">' +
            '<span class="notifPending2c">' +
            '<span class="notifState">' + dic.DAILY_ACTIVITY_TOTALEE + '</span>' +
            '<span class="notifNum">'+counter['dailyactivitytotal']+'</span>' +
            '<span class="notifType">-</span>' +
            '</span>' +
            '</div>' +
            '</div>';
    }
    return html;
}