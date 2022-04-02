d1="<div class='new'></div>";
b1="<button class='new'></button>";
$( ".c1" ).wrap(  );
//override styles
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

	
COMPO
++summ:"menu of apps" 
test rule before ins to return true| false
name rule html 
{id:"supermenu",rule:"my.grp==2 && my.affiliate!=undefined",
html:'<button class="but17" id="supermenuBut"></button>   
<div class="mainUlMspeedEm menubox" id="supermenu" style="display: none;">
</div>',help:"button and menu of applications"}




LOCALS 
data-

EVENTS 
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

//HOW TO CHECK RULES 
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

compo
rules υπάρχουν στην εμφάνιση components
αλλά και στα events 
αλλά και στα notifications 

RULES 
components -events -notifications 

onpage G.uname/G.mode/GET vars 
onpost  
ontime (intervals)
onevent 

session.storage administration 
compo:{b2,c3,c4,c5},notifications:{} 

το σενάριο είναι να δημιουργηθούν 10,10 components 
to rule φτιάχνεται 

- chat update with 
- store
- rules COMPO NOTIFY
- χρειάζομαι κάτι για το elastic search 
- s.api => axios
- dic elastic search 
- flask dash 
- 