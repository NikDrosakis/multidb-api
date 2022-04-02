[UPDATE LOG SPD v6] 
**INTERFACES**
- [subheader/activities]
- [chat] multiple
- [HOME/search] standardisation 
- [agent] caff counters 
- [profile](επιπλέον πίνακες, αλλαγές πινάκων cv,post για standardisation) 
- [remote profile] 
- [dashboard] (μεταγραφή των php api reports, αν και τα reports θα έχουν πρόβλημα ώσπου να φύγουν τα inv σε column storage)
- [stream] 
- [store] ??? άγνωστη κατάσταση αλλαγές μεταβλητών τα is έχουν γίνει G, τα services migrate στη mongo 
- custom vanillajs library (still using jquery)
**DATA**
- [a] G.a γενικά αθροίσματα 
- [G] bulk φόρμες global data is settings  
- static php arrays 
- mongo json files 
- G.is
- [dic] 
- my.[N] counters api module 
- [my] (διόρθωση chunkς πινάκων και to κασάρισμα) (+ mye chunks μεταβολών)

**DATAFLOW**
- [load.js] τρέχει τον πρώτο javascript κώδικα όλων των public σελίδων
- [ini.js] functions,events όλων των σελίδων 
- [spd.gr] (s) έχει μεγάλο μέρος του client μηχανισμού 
- [html] μόνο στο /public  100%
- intervals controled by websocket
- standard dynamic forms 

**SERVERS**
- ubuntu server απο 16 σε 20 
- apache2 p8483 reverse proxy nginx στην ip 89
- API clustered ip88 (port 3005) (nginx reverse proxy /api 40% γρηγορότερο)
- WEBSOCKET (port 3005) (data streaming και όχι event driven όπως το API)
- STREAMING(port 9001) 
- serviced 

**LANGUAGES/FRAMEWORKS/LIBRARIES**
php (cached with my,N modules api, less ajax requests) 
javascript 
nodejs express API με 3 connectors maria mongo redis 
nodejs websocket 
nodejs socketio stream
cordova android (deprecated)
- No more js libraries (except jquery,nicEdit)
**DATABASES**
- αναβάθμιση ubuntu 20 και php7.4, καθώς και mongo enterprise 5.6, maria enterprise 10.6
- redis μελλοντικά θα αντικατασταθεί καθώς έχουν στραφεί σε εμπορική χρήση 
- webrtc nodejs socketio (no more firebase)

**OFFLINE jobs**
- cron 

**ΣΤΟΧΟi** 
1) standardisation των φορμών profile/search για δυναμική αναβάθμιση 
2) ομογενοποίηση του παλιού speedemployer με τα νέα apps
3) ξαναγράψιμο version 2 εφαρμογών που χρειάζονταν (streaming,chat,dashboard,API)
4) straightforward get data (no shell use)
5) no high loads και data mariadb
6) fewer redis caches
7) profile with post pages (remote)
8) web worker bufferized at search (non-blocking) as in potentials 
9) components logic

#ΤΟDO SPD v7
- kudu column store με spark for faster manager> reports, invoices 
