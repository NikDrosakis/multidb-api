<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge; chrome=1; IE=9; IE=8; IE=7">
<!--    <link rel="stylesheet" href="css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">-->
<!--    <script src="init.js"></script>-->
    <title>Speedemployer API</title>
</head>
<body>
<?php
$id=$_COOKIE['session-id'];
$grp=$_COOKIE['sp'];
$loggedin=isset($_COOKIE['session-id']) && isset($_COOKIE['sp']);
?>
<h3>Api Speedemployer page -
    <?=$loggedin ? $this->userfullname($id,$grp) : 'Guest user'?>
</h3>
<?php
if($loggedin){
//    xecho($this->confd);
//    xecho($this->modconf);
//    xecho($this->verb);
}else{
    echo "Authentication needed to access page";
}


//include 'sa.php';
?>

</body>
</html>
