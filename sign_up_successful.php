<?php
$email = $_POST["email"];
$username = $_POST["reg_username"];
$password = $_POST["reg_password"];
$conf_pass = $_POST["conf_pass"];

if($conf_pass != $password){
    echo "<script>alert('Registration Failed! Please fill all the data accurately!');</script>";
    echo "<script>location.replace('login.php')</script>";
}

//USED FILTER_VALIDATE_EMAIL
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<script>alert('Registration Successful! Login once to proceed further!');</script>";
    setcookie($username, $password, time() + (86400 * 30), "/");
    echo "<script>location.replace('login.php')</script>";
} else {
    echo "<script>alert('Registration Failed! Please fill all the data accurately!');</script>";
    echo "<script>location.replace('login.php')</script>";
}
