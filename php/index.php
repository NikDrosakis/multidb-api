<?php
@define ('LANG', 'en');
include "/var/www/spd4/bootstrap.php";
@define ('RC', 12);
$API= "https://dev.speedemployer.gr/api/";
header('Access-Control-Allow-Origin: '.$API);
header("Access-Control-Allow-Method: GET,POST");
header("Access-Control-Allow-Credentials: true");
header("Authorization: Basic " . base64_encode($_COOKIE['session-id'] . $_COOKIE['sp']));
$api=new Api;
$api->response();