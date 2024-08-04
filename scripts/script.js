//обработчик события по клику на главную кнопку смотреть меню
document.getElementById("main-action-button").onclick = function () {
document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

//обработчик события по клику на три ссылки в хедере (для этого поставили якоря на каждую секцию)
let links = document.querySelectorAll(".menu-item > a");
for (let i= 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
}
}
// перемещение с кнопки заказать на оформить заказ
let buttons = document.getElementsByClassName("product-button")
for (let i= 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
}
}
//обработчик события по кнопке оформить заказ (проверка на заполнение всех полей заказа) если не заполнено то появляется красная рамка, если заполнено то сообщение спасибо за заказ
let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Thank you for your order! We will contact you soon!");
    }
}

//изменение курсов валют. предварительно добавили везде data-base-price="8"
let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
let currentCurrency = e.target.innerText;

let newCurrency = "$";
let coefficient = "1";

if (currentCurrency === "$") {
    newCurrency = "€";
    coefficient = 1.1;
} else if (currentCurrency === "€") {
    newCurrency = "£";
    coefficient = 0.5;
} else if (currentCurrency === "£") {
    newCurrency = "¥";
    coefficient = 2;
}
    e.target.innerText = newCurrency;

for (let i = 0; i < prices.length; i++) {
    prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
}

}