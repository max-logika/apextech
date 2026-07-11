let total = 0;
let count = 0;

const cart = document.querySelector("#cart");
const items = document.querySelector ("#items");
const totalText = document.querySelector("#total");
const countText = document.querySelector("#count");




cart.style.display = "none";





function addToCart(name, price) {

    count+=1;
    total += price;

    items.innerHTML += "<p>" + name + " - " + price + " ₴</p>";
    
    totalText.innerHTML = total;
    countText.innerHTML = count;
}











document.querySelector("#cohykbtn").onclick = function () {
    if (cart.style.display == "none") {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
};
 