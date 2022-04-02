<?php
//AUTOLOAD THE core class SYSTEM
@define('RC', 12);
@define('LANG', 'en');
include "/var/www/gaia/generic.php";
spl_autoload_register(function ($className) {
    if(file_exists("/var/www/spd4/class/".$className.".php"))
        include ("/var/www/gaia/class/".$className.".php");
});
$config= config();
if(!isset($cms)){
    $cms=new Gaia('sys','',$config);
}