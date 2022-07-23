<?php
$log_username = $_POST["login_username"];
$log_password = $_POST["login_password"];

if(!isset($_COOKIE[$log_username])){
    echo "<script>alert('Login Failed!!');</script>";
    echo "<script>location.replace('login.php')</script>";
}else{
    if($log_password == $_COOKIE[$log_username]){
        echo "<script>alert('Login Successful!!');</script>";
        echo "<script>location.replace('project.html')</script>";
    }else{
        echo "<script>alert('Login Failed!!');</script>";
        echo "<script>location.replace('login.php')</script>";
    }
}
?>