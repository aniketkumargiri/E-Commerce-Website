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

function getCartDetails(e){
    e.preventDefault();
    var login = document.getElementById("login");
    login.innerHTML = "Logout";
    fetch("./products.json")
    .then(resp => {
        return resp.json();
    })
    .then(productsList => {
        var cartDetails = JSON.parse(localStorage.getItem("cart"));
        // var cartDetails = [101, 102];
        var numItems = 0;
        var sum = 0;
        var cartContainer = document.querySelector(".cart-container");
        var products = document.createElement("div");
        products.setAttribute("class", "products");
    
        if(cartDetails !== null && cartDetails.length > 0){
            for(let i = 0; i < cartDetails.length; i++){
                for(let j = 0; j < productsList.length; j++){
                    if(cartDetails[i] === productsList[j].id){
                        
                        var productContainer = document.createElement("div");
                        var productInfo = document.createElement("div");
                        var image = document.createElement("div");
                        var img = document.createElement("img");
                        var title = document.createElement("div");
                        var price = document.createElement("div");
                        var rating = document.createElement("div");
                        var removeBtn = document.createElement("button");
                        
                        productContainer.setAttribute("class", "product-container");
                        productInfo.setAttribute("class", "product-info");
                        image.setAttribute("class", "image");
                        img.setAttribute("src", productsList[j].image);
                        title.setAttribute("class", "title");
                        price.setAttribute("class", "price");
                        rating.setAttribute("class", "rating");
                        removeBtn.setAttribute("class", "remove-btn");
                        removeBtn.setAttribute("onclick", "removeFromCart(" + productsList[j].id + ")");
                        
                        title.innerHTML = productsList[j].title;
                        price.innerHTML = "Price: Rs." + productsList[j].price;
                        rating.innerHTML = "Rating: " + productsList[j].rating;
                        removeBtn.innerHTML = "Remove from Cart";
                        sum += productsList[j].price;
                        numItems++;
    
                        image.appendChild(img);
                        productInfo.appendChild(title);
                        productInfo.appendChild(price);
                        productInfo.appendChild(rating);
                        productInfo.appendChild(removeBtn);
    
                        productContainer.appendChild(image);
                        productContainer.appendChild(productInfo);
    
                        products.appendChild(productContainer);
                    }
                }
            }
            
            var summary = document.createElement("div");
            var summaryContainer = document.createElement("div");
            var summaryTitle = document.createElement("div");
            var summaryItems = document.createElement("div");
            var summaryPrice = document.createElement("div");
            var buyBtn = document.createElement("button");
            
            summary.setAttribute("class", "summary");
            summaryContainer.setAttribute("class", "summary-container");
            summaryTitle.setAttribute("class", "summary-title");
            summaryItems.setAttribute("class", "summary-items");
            summaryPrice.setAttribute("class", "summary-price");
            buyBtn.setAttribute("class", "buy-btn");
            buyBtn.setAttribute("onclick", "goToPayment()");
    
            summaryTitle.innerHTML = "Summary";
            summaryItems.innerHTML = "Total Items: " + numItems;
            summaryPrice.innerHTML = "Total Price: Rs." + sum;
            buyBtn.innerHTML = "Buy now";
    
            summaryContainer.appendChild(summaryTitle);
            summaryContainer.appendChild(summaryItems);
            summaryContainer.appendChild(summaryPrice);
            summaryContainer.appendChild(buyBtn);
            summary.appendChild(summaryContainer);
    
            cartContainer.appendChild(products);
            cartContainer.appendChild(summary);
        }
        else{
            var emptyCartContainer = document.createElement("div");
            var emptyImg = document.createElement("img");
            var emptyCartText = document.createElement("div");
            var emptyCartSubText = document.createElement("div");
            var continueShopping = document.createElement("button");

            emptyCartContainer.setAttribute("class", "empty-cart-container");
            emptyImg.setAttribute("src", "./resources/emptycart.png");
            emptyCartText.setAttribute("class", "empty-cart-text");
            emptyCartSubText.setAttribute("class", "empty-cart-subtext");
            continueShopping.setAttribute("class", "continue-shopping");
            continueShopping.setAttribute("onclick", "goToHome()");

            emptyCartText.innerHTML = "Cart is Empty!";
            emptyCartSubText.innerHTML = "Looks like you have no items in your shopping cart.";
            continueShopping.innerHTML = "Continue Shopping";

            emptyCartContainer.appendChild(emptyImg);
            emptyCartContainer.appendChild(emptyCartText);
            emptyCartContainer.appendChild(emptyCartSubText);
            emptyCartContainer.appendChild(continueShopping);

            cartContainer.appendChild(emptyCartContainer);
        }
    });
    
}

function goToHome(){
    window.location.replace("./project.html");
}

function removeFromCart(id){
    var cartDetails = JSON.parse(localStorage.getItem("cart"));
    var filteredCartDetails = cartDetails.filter(function(productId){
        return productId !== id;
    })
    localStorage.setItem("cart", JSON.stringify(filteredCartDetails));
    window.location.replace("./cart.html");
}
function goToPayment(){
    window.location.replace("./payment.xhtml");
}