function goToProduct(e,id)
{
    e.preventDefault();
    localStorage.setItem("product", JSON.stringify(id));
    window.location.replace("./product.html");
}
function login(){
    var login = document.getElementById("login");
    login.innerHTML = "Logout";
}