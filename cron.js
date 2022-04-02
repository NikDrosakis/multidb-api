/*
* REPORT executes
* A) DAILY BASIS AND MONTHLY BASIS crons ON PORT 3004 which SERVE REQUESTS UPON reports from manager and fieldmarshall
* requests are divided in monthly, daily, and range daily (sums of daily) TIME BASIS.
* DATA OF manager and fieldmarshall is being read my API
CURL PHP IMPORTED TO MONGO ONCLICK CREATE REPORT OR BY THE FOLLOWING CRON NODEJS
-REVENUE
-INDUSTRIES
-ALL TRANSACTIONS
-REPORT
-SUBCLASSIFS

-USERLOGS ARE MONGO + MYSQL ??? WHICH TECHIQUE

* */
///setup cron
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
var shell = require("shelljs");
app = express();
var dateObj = new Date();
var month = ("0" + (dateObj.getMonth() + 1)).slice(-2); //months from 1-12
var day = ("0" + dateObj.getDate()).slice(-2);
var year = dateObj.getUTCFullYear();
//0 0 1 * * MONTHLY ON DAY ONE
//0 0 * * * every day at 12 night
cron.schedule("0 0 * * *", function() {
    var date = year + "-" + month + "-" + day;
    console.log(date+ "running daily task...");
    if (shell.exec('/bin/bash /var/www/api/php2mongo.sh revenew gr ' + date).code !== 0) {
        shell.exit(1);
    }
    if (shell.exec('/bin/bash /var/www/api/php2mongo.sh industries gr ' + date).code !== 0) {
        shell.exit(1);
    }
    if (shell.exec('/bin/bash /var/www/api/php2mongo.sh subclassifs gr ' + date).code !== 0) {
        shell.exit(1);
    }
    if (shell.exec('/bin/bash /var/www/api/php2mongo.sh report gr ' + date).code !== 0) {
        shell.exit(1);
    }
});

cron.schedule("0 0 1 * *", function() {
    var date = year + "-" + month;
    console.log("running monthly task...");
    if (shell.exec('/bin/bash /var/www/api/php2mongo.sh revenew gr ' + date).code !== 0) {
        shell.exit(1);
    }
    if (shell.exec('/bin/bash /var/www/api/php2mongo.sh industries gr ' + date).code !== 0) {
        shell.exit(1);
    }
    if (shell.exec('/bin/bash /var/www/api/php2mongo.sh subclassifs gr ' + date).code !== 0) {
        shell.exit(1);
    }
    if (shell.exec('/bin/bash /var/www/api/php2mongo.sh report gr ' + date).code !== 0) {
        shell.exit(1);
    }
});

app.listen(3004);

//now we don't need an interface on this, just mysql->mongo, mongo->mongo
/*
1st page manager > revenue
problem from sum in invoices
$params = $from != "" && $to != "" ? "AND invoice.created BETWEEN UNIX_TIMESTAMP('$from') AND UNIX_TIMESTAMP('$to')" : "";



    MONGO PROBLEM WITH ADDING
    loop packs
    pack1=SELECT sum(price) as price, count(price) as count, sum(price_total) as pricetotal FROM invoice WHERE status=3 AND pack=1 AND invoice.created=today
   sum_price, count_price, sum_price_total
    pack2=SELECT sum(price) as price, count(price) as count, sum(price_total) as pricetotal FROM invoice WHERE status=3 AND pack=2 AND invoice.created=today
    SAVE ME DATA AT DAILY REPORT INVOICES COLLECTION ACCORDING TO PACK
    SAVE ME DATA AT DAILY REPORT INVOICES COLLECTION ACCORDING TO SUBCLASSIF

    DAILY REPORTS
    name organize queries document=

* */