var allProducts = document.querySelectorAll(".product-card")

var cart = document.querySelector("#cart")

var btn = document.querySelector("#showTotalBtn")

var total_mount = document.querySelector('#totalAmount')
var show_price = document.querySelector('#modal-content')
var cart_title = document.querySelector('#cart_name')

var totalPrice = 0

allProducts.forEach(function (item) {
    item.onclick = function () {
        totalPrice += +(item.getAttribute("price"))
        cart.innerHTML += '<div class="item_added">' + item.textContent + '</div>' + '<hr>';

        if (cart.innerHTML != "") {
            cart_title.style.display = "block";
            cart.style.border = "1px solid #b49276";
            cart.style.padding = "20px";
            cart.style.borderRadius = "5px";
            cart.style.width = "400px"
            cart.style.boxShadow = "0 2px 4px rgba(40, 80, 70, 0.7)";
            btn.style.display = "block";
            btn.style.backgroundColor = "#b49276";
            btn.style.color = "white";
            btn.style.width = "150px";
            btn.style.height = "40px";
        }
    }
})
btn.onclick = function () {
    show_price.style.display = "block";
    show_price.style.border = "1px solid #b49276";
    show_price.style.padding = "20px";
    show_price.style.backgroundColor = "#b49276";
    show_price.style.color = "white";
    show_price.style.borderRadius = "5px";

    total_mount.innerHTML = totalPrice + " $"
}
