/*
 spdjs v0.01
 UPDATES
 groups all functions
 1. g.forms
 runs libs.js
 */
( function( global, factory ) {
    "use strict";
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "spd requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }
// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

    /*
     * page compatibility
     * */
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var ieversion = new Number(RegExp.$1);
        if (ieversion <= 7) {
            s.alert("Version is not compatible. Please, update Internet Explorer.");
        }
    }
    ;
    /*
     FIXES OLD BROWSERS
     */
    if (typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        }
    }
    ;
    //check for enabled cookies
    if (navigator.cookieEnabled == false) {
        s.alert("Please, enable cookies from your browser settings to continue.");
    }

//set g
    var s = {};

    s.webstorage = {
        name : "",
        cookie: {
            get: function (name, r) {
                return (r = RegExp('(^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie)) ? r[2] : false;
            },
            set: function (name, value,time) {
                if (document.cookie.indexOf(name) >= 0) {
                    this.clear(name);
                }
                var exp = new Date();
                var expir = typeof time!='undefined' ? exp.getSeconds(exp.getSeconds() + time) : exp.setMonth(exp.getMonth() + 12);

                document.cookie = name + "=" + value + ";expires=" + expir + "; domain=" + s.serverbase() + " ; path=/";
                return true;
            },
            expires: function (name, value, expires, path) {
                if (document.cookie.indexOf(name) >= 0) {
                    document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
                }
            },
            clear: function (name) {
                if (document.cookie.indexOf(name) >= 0) {
                    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                }
            },
            delete: function (name) {
                if (this.get(name)) {
                    document.cookie = name + "=" +
                        ";path=/" +
                        ((s.serverbase()) ? ";domain=" + s.serverbase() : "") +
                        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
                    return true;
                }
            },
            deleteAll: function (except) {
                var cookies = document.cookie.split(";");

                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var eqPos = cookie.indexOf("=");
                    var name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
                    if (!g.in_array(name, except)) {
                        //g.l(name)
                        this.delete(name);
                    }
                }
            }
        },
        //sessionStorage update with Chainable (Cascading) Methods
        session: {
            'name':'',
            'get': function (name) {
                if (sessionStorage.getItem(name)) {
                    return sessionStorage.getItem(name);
                }else{
                    return false;
                }
            },
            'set': function (name, value) {
                sessionStorage.setItem(name, value);
                return this;
            },
            'unset': function (name) {
                sessionStorage.removeItem(this.name);
                return this;
            },
            'clear': function () {
                sessionStorage.clear();
                return this;
            }
        },
        //sessionStorage
        local: {
            'get': function (name) {
                if (localStorage.getItem(name)) {
                    return localStorage.getItem(name);
                } else {
                    return false;
                }
            },
            'set': function (name, value) {
                localStorage.setItem(name, value);
            },
            'unset': function (name) {
                localStorage.removeItem(name);
            },
            'clear': function (name) {
                localStorage.clear();
            }
        }
    };

    s.vars = {
        version: 0.01,
        _: function (selector) {
            return document.querySelector(selector);
        },
        l: function (val, color, background) {
            if (window.console)
                if(window.navigator.userAgent.indexOf("Edge") > -1){
                    return console.log(val);
                }else {
                    if (typeof val == 'object') {
                        return console.dir(val);
                    } else {
                        var col = typeof (color) != 'undefined' ? color : '#111900';
                        var bg = typeof (background) != 'undefined' ? background : '#fff';
                        return console.log('%c' + val, 'background: ' + bg + '; color:' + col);
                    }
                }
        },
        serverbase: function () {
            return this.hostArray.length == 3 ? this.hostArray[1] + "." + this.hostArray[2] : window.location.host
        },
        isWorkersAvailable: function() {
            return !!window.Worker;
        },
        loadJS: function (url, div, callback) {
            var div = typeof(div)!='undefined'? div:'head';
            // Adding the script tag to the head as suggested before
            var head = document.getElementsByTagName(div)[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            // Then bind the event to the callback function.
            // There are several events for cross browser compatibility.
            script.onreadystatechange = callback;
            script.onload = callback;
            head.appendChild(script);
        },
        phptimestamp: function () {
            // var time= typeof timestamp!='undefined' ? jstimestamp: Date.now();
            return Math.floor(Date.now() / 1000);
        },
        get: typeof GLOBAL!='undefined' ? GLOBAL :'',
        // man: "PHP timestamp, equivalent to php time()",
        // usage: "g.phptimestamp.get()",
        // get : function() { var vars = {}; var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {vars[key] = value;});return vars;},
        hash_target: window.location.hash.split('#')[1],
        // siteurl: GS.REFERER+ window.location.host + '/',
        hostArray: window.location.host.split('.'),
        host: function () {
            if (this.hostArray[0] == 'www') {
                this.hostArray.splice(0, 1);
            }
            return this.hostArray.join('.');
        },
        pathExt: window.location.host.toString().split('.')[0] == 'm' ? window.location.host.toString().split('.')[2]  //mobile m.
            : (typeof window.location.host.toString().split('.')[2] != 'undefined' //com.au
                ? window.location.host.toString().split('.')[1] + '.' + host.toString().split('.')[2]
                : window.location.host.toString().split('.')[1]),
        country: typeof window.location.host.toString().split('.')[2] != 'undefined'
            ? window.location.host.toString().split('.')[2]
            : window.location.host.toString().split('.')[1],
        serverbase: function () {
            return this.hostArray.length == 3 ? this.hostArray[1] + "." + this.hostArray[2] : window.location.host
        },
        curdir: window.location.href.toString().split('/')[3],
        urlfile: typeof window.location.href.toString().split('/')[3] == 'undefined'
            ? window.location.href.toString().split('/')[2]
            : window.location.href.toString().split('/')[3],
        url: window.location.pathname,
        redirect:function(link){location.href(link)},
        lastget: function () {
            return window.location.pathname.substring(this.url.lastIndexOf('/') + 1);
        },
        my: typeof s.GLOBAL != "undefined" ? s.GLOBAL.my : '',
        loc: window.country,
        loadJS: function (url, div, callback) {
            var div = typeof(div)!='undefined'? div:'head';
            // Adding the script tag to the head as suggested before
            var head = document.getElementsByTagName(div)[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            // Then bind the event to the callback function.
            // There are several events for cross browser compatibility.
            script.onreadystatechange = callback;
            script.onload = callback;
            head.appendChild(script);
        },
        //type :  info |  danger | success | warning
        notify : function(type,message,title,url){
            $.notify({
                // options
                icon: 'glyphicon glyphicon-'+type+'-sign',
                title: title,
                message: message,
                url: url,
                target: '_blank'
            },{
                // settings
                element: 'body',
                position: null,
                type: type,
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: "bottom",
                    align: "left"
                },
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 5000,
                timer: 1000,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInUp',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" style="width:20% !important" role="'+type+'">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
            });
        },
        loadExt: function(ext,callback){
            this.loadJS('/js/ext/'+ext+'.js','head',callback);
        }
    };
    s = $.extend({}, s.webstorage, s.vars,bootbox);


    // if(!s){var s={};}

    s.clas= {};

    /*  CLASSIFICATION 		profile.js	*/
    s.clas.profile = function() {

        if (GLOBAL.mode == 'newad' || GLOBAL.mode == 'newnotice') {
            set_classification_form();
            professions_form('', '');
        }

        function set_classification_form() {
            $.getJSON(pathClassifJSON, function (data) {
                var class_text = '<option value=0>' + dic.SELECT_CLASSIFICATION + '</option>';
                var selHint = '';
                //classFromSub(session('s_subclassif'),'filter_classification');
                var selClass = $('#classification_value').val();
                for (var j in data) {
                    selHint = selClass == data[j] ? 'selected="selected"' : "";
                    class_text += '<option value="' + data[j] + '" ' + selHint + '>' + j + '</option>';
                }
                //disable classif dropdown if post active
                var disableActivePost = $('#post_status').val() == 2 ? 'disabled' : ''
                //append
                $('#pselectnewclassif').html('<p id="pselect_classification">' + dic.SELECT_CLASSIFICATION + ':</p><div class="filter_classification"><select id="pfilter_classification" ' + disableActivePost + '>' + class_text + '</select></div>');
            })
        }

        function subclassification_selected_form(subcl, mode) {
            // s.l('subclassification_selected_form')
            //subclassification dropdown
            $.getJSON(pathSubclassifJSON, function (data) {
                var subclassif_text = '<p id="pselect_classification">' + dic.SELECT_SUBCLASSIFICATION + ':</p>';
                var selectedSub, sel;

                //set classif from dom
                var selClass = $('#pfilter_classification').val();
                var rangeSubclass = session('s_range_subclassif');

                for (var i in data) {
                    if (selClass == data[i].classif_id) {

                        if ((mode == 'lu' || mode == 'lu1') && data[i].id == subcl) {
                            $('#psubclassification_list').append('<div id="psubclassif_' + data[i].id + '" class="addSelectionBox">' + data[i].subclassif + '<button class="but135" id="deleteSubclassif_' + data[i].id + '_' + $('#postid').val() + '"></button></div>');
                            $('#psubclassiform_' + data[i].id).prop('checked', true);
                        }

                        if ($.isArray(subcl)) {
                            selectedSub = in_array(data[i].id, subcl) ? ' checked="checked" ' : '';
                        } else {
                            selectedSub = data[i].id == subcl ? ' checked="checked" ' : '';
                        }
                        subclassif_text += '<span class="subclassTotal2"><div class="subclassCheck">' +
                            '<input value="' + (in_array(GLOBAL.mode,['newad','newnotice']) ? data[i].id  : data[i].subclassif) + '" type="checkbox" name="subclassification[]" id="psubclassiform_' + data[i].id + '" ' + selectedSub + '>' +
                            '</div>' + data[i].subclassif + '</span>';
                    }
                }
                if (mode == 'reset') {
                    //$("#filter_subclassification").remove();
                    $('#pf_subclassification').html(subclassif_text);
//		 $("#filter_subclassification option:selected").text('Choose Subclassification');
                } else {
                    if (mode != 'lu1') {
                        $('#pf_subclassification').html(subclassif_text).show('fast');
                    }
                }
            });
        }

        function professions_form(subcl, selClass) {

            $.getJSON(pathProfessionJSON, function (data) {

                //takeout the list of selected professions
                var selClass = $('#pfilter_classification').val();
                var professions_text = '<option value=0>' + dic.SELECT_SPECIFIC_JOB + '</option>';
                //log(subclassif)
                //log(selClass)
                for (var j in data) {

                    if (subcl != '' && selClass != 0) {
                        if (!in_array(data[j].subclassif_id, subcl) && selClass == data[j].classif_id) {
                            //log(data[j].subclassif_id)
                            professions_text += '<option id="' + data[j].id + '" value="' + data[j].subclassif_id + '">' + j + '</option>';
                        }
                    } else if (subcl != '') {
                        if (!in_array(data[j].subclassif_id, subcl)) {
                            professions_text += '<option id="' + data[j].id + '" value="' + data[j].subclassif_id + '">' + j + '</option>';
                        }
                    } else if (selClass != 0) {
                        if (selClass == data[j].classif_id) {
                            professions_text += '<option id="' + data[j].id + '" value="' + data[j].subclassif_id + '">' + j + '</option>';
                        }
                    } else {
                        professions_text += '<option id="' + data[j].id + '" value="' + data[j].subclassif_id + '">' + j + '</option>';
                    }
                }
                //append
                $(".specificJobs").remove();
                $('<div class="specificJobs"><select id="pfilter_professions" name="profession">' + professions_text + '</select></div>').appendTo('#pf_professions').show('fast');
                //$("#filter_professions option:selected").text('Select Specific Job');

            })
        }

        function run_subclassif_forms(mode) {
            var postid = $("#postid").val();
            $.ajax({
                type: 'GET',
                url: AJAXFOLDER + 'profile.ajax.php',
                data: {a: 'selectSubclassifs', b: postid},
                dataType: 'json',
                success: function (data) {
                    //append open professions form
                    set_classification_form();

                    professions_form(data, '');
                    //append open subclassifications form
                    subclassification_selected_form(data, 'reset');
                }
            });
        }

        function add_remove_subclassif(id, param) {
            var value = $('#psubclassiform_' + id).is(':checked') == true ? 1 : 0;
            var valueText = $('#psubclassiform_' + id).attr('value');
            var postid = _('#postid') != null ? _('#postid').value : '';
            //pass ajax
            ajax('?a=insDelSubclassif&b=' + postid + '&c=' + id + '&d=' + value, AJAXFOLDER + 'profile.ajax.php');
            //reset forms
            if (param != 'specific') {
                run_subclassif_forms('reset');
            } else {
                subclassification_selected_form(id);
            }
            if (value == 1) {
                $('<div id="psubclassif_' + id + '" class="addSelectionBox">' + valueText + '<button class="but135" id="deleteSubclassif_' + id + '_' + postid + '"></button></div>').appendTo('#psubclassification_list');
            } else {
                $('#psubclassif_' + id).remove();
            }
        }

        function classFromSub(subclass,divid){
            //log('classFromSub')
            return $.getJSON(pathSubclassifJSON,function (data){
                //provide to dom
                if (typeof subclass !='undefined' && subclass !=''){
                    var classif=gsubclassif(subclass,data,'value_from_subclassif');
                    _(divid).value=classif;
                }
            })
        }

        function set_subclassification_form(subclass,mode){
            // log('set_subclassification_form')
            $.getJSON(pathSubclassifJSON, function(data) {
                var class_text='<p id="pselect_classification">'+dic.SELECT_SUBCLASSIFICATION1+':</p>';

                var selClass=$('#pfilter_classification').val();
                for(var j in data){
                    if(selClass==data[j].classif_id){
                        var selected= typeof subclass!='undefined' && data[j].subclassif_id==subclass ? 'checked':'';
                        class_text += '<span class="subclassTotal2"><div class="subclassCheck"><input type="checkbox" '+selected+' name="subclassification[]" id="newsubclassif_'+ data[j].id +'" value="'+data[j].id+'"></div>' + data[j].subclassif+'</span>';
                    }}
                //append
                $('#pf_subclassification').html('<div id="filter_sub_of_classification">'+class_text+'</div>');

                if(mode=='new'){
                    $('#pf_subclassification input[value="'+subclass+'"]').prop('checked',true);
                }
            })
        }

        function professions_choice(subclassif,optionid){

            // var selClass=$('#classification_value').val();
            var selClass=$('#pfilter_classification').val();
            //not the value text of professions but subclassif_en
            //var valueText=$("#filter_professions option[id='"+optionid+"']").text();
            var postid= $('#postid').val() !=null ? $('#postid').val() : '';
            $('input:checkbox[name*="subclassification"][value='+subclassif+']').prop('checked',true);
            var sub_range= $("input[id^='newsubclassif_']").map(function () {return parseInt(this.id.replace('newsubclassif_',''));});
            //if classification is set
            if(selClass !=0){
                //check if specific is in range, if not provide confirmation and change #filter_classification
                if(!in_array(subclassif,sub_range)){
                    // bootbox.confirm(dic.SELECTED_SUBCLASSIFICATION_LOST+'. ' +dic.SURE,function(result) {
                    //     if (result==true){
                    $.getJSON(pathSubclassifJSON, function(data) {
                        for(var i in data) {
                            if(data[i].id==subclassif){
                                $('#pfilter_classification').val(data[i].classif_id);
                                //open subclassif panel
                                if(GLOBAL.mode=='newad' || GLOBAL.mode=='newnotice') {
                                    // $('#pf_subclassification').remove();
                                    set_subclassification_form(subclassif, 'new');
                                }
                                $('#pf_subclassification input[value="'+subclassif+'"]').prop('checked',true);
                            }}
                    })
                    // }
                    // })
                }

            }else{  //set classification and sub
                // $('#classification_choice').text();
                //gets classif from subclass
                $.when(classFromSub(subclassif,'#pfilter_classification')).then(function(){

                    //open subclassif panel
                    if(GLOBAL.mode=='newad' || GLOBAL.mode=='newnotice') {
                        set_subclassification_form(subclassif, 'new');
                    }
                    $('#pf_subclassification input[value="'+subclassif+'"]').prop('checked',true);
                })
                var subArray=[]
                subArray.push(subclassif)
                sessionSet('s_subclassif',JSON.stringify(subArray))
                professions_form(subclassif,selClass);
                //create sub label
                $('<div id="psubclassif_'+subclassif+'" class="addSelectionBox"><button class="deleteSubclassif" id="deleteSubclassif_'+subclassif+'_'+postid+'"></button></div>').appendTo('#psubclassification_list');
            }
        }

        function professions_choice_cv(subclassif,optionid){
            // var selClass=$('#classification_value').val();
            var selClass=$('#pfilter_classification').val();
            // log('selClass:'+selClass)
            // log('subclassif:'+subclassif)
            // log('specific	:'+optionid)
            var postid= $('#postid').val() !=null ? $('#postid').val() : '';
            // log('postid:'+postid)

            // add_remove_subclassif(subclassif,'specific');
            $.when(classFromSub(subclassif,'#pfilter_classification')).then(function(){
                //open subclassif panel
                //cv edit insert to db cv_subclassif
                $.get(AJAXFOLDER + 'profile.ajax.php', {a: 'insSubclassif', b: postid, c: subclassif}, function (data) {
                    if (data == 'Yes') { //create label
                        // $('<div id="subclassif_' + subclassif + '" class="addSelectionBox"><button  class="but135" id="deleteSubclassif_' + subclassif + '_' + postid + '"></button></div>').appendTo('#subclassification_list');
                        var sub_range= $("input[id^='psubclassiform_']").map(function () {return this.id.replace('psubclassiform_','');});
                        //if classification is set
                        if(selClass !=0){
                            //check if specific is in range, if not provide confirmation and change #filter_classification
                            // s.l(sub_range)
                            if(!in_array(subclassif,sub_range)){
                                // bootbox.confirm(dic.SELECTED_SUBCLASSIFICATION_LOST+'. ' +dic.SURE,function(result) {
                                //     if (result==true){
                                ajax('?a=deleteall&b='+postid,AJAXFOLDER+'profile.ajax.php');
                                $('div[id*="psubclassif_"]').each(function(){$(this).remove();})
                                $('.subclassTotal2').remove();
                                $.getJSON(pathSubclassifJSON, function(data) {
                                    for(var i in data) {
                                        if(data[i].id==subclassif){
                                            $('#pfilter_classification').val(data[i].classif_id);
                                            subclassification_selected_form(subclassif,'lu')
                                            //open subclassif panel
                                        }}
                                    // set_subclassification_form(subclassif, 'new');
                                    ajax('?a=insDelSubclassif&b='+postid+'&c='+subclassif+'&d=1',AJAXFOLDER+'profile.ajax.php');
                                })
                                // }
                                // })
                            }else{
                                subclassification_selected_form(subclassif,'lu1')
                            }
                        }else{  //set classification and sub
                            //gets classif from subclass
                            //create sub label
                            subclassification_selected_form(subclassif,'lu');
                        }
                        $('#psubclassiform_'+subclassif).prop('checked',true);

                    }
                })
            })

        }


        $(document).on("click", "#editButtonSubclassif", function () {

            toggle_edit('textWork', 'cvExperienceEdit');
            toggle_edit('textRelevant', 'cvExperienceRelevant');
            toggle_edit('classYearsRead', 'classYearsEdit');
            toggle_edit('readSpecific', 'editSpecific');
            toggle_edit('readSkills', 'editSkills');
            opener2('helpSpecificJobP');
            if ($('#editFormSubclassif').css('display') == 'block') {
                var newclass = $("#pfilter_classification option:selected").text()
                var newclassval = $("#pfilter_classification").val()
                $('#classification_value').val(newclassval);
                $("#pclassification_choice").text(newclass);
                $('#pclassificationLabel').show();
                $('#psubclassification_list').show();
                $('#psubclassif_0').remove();
            } else {
                $('#pclassificationLabel').hide();
                $('#psubclassification_list').hide();
            }
            opener2('editFormSubclassif');
            $.each($("button[id^='deleteSubclassif']"), function () {
                opener2(this.id);
            });
            run_subclassif_forms();
        })

        $(document).on("change", "#pfilter_classification", function () {
            var newclass = $("#pfilter_classification option[value='" + this.value + "']").text();
            var classif = this.value;
            $('#pclassification_choice').text(newclass);
            $('#classification_value').val(classif);
            // bootbox.confirm(dic.SELECTED_SUBCLASSIFICATION_LOST + '. ' + dic.SURE, function (result) {
            //     if (result == true) {
            var postid = _('#postid') != null ? _('#postid').value : '';
            ajax('?a=deleteall&b=' + postid, AJAXFOLDER + 'profile.ajax.php');
            $('div[id^="psubclassif_"]').each(function () {
                $(this).remove();
            })
            //reset
            subclassification_selected_form('', 'reset')
            professions_form('', classif);
            // }
            // });

        })
        if (GLOBAL.mode != 'newad' && GLOBAL.mode != 'newnotice') {
            $(document).on("click", "input[id^='psubclassiform_']", function () {
                if($(this).prop('checked')==false && $("input[id^='psubclassiform_']:checked").length==0 && $('#post_status').val()==2){
                    $(this).prop('checked',true);
                    bootbox.alert("You cannot uncheck all the subclassifications in this mode.")
                }else {
                    var id = this.id.replace('psubclassiform_', '');
                    add_remove_subclassif(id);
                }
            })
        }

        // /*lookup from professions*/
        $(document).on('keyup',"#lookup",function(){
            var listi='';val= toTitleCase(this.value).trim(); length=this.value.length;

            $.getJSON(pathProfessionJSON, function (data) {
                var counter=0;
                // g.l(data)
                for (var j in data) {
                    if (j.includes(val)) {
                        var piece= j.split(val);
                        listi += '<li id="lu'+data[j].id+'" val="lu'+data[j].subclassif_id+'">'+piece[0]+'<span style="background:yellow">'+val+'</span>'+piece[1]+'</li>';
                        counter +=1
                    }
                }
                if (counter >0 && length >0) {
                    $('#lookuplist').slideDown('fast');
                    $('#lookuplist').html(listi)
                    // $('#lookuplist').html($('#lookuplist').html().replace("*", '<span class="yellow">'+val+'</span>'));
                    $('#lookupcounter').text(counter)
                } else {
                    $('#lookuplist').slideUp('fast')
                    $('#lookupcounter').text(0)
                }
            })
        })

        //specific job 	HELP
        $(document).on('click',"li[id^='lu']",function(){
            var optionid= this.id.replace('lu','');
            var subclassif= $(this).attr('val').replace('lu','');
            if(SPGROUP==1){
                professions_choice_cv(subclassif,optionid)
            }else {
                if(GLOBAL.mode=='newad' || GLOBAL.mode=='newnotice') {
                    professions_choice(subclassif, optionid)
                }else{
                    professions_choice_cv(subclassif, optionid)
                }
            }
            $('#lookuplist').slideUp('fast');
            $('#lookup').val('');
            $('#lookupcounter').val(0);
        })
    }

//
// //SEARCH CRITERIA AND FILTERS SUBLCLASSIFICATION FUNCTIONS
// /*		classification form		home_logged.js */
    s.clas.search = function(){

        /*
         * return one by default array when type=array
         * */

        function set_classification_form2(session) {
            // log('set_classification_form2')
            var selClass = JSON.parse(session);
            var subclass = selClass != false ? selClass[0] : 1;
            //read subclass json
            $.getJSON(pathSubclassifJSON, function (subdata) {
                //provide to dom
                var classif = gsubclassif(subclass, subdata, 'value_from_subclassif');
                sessionSet('s_classif',classif)
                //log(classif)
                //new json classif read
                $.getJSON(pathClassifJSON, function (data) {
                    var class_text = '<option value=0>' + dic.SELECT_CLASSIFICATION + '</option>';
                    var selHint = '';

                    for (var j in data) {
                        selHint = classif == data[j] ? 'selected="selected"' : "";
                        class_text += '<option value="' + data[j] + '" ' + selHint + '>' + j + '</option>';
                    }
                    //append
                    var selectnew = '<p>' + dic.SELECT_CLASSIFICATION + ':</p><div class="filter_classification"><select id="sfilter_classification" name="classification">' + class_text + '</select></div>';
                    $('#sselectnewclassif').html(selectnew);
                })
            })
        }

        function set_classification_formb() {
            $.getJSON(pathClassifJSON, function (data) {
                var class_text = '<option value=0>' + dic.SELECT_CLASSIFICATION + '</option>';
                var selHint = '';
                //classFromSub(session('s_subclassif'),'filter_classification');
                var selClass = session('s_classif')!=false ?  session('s_classif') : $('#sfilter_classification').val();
                for (var j in data) {
                    selHint = selClass == data[j] ? 'selected="selected"' : "";
                    class_text += '<option value="' + data[j] + '" ' + selHint + '>' + j + '</option>';
                }
                //append
                $('#sselectnewclassif').html('<p id="pselect_classification">' + dic.SELECT_CLASSIFICATION + ':</p><div class="filter_classification"><select id="sfilter_classification">' + class_text + '</select></div>');
            })
        }

        function set_subclassification_form2(sess){
            // log('set_subclassification_form2')
            // if(sess!=false) {
            $.getJSON(pathSubclassifJSON, function (data) {
                var class_text = '';
                var checked, selHint = '';
                //sess is s_subclassif OR s_range_subclassif
                var sel_subs = session('s_subclassif') != false ? JSON.parse(session('s_subclassif')) : '';
                var selrange_subs = session('s_range_subclassif') != false ? JSON.parse(session('s_range_subclassif')) : '';
                var classif_value= $('#sfilter_classification').val();
                var divClass = typeof(classif_value)!='undefined' ? classif_value : session('s_classif');

                for (var j in data) {
                    //case 1
                    checked = in_array(data[j].id, sel_subs) ? 'checked="checked"' : '';

                    if (divClass != 0 && typeof divClass != 'undefined') {
                        // log('point1')
                        if (data[j].classif_id == divClass) { //log('case 0')
                            class_text += '<span class="subclassTotal2"><div id="sf_sub" class="subclassCheck"><input ' + checked + ' type="checkbox" id="ssubclassif" value="' + data[j].id + '"></div>' + data[j].subclassif + '</span>';
                        }
                    } else if (selrange_subs != '') { //change classif mode
                        if (in_array(data[j].id, selrange_subs)) {
                            // log('point2')
                            // log(selrange_subs)
                            class_text += '<span class="subclassTotal2"><div id="sf_sub" class="subclassCheck"><input type="checkbox" id="ssubclassif" value="' + data[j].id + '" ' + checked + '></div>' + data[j].subclassif + '</span>';
                        }
                    }
                }

                if (divClass != 0) {
                    $('#sf_sub').remove();
                    var subform = '<div id="sf_sub"><span class="filtersTitles">' + dic.SUBCLASSIFICATIONS + '</span><div class="subclassScroll">' + class_text + '</div>';
                    $('#sf_subclassification').append(subform);
                }
            })

            // $('.classeplast').hide();
            // }
        }

        function sRangeSubclassif(clasifVal,favorite){
            return $.getJSON(pathSubclassifJSON,function (data){
                //log(clasifVal)
                var srange = favorite==true ? '_fav': '';
                var res = gsubclassif(clasifVal,data,'array_from_classif');
                if(typeof res !='undefined'){
                    sessionSet('s_range_subclassif'+srange,JSON.stringify(res, null, 2));
                }
            });
        }

        //subclassification
        //INI CLASSIFICATION SUBCLASSIFICATION
        var sub_range = session('s_range_subclassif') != false ? session('s_range_subclassif') : session('s_subclassif');
        if(session('s_subclassif')!=false && _('#submitCriteria2')!=null){_('#submitCriteria2').className='but18';}
        if (sub_range != false) {
            set_classification_form2(sub_range);
        } else {
            set_classification_formb();
        }
        set_subclassification_form2(sub_range);
        //professions
        // var s_subvals = JSON.parse(session('s_subclassif'));
        // professions_form(s_subvals);
        //insert subclassification from profession dropdown form

        $(document).on("change","#sfilter_classification",function(){
            //reset sessions.
            switch_search_to_criteria()
            if(this.value==0){
                sessionUnset('s_range_subclassif');
                sessionUnset('s_subclassif');
                $('.subclassScroll').hide()
                sessionSet('s_mode','criteria');

                if(GLOBAL.mode=='search'){
                    var selClass=$('#sfilter_classification').val();
                    professions_form('',selClass);
                }else{
                    reset('wrapper1');
                    sessionUnset('saction');
                    if(in_array(GLOBAL.mode,['cv','post'])){    saveSearchObj(); Ini.prototype.readLoop(); }
                }

            }else{
                //when changing classsif on filter and criteria
                sessionUnset('s_subclassif');
                sessionSet('s_classif',this.value);
                $.when(sRangeSubclassif(this.value)).then(function(){
                    if(GLOBAL.mode=='search'){
                        professions_form('',this.value);
                    }else{
                        reset('wrapper1');
                        sessionUnset('saction');
                        if(in_array(GLOBAL.mode,['cv','post'])){   saveSearchObj();   Ini.prototype.readLoop(); }
                    }
                });
            }
            set_subclassification_form2(0);
        })

        $(document).on("click","#ssubclassif",function()   {
            //add_subclassification_selection();
            switch_search_to_criteria();
            var subs = $("#sf_subclassification input:checkbox:checked").map(function(){
                return $(this).val();
            }).get();
            var subclasses=typeof subs !== 'undefined' && subs.length > 0 ? JSON.stringify(subs, null, 2) : '';
            sessionSet('s_subclassif',subclasses);
            if(GLOBAL.mode !='search'){
                reset('wrapper1');
                sessionUnset('saction');
                if(in_array(GLOBAL.mode,['cv','post'])){ saveSearchObj();   Ini.prototype.readLoop(); }
            }else{
                //reset professions form
                var s_subvals=JSON.parse(session('s_subclassif'));
                var selClass=$('#sfilter_classification').val();
                professions_form(s_subvals,selClass);

            }

            //activate submit button
            // if (session('s_mode')=='criteria'){
            //log(session('s_subclassif'))
            if(!in_array(GLOBAL.mode,['cv','post','user'])) {
                if (session('s_subclassif') != false && session('pop_search') == 1) {
                    _('#submitCriteria2').className = 'but18';
                } else {
                    _('#submitCriteria2').className = 'but18Lock';
                }
            }
            // }

        })

    }
//
// /*		subclassification form		home_logged.js */

//
// /*		PROFESSIONS FORM [SPECIFIC JOB]	home_logged.js - profile.js	*/

//
// /* 	subclassification_from_profession 	profile.js 	*/
// function subclassification_from_profession(value){
//     $.getJSON(pathProfessionJSON, function(data) {
//         for(var j in data){
//             if (data[j].subclassif_id==value){
//                 $('#'+pfx+'subclassif_'+value).prepend(data[j].subclassif);break;
//             }
//         }
//     })
// }
//
// //add subclass selection FUNCTION
// function add_subclassification_selection(){
//     var subs = $('#'+pfx+'f_subclassification input:checkbox:checked').map(function(){
//         return $(this).val();
//     }).get();
//     var subclasses=typeof subs !== 'undefined' && subs.length > 0 ? JSON.stringify(subs) : '';
//     sessionSet('s_subclassif',subclasses);
//
//     if(GLOBAL.mode !='search'){
//         $.when(listJSON(pfx+'subclassif',$(this).val(),'s_range_subclassif')).then(function() {
//             reset('wrapper1');
//             sessionUnset('saction');
//             if(in_array(GLOBAL.mode,['cv','post'])){   Ini.prototype.readLoop(); }
//         })
//     }
//
// }
//



//
// function listsubclassFromProfession(profid,session_key){
//     // log('listsubclassFromProfession');
//     return $.getJSON(pathProfessionJSON,function (data){
//
//         var classif= data[profid].classif_id;
//         var res=[];
//         for(var i in data) {
//             if(data[i].classif_id==classif)
//                 if(i>1 && data[i].subclassif_id != data[i-1].subclassif_id)
//                     res.push(data[i].subclassif_id);
//         }
//         if(typeof res !='undefined'){
//             sessionSet(session_key,JSON.stringify(res, null, 2));
//             // log(session(session_key))
//         }
//     });
// }
//



//
// function getSubclassif(subclassif,divid){
//     // log('getSubclassif')
//     return $.getJSON(pathSubclassifJSON,function (data){
//         //multiple
//         var classif= data[subclassif].subclassif +' - '+ data[subclassif].classif;
//         //provide to dom
//         $(divid).html(classif);
//         //log(classif);
//     });
// }
//


//
// //search

// //EVENTS
// //SPECIFIC JOBS insert subclassification from profession dropdown form
// $(document)
//     .on("change","#"+pfx+"filter_professions",function(){
//
//     var newsubclass=this.value;
//     var selClass=$('#'+pfx+'filter_classification').val();
// //	var optionid= $(this).children(":selected").attr("id");
//
//     if(selClass ==0){
//         //open classif drop
//         $.when(classFromSub(newsubclass,'#'+pfx+'filter_classification')).then(function(){
//             //newclass=$('#classification_value').val();
//             //open subclassif panel
//             set_subclassification_form(newsubclass,'new');
//             var subArray=[];
//             subArray.push(newsubclass);
//             sessionSet('p_subclassifs',JSON.stringify(subArray));
//             var newclass =$('#'+pfx+'filter_classification').val();
//             professions_form(subArray,newclass);
//         })
//
//     }else{
//         $('#'+pfx+'f_subclassification input[value="'+newsubclass+'"]').prop('checked',true);
//         //subclassification_from_profession(subclassif);
//         var selectedSubs = $('#'+pfx+'f_subclassification input:checkbox:checked').map(function () {
//             return $(this).val();
//         }).get();
//         sessionSet('p_subclassifs',JSON.stringify(selectedSubs))
//         professions_form(selectedSubs,selClass);
//     }
//     //check subclassif
// })
// //CHECK SUBCLASSIFICATION
//     .on("click","#"+pfx+"filter_sub_of_classification",function(){
//     var newsubclass=$(this).children(":checked").attr('value');
//     var newclass=$('#filter_classification').val();
//     //$('#classification_choice').val(newclass);
//
//     var selectedSubs = $('input:checkbox:checked[name*="subclassification"]').map(function () {
//         return this.value;
//     }).get();
//     sessionSet('p_subclassifs',JSON.stringify(selectedSubs))
//     professions_form(selectedSubs,newclass);
// })
//
//     //onchange CLASSIFICATION reset professions_form
//     .on("change","#"+pfx+"filter_classification",function(){
//     var classif=this.value;
//     $('#filter_sub_of_classification').remove();
//     if(this.value =='0'){
//         professions_form('','');
//     }else{
//         set_subclassification_form();
//         professions_form('',classif);
//     }
//     $('#classification_value').val(classif);
// })
//     //onchange classification reset professions_form

//     //change classification

// //SPECIFIC JOBS insert subclassification from profession dropdown form

// //DELETE SUBCLASSIF
//     .on("click","button[id*='deleteSubclassif_']",function(){
//     var exploded=explode('_', this.id);
//     var valText=$('#subclassif_'+exploded[1]).text();
//     ajax('?a=deletesubclassif&b='+exploded[1]+'&c='+exploded[2],AJAXFOLDER+'profile.ajax.php');
//     //remove label
//     $('#subclassif_'+exploded[1]).remove();
//     //uncheck subclassif table
//     $('#'+pfx+'subclassiform_'+ exploded[1]).attr('checked', false);
//
// })
//
// //insert delete subclassification from checkbox panel

// //PROFESSION FILTER
//     .on("change","#"+pfx+"filter_professions",function(){
//     if(pfx=='s'){
//         var subclassif= this.value;
//         var optionid= $(this).children(":selected").attr("id"); //specific id
//         log(subclassif)
//         log(optionid)
//         professions_choice(subclassif,optionid);
//     } else {
//         var s_subclassif = this.value;
//         var selClass = $('#' + pfx + 'filter_classification').val();
//
//         //NOT SELECTED CLASSIFICATION
//         if (selClass == 0) {
//             //gets classif from subclass
//             $.when(classFromSub(s_subclassif, '#' + pfx + 'filter_classification')).then(function () {
//
//                 set_subclassification_form2(s_subclassif);
//                 $('#' + pfx + 'f_subclassification input[value="' + s_subclassif + '"]').prop('checked', true);
//
//             })
//
//             var subArray = []
//             subArray.push(s_subclassif)
//             sessionSet('s_subclassif', JSON.stringify(subArray))
//
//             professions_form(s_subclassif, selClass);
//
//             //SELECTED CLASSIFICATION
//         } else {
//
//             $('#' + pfx + 'f_subclassification input[value="' + s_subclassif + '"]').prop('checked', true);
//
//             var subs = $("#"+pfx+"f_subclassification input:checkbox:checked").map(function () {
//                 return $(this).val();
//             }).get();
//
//             sessionSet('s_subclassif', JSON.stringify(subs))
//             selClass = $('#' + pfx + 'filter_classification').val();
//             professions_form(subs, selClass);
//         }
//
//         //activate submit button
//         if (s_subclassif != '') {
//             _('#submitCriteria2').className = 'but18';
//         } else {
//             _('#submitCriteria2').className = 'but18Lock';
//         }
//     }
//     })
//
//     //check subclassification

    s.worker = function(file, args,callback,id) {
        if(s.isWorkersAvailable) {
            window['worker'+id] = new Worker(file);
            window['worker'+id].onerror = function (e) {
                throw new Error(e.message + " (" + e.filename + ":" + e.lineno + ")");
            };
            window['worker'+id].postMessage(args);
            window['worker'+id].onmessage = callback;
            // g.l('worker'+id);
        }
    }



    "use strict";
    window.spd = window.s= s;
    return spd;
});