
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Shopping Web</title>


    <link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Open+Sans:600'>
    <link rel="stylesheet" href="login.css">
</head>

<body>
<div id="nav">
        <div class="logo">
            Amenity Oneshop
        </div>
        <div class="nav-link">
            <a href="./project.html" class="Nav_element">Home</a>
            <a href="./project.html#shoes" class="Nav_element">Shoes</a>
            <a href="./project.html#watches" class="Nav_element">Watches</a>
            <a href="./project.html#mobiles" class="Nav_element">Mobiles</a>
            <a href="./project.html#laptops" class="Nav_element">Laptops</a>
            <a href="./project.html#clothes" class="Nav_element">Clothes</a>
            <a href="details.xml" class="Nav_element">All Products</a>
            <a id="login" href="login.php" class="Nav_element active">Login</a>
            <a href="./cart.html"> <img src="./resources/cart2.png" width="25px" </a>
                <a href="./cart.html" class="Nav_element">&nbsp;&nbsp;&nbsp;Cart</a>
        </div>
    </div>
    <br><br>

    <div class="login-wrap">
        <div class="login-html">
            <centre><a href="index.html">
                    <h2>Shopping Web</h2>
                </a></centre>
            <br /><br />
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
            <div class="login-form">

                <!--Login Page-->
                <form class="sign-in-htm" action="login_successful.php" method="POST">
                    <div class="group">
                        <label for="login_user" class="label">Username</label>
                        <input id="login_username" name="login_username" type="text" class="input">
                    </div>
                    <div class="group">
                        <label for="login_pass" class="label">Password</label>
                        <input id="login_password" name="login_password" type="password" class="input" data-type="password">
                    </div>
                    <div class="group">
                        <input id="check" type="checkbox" class="check" checked>
                        <label for="check"><span class="icon"></span> Keep me Signed in</label>
                    </div>
                    <div class="group">
                        <input type="submit" class="button" value="Sign In">
                    </div>
                    <div class="hr"></div>
                    <div class="foot-lnk">
                        <label class="foorHover" for="tab-2">New User?</a>
                    </div>
                </form>
                <!-- Registration Page -->
                <form class="sign-up-htm" action="sign_up_successful.php" method="POST">
                    <div class="group">
                        <label for="email" class="label">Email ID: </label>
                        <input id="email" name="email" type="text" class="input">
                    </div>
                    <div class="group">
                        <label for="reg_user" class="label">Username:</label>
                        <input id="reg_username" name="reg_username" type="text" class="input">
                    </div>
                    <div class="group">
                        <label for="reg_pass" class="label">Password</label>
                        <input id="reg_password" name="reg_password" type="password" class="input" data-type="password">
                    </div>
                    <div class="group">
                        <label for="reg_conf_pass" class="label">Confirm Password</label>
                        <input id="conf_pass" name = "conf_pass" type="password" class="input" data-type="password">
                    </div>
                    <div class="group">
                        <input type="submit" class="button" value="Sign Up">
                    </div>
                    <div class="hr"></div>
                    <div class="foot-lnk">
                        <label class="footHover" for="tab-1">Already Member?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>

</html>