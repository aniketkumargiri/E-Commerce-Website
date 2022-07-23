<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/">
    <html>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&amp;display=swap" rel="stylesheet"/>
                </head>
                <style>
                    body{
                        margin: 0;
                        font-family: "Open Sans", "sans-serif" ;
                    }
                    table, th, td {
                        border: 1px solid black;
                        border-radius:5px;
                        color:solid black;
                        font-size:22px;
                        background-color: rgb(252, 245, 237);
                        padding: 20px;
                    }
                    table {
                        border-spacing: 0px;
                        margin: 8px;
                    }
                    #nav {
                        color: whitesmoke;
                        position: fixed;
                        top: 0px;
                        width: 100%;
                        padding: 10px;
                        padding-right: 20px;
                        background-color:  rgb(51,47,47);
                        display: flex;
                        justify-content: space-between;
                    }
                    .logo{
                        font-size: 30px;
                        font-weight: bold;
                        font-family:inherit ;
                        padding-left: 30px;
                    }
                    .nav-link{
                        padding-top: 5px;
                        padding-right: 20px;
                        text-align: right;
                    }
                    .Nav_element{
                        padding-top: 10px;
                        color: whitesmoke;
                        margin: 0px;
                        font-size: 18px;
                        padding-right: 15px;
                        text-decoration: none !important;
                    }
                    .Nav_element:hover{
                        cursor: pointer;
                        color: #2874f0;
                    }
                    #nav a.active {
                        color: #2874f0;
                        text-decoration: none !important;
                    }
                </style>

            <body>
                <div id="nav">
                    <div class="logo">
                      🔯  Amenity Oneshop 🔯 
                    </div>
                    <div class="nav-link">
                        <a href="./project.html" class="Nav_element">Home</a>
                        <a href="./project.html#shoes" class="Nav_element">Shoes</a>
                        <a href="./project.html#watches" class="Nav_element">Watches</a>
                        <a href="./project.html#mobiles" class="Nav_element">Mobiles</a>
                        <a href="./project.html#laptops" class="Nav_element">Laptops</a>
                        <a href="./project.html#clothes" class="Nav_element">Clothes</a>
                        <a href="details.xml" class="Nav_element active">All Products</a>
                        <a id="login" href="login.php" class="Nav_element">Logout</a>
                        <a href="./cart.html"> <img src="./resources/cart2.png" width="25px"></img> </a>
                            <a href="./cart.html" class="Nav_element active">Cart</a>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <h1 align="center" style="color:rgb(23, 22, 130)">Product's Basic Details</h1>
                <table border="5" style="border:2px solid black" align="center">

                    <tr>
                        <th style="color:rgb(253, 22, 130)">Product No.</th>
                        <th style="color:rgb(253, 22, 130)">Brand Name</th>
                        <th style="color:rgb(253, 22, 130)">Price Rs.</th>
                        <th style="color:rgb(253, 22, 130)">Ratings</th>
                        <th style="color:rgb(253, 22, 130)">Description</th>
                    </tr>
                    <xsl:for-each select="detail/s">
                        <tr>
                            <td>
                                <xsl:value-of select="number" />
                            </td>
                            <td>
                                <xsl:value-of select="name" />
                            </td>
                            <td>
                                <xsl:value-of select="price" />
                            </td>
                            <td>
                                <xsl:value-of select="rating" />
                            </td>
                            <td>
                                <xsl:value-of select="description" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>