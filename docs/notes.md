**Ως τώρα όλα τα δεδομένα υπήρχαν στον client**
- σελίδες ξεχωριστές στημένες σελίδες 
- ΠΟΛΛΑ php cases μέσα στην html, 
- δεκάδες σύγχρονα ή ασυγχονα ajax διαβάσματα των database
- γεμάτες events intervals  πάνω σε σύγχρονο DOM
- κάποιες λούπες (search, ασύγχρονες)
**ΤΩΡΑ**
1) ΛΟΓΙΚΗ ΜΙΑΣ σελιδας (G.uname,G.mode ως 1ο,2επίπεδο εμφάνισης όχι σελίδων)
o χρήστης στέλνει G,my,cookies,sessions,localstorage
και δημιουργείται μια σειρά εμφάνισης 
σύμφωνα με τα permission για όλα γραμμένα σε mongo για events 
τα components είναι καλό να είναι μπροστά για να μην ταξιδεύει η html

υπάρχει μια ορισμένη θέση id για όλα τα components
εκτός απ' το προφίλ 
πχ eoi τα βασικά 
a)menu 
b)main	(loop || noanswer)
c)side 
d)side2
e)foot
το μόνο που μένει σελίδα είναι οι containers (λογική react)
τα βασικά html πρέπει να είναι μπροστά αλλιώς το request γίνεται τεράστιο 
έχει όμως ένα μοναδικό a1/και aa1[2|3]/subids που αποθηκεύoνται
στο event  

υπάρχει η λογική μίας σελίδας με πολλά components (σε templates)
Ο ΔΙΑΧΕΙΡΙΣΤΗΣ ΠΑΊΡΝΕΙ ΟΛΑ ΤΑ ΔΕΔΟΜΕΝΑ που του δίνει ο χρήστης 
παίρνουμε όλα τα δεδομένα που έχω 

ενεργοποιίηση 2ης ips πως μοιράζεται καλύτερα 
να συνδέσω και την 89 σε άλλο network interface

κατάργηση bootstrap.php στην αρχή σελίδας
to DOM αλλάζει μέσω του shadow dom 
G to data της σελίδας  
subheader να μπει ψηλά 
=> cookies, sessions, localstorage
API 
my.data, list of components (με βάση τα rules που έχουν)(με το όνομα του id)
τα components
στην πράξη όλο το σύστημα γίνεται async ajax μόνο για την php 
αρχίζει παίρνοντας το data παίρνει από το socket to my 
μαζί με το script σελίδας με βάση τα G.uname,G.mode
σε πραγματικές συνθήκες η επανεγγραφή όλων των php classes κοστίζει 

upgrade mariadb to single node enterprise 10.5.2 (με columnstore για τα inv)

χρειάζονται μόνο πολλά αρχεία με 
πρέπει να δοκιμάσω το search να δω πως γίνεται 
στο neo.php

τη βασική σελίδα μπορεί να τη στέλνει το API στο request σελίδας 
και το websocket μόνο για τα interactions 
μετο fs διαβάζουμε καθαρό html ενδεχόμενα με παραμέτρους 
