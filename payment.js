function paymentSuccessful(e){
    e.preventDefault();
    localStorage.setItem("cart", JSON.stringify([]));
    alert("Payment Successful! Redirecting to Shop...")
    window.location.replace("./project.html");
}