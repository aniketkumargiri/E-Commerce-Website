// import * as productsList from "./products.json"
// console.log(productsList)

// var productsList = [
//     {
//         id: 101,
//         title: "Puma Shoes", 
//         description: "A pair of black running shoes, has regular Styling, lace-ups detail Textured and patterned outsole Warranty: 3 months",
//         price: 2199,
//         rating: 4.7,
//         image: "./resources/product 1.png"
//     },
//     {
//         id: 102,
//         title: "Nike Shoes", 
//         description: "A pair of blue running shoes, has regular styling, lace-ups detail Mesh upper Cushioned footbed Textured and patterned outsole Warranty: 6 months against manufacturing defects (not valid on products with more than 20% discount) Warranty provided by Brand Owner / Manufacturer ",
//         price: 8299,
//         rating: 4.2,
//         image: "./resources/product 10.png"
//     }
// ]

function getProductDetails(e){
    e.preventDefault();
    var login = document.getElementById("login");
    login.innerHTML = "Logout";
    fetch("./products.json")
    .then(resp => {
        return resp.json();
    })
    .then(productsList => {
        // var productId = 115;
        var productId = JSON.parse(localStorage.getItem("product"));
        var container = document.querySelector(".container");
        
        if(productId){
            for(let j = 0; j < productsList.length; j++){
                if(productId === productsList[j].id){
                    
                    var imageContainer = document.createElement("div");
                    var productImage = document.createElement("div");
                    var img = document.createElement("img");
                    var infoContainer = document.createElement("div");
                    var productTitle = document.createElement("div");
                    var productPrice = document.createElement("div");
                    var productRating = document.createElement("div");
                    var productDescription = document.createElement("div");
                    var descriptionHeading = document.createElement("div");
                    var ul = document.createElement("ul");
                    var buttons = document.createElement("div");
                    var addToCartBtn = document.createElement("button");
                    var backToShopBtn = document.createElement("button");
                    var line = document.createElement("hr");
                    
                    imageContainer.setAttribute("class", "image-container");
                    productImage.setAttribute("class", "product-image");
                    img.setAttribute("src", productsList[j].image);
                    infoContainer.setAttribute("class", "info-container");
                    productTitle.setAttribute("class", "product-title");
                    productPrice.setAttribute("class", "product-price");
                    productRating.setAttribute("class", "product-rating");
                    productDescription.setAttribute("class", "product-description");
                    descriptionHeading.setAttribute("class", "description-heading");
                    buttons.setAttribute("class", "buttons");
                    addToCartBtn.setAttribute("class", "add-to-cart-btn");
                    addToCartBtn.setAttribute("onclick", "addToCart(" + productsList[j].id + ")");
                    backToShopBtn.setAttribute("class", "back-to-shop-btn");
                    backToShopBtn.setAttribute("onclick", "goToHome()");
                    line.setAttribute("class", "line");
    
                    productTitle.innerHTML = productsList[j].title
                    productPrice.innerHTML = "Price: Rs." + productsList[j].price;
                    var descriptionArray = productsList[j].description.split("$");
                    for(let i = 0; i < descriptionArray.length; i++){
                        var li = document.createElement("li");
                        li.innerHTML = descriptionArray[i];
                        ul.appendChild(li);
                    }
                    descriptionHeading.innerHTML = "About this product:"
                    productRating.innerHTML = "Rating: " + productsList[j].rating;
                    addToCartBtn.innerHTML = "Add to Cart";
                    backToShopBtn.innerHTML = "Back to Shop";
    
                    productImage.appendChild(img);
                    imageContainer.appendChild(productImage);
                    
                    buttons.appendChild(addToCartBtn);
                    buttons.appendChild(backToShopBtn);
                    
                    productDescription.appendChild(descriptionHeading);
                    productDescription.appendChild(ul);

                    infoContainer.appendChild(productTitle);
                    infoContainer.appendChild(productRating);
                    infoContainer.appendChild(line);
                    infoContainer.appendChild(productPrice);
                    infoContainer.appendChild(productDescription);
                    infoContainer.appendChild(buttons);
    
                    container.append(imageContainer);
                    container.appendChild(infoContainer);
                }
            }
        } 
    });
}

function addToCart(id){
    var cartDetails = JSON.parse(localStorage.getItem("cart"));
    if(cartDetails === null){
        localStorage.setItem("cart", JSON.stringify([id]));
        alert("Product added to cart successfully!");
    }
    else{
        if(!cartDetails.includes(id)){
            cartDetails.push(id);
            localStorage.setItem("cart", JSON.stringify(cartDetails));
            alert("Product added to cart successfully!");
        }
        else {
            alert("Product is already in cart!");
        }
    }
}

function goToHome(){
    window.location.replace("./project.html");
}
