/** MARIA APIproduces chunks of my data ur or subs
get my just check if mye exist and gets the loop to update 
* */
const mariadb = require('mariadb');
module.exports = function(s){
	var options={};
	let action = "my";		
	let uid=parseInt(s.q.uid);
	let grp=parseInt(s.q.grp);	
	let agent=parseInt(s.q.agent);	
	let affiliate=parseInt(s.q.affiliate);	
	let membership=parseInt(s.q.membership);
	var liste;
	switch(grp){
	case 1:	
	liste=["user","langs","edu",'photos','aff',"affee","mship","pack","packdetails","certs","offer"]; 
	if(agent>0){liste.push("agentdata")}
	break;	
	case 2:	
	liste=["user","packdetails",'photos',"mship","pack","affee","author"]; 
	if(affiliate>0){liste.push("agentdata");liste.push("caff");}
	break;		
	}
	liste=s.q.method=='set' ? liste :(s.q.hasOwnProperty('liste') ? s.q.liste : []);	
	console.log(liste)
	var sql={user: "SELECT * FROM ur WHERE uid="+uid,
	langs:"SELECT lang,standard FROM person_langs WHERE uid="+uid,
	author:"SELECT * from author where uid="+uid,
	photos:"SELECT * FROM obj WHERE type!=0 AND uid="+uid+" AND status=2", //fetchall	
	packdetails:"SELECT * FROM membership_pack WHERE id=(SELECT pack FROM inv WHERE uid="+uid+" AND membership!=0 ORDER BY created DESC limit 1)",
	mship:"SELECT * FROM membership WHERE id="+membership, 
	offer:"SELECT * FROM offer WHERE status=2 AND uid="+uid,  //fetchall
	aff:"SELECT aff.id,aff.sblock,aff.attachment_privacy,aff.view_auth,aff.pdf_privacy,aff.mail_permitted,aff.view_received,aff.uid1,aff.uid2,aff.scope_visible,aff.service,aff.status,aff.renew_price,aff.renew_pay,\
	aff.cert_renew,aff_jobs.newjob_price,aff_jobs.newjob_description,aff.newjob_privacy,aff.activate_permission FROM aff \
    LEFT JOIN  aff_jobs ON aff.id=aff_jobs.aff_id AND aff_jobs.job_closed=0 WHERE aff.uid1="+uid+" ORDER BY aff_jobs.id DESC, aff.id DESC", 
	affee:"SELECT * FROM affee WHERE uid="+uid, 
	edu:"SELECT * FROM person_education WHERE uid="+uid+" ORDER BY start_study DESC", //fetchall
	pack:"SELECT * FROM inv WHERE uid="+uid+" AND membership!=0 ORDER BY created DESC",
	certs:"SELECT cv_cert.* FROM cv_cert JOIN cv ON cv_cert.cvid=cv.id WHERE cv.status=2 AND cv_cert.status=1 && cv.uid="+uid+" ORDER BY cv_cert.status DESC", //fetchall
	caff:"SELECT total_limit,counter,daily_take_limit,daily_take_counter,status,take_limit,grp,\
(SELECT COUNT(*) FROM aff WHERE status=2 AND uid2="+uid+") as acceptedSP,\
(SELECT COUNT(*) FROM aff WHERE status=2 AND uid2="+uid+") as managedSP,\
(SELECT COUNT(*) FROM aff WHERE status=2 AND source=2 AND uid2="+uid+") as accepted_taken,\
(SELECT COUNT(*) FROM aff WHERE status=2 AND uid2="+uid+") as active,\
(SELECT COUNT(*) FROM aff WHERE status=1 AND uid2="+uid+") as inactive,\
(SELECT COUNT(*) FROM aff WHERE uid2="+uid+" AND status=1) as rejected,\
(SELECT COUNT(*) FROM aff WHERE uid2="+uid+" AND status=0) as released,\
(SELECT COUNT(*) FROM aff WHERE status=0 AND source=2 AND uid2="+uid+") as releasedSP,\
(SELECT COUNT(*) FROM aff WHERE status=4 AND uid2="+uid+") as taken,\
(SELECT SUM(counter_renew) FROM aff WHERE uid2="+uid+") as renew,\
(SELECT SUM(aff_jobs.fee1+aff_jobs.fee2) FROM aff_jobs JOIN aff ON aff_jobs.aff_id=aff.id WHERE aff.uid2="+uid+" AND aff.source=2) as spack,\
(SELECT SUM(aff_jobs.fee1+aff_jobs.fee2) FROM aff_jobs JOIN aff ON aff_jobs.aff_id=aff.id WHERE aff.uid2="+uid+" AND aff.source=2 AND aff_jobs.job_closed=0) as spack_open,\
(SELECT SUM(aff_jobs.fee1+aff_jobs.fee2) FROM aff_jobs JOIN aff ON aff_jobs.aff_id=aff.id WHERE aff.uid2="+uid+" AND aff.source=2 AND aff_jobs.job_closed=1) as spack_closed,\
(SELECT SUM(aff_jobs.fee1+aff_jobs.fee2) FROM aff_jobs JOIN aff ON aff_jobs.aff_id=aff.id WHERE aff.uid2="+uid+" AND aff.source IN(1,3,4,5) AND aff_jobs.job_closed=0) as despacito,\
(SELECT SUM(aff_jobs.fee1+aff_jobs.fee2) FROM aff_jobs JOIN aff ON aff_jobs.aff_id=aff.id WHERE aff.uid2="+uid+" AND aff.source IN(1,3,4,5) AND aff_jobs.job_closed=1) as despacito_closed,\
(SELECT SUM(price) FROM inv WHERE agent="+uid+" AND uid!="+uid+" AND service=1 AND status=3) as renewcc,\
(SELECT SUM(price) FROM inv WHERE uid="+uid+" AND service=1 AND status=3) as renewca \
FROM aff_agent WHERE uid2="+uid
	}
	if(agent>0 && grp==1){
	sql.agentdata="SELECT * FROM aff_agent WHERE uid2="+agent; 	
	}else if(affiliate>0 && grp==2){
	sql.agentdata="SELECT * FROM aff_agent WHERE uid2="+uid;	
	}
if(!uid || !grp || !membership){ console.log("MISSING N PARAMS!");options[action]= {};}else{	
	const pool = mariadb.createPool({host: 'localhost',user: 'nikosd',password: "UpvMy",database: "spd6",waitForConnections:true,connectionLimit:1,queueLimit:0,multipleStatements:true});
	pool.on('acquire', function (connection) {console.log('Connection %d acquired', connection.threadId);});
	pool.on('release', function (connection) {console.log('Connection %d released', connection.threadId);});
	const call = async function(liste) {
		  let conn;
		  try {
			conn = await pool.getConnection();
			var response={};					
				if(liste.length>0){for(var i in liste){				
					response[liste[i]] = await conn.query(sql[liste[i]]);
				}}			
			return response;
		  } catch (err) {
			throw err;
		  } finally {
			if (conn) conn.end()
		  }
	}		
	options[action]= function (callback) {		
		call(liste).then(res => callback(res)).catch(err=>callback(err));
	}
}
return options;
}    