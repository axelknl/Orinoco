
var json = {
    "product" : [
        {
            "name" : "Norbert",
            "desc" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price" : "2900",
            "_id" : "5be9c8541c9d440000665243",
            "imageUrl" : "json/images/teddy_1.jpg",
            "color" : [
                "Tan",
                "Chocolate",
                "Black",
                "White"
            ]
        },{
            "name" : "Arnold",
            "desc" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price" : "3900",
            "_id" : "5beaa8bf1c9d440000a57d94",
            "imageUrl" : "json/images/teddy_2.jpg",
            "color" : [
                "Pale brown",
                "Dark brown",
                "white"
            ]
        },{
            "name" : "Lenny and Carl",
            "desc" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price" : "5900",
            "_id" : "5beaaa8f1c9d440000a57d95",
            "imageUrl" : "json/images/teddy_3.jpg",
            "color" : [
                "Brown"
            ]
        },{
            "name" : "Gustav",
            "desc" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price" : "4500",
            "_id" : "5beaabe91c9d440000a57d96",
            "imageUrl" : "json/images/teddy_4.jpg",
            "color" : [
                "Brown",
                "Blue",
                "Pink"
            ]
        },{
            "name" : "Garfunkel",
            "desc" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price" : "5500",
            "_id" : "5beaacd41c9d440000a57d97",
            "imageUrl" : "json/images/teddy_5.jpg",
            "color" : [
                "Beige",
                "Tan",
                "Chocolate"
            ]
        }
    ]
}


function orderIdDisplay(){
    var orderId = document.getElementsByClassName("order__id");
    for (i = 0; i < orderId.length; i++){
        orderId[i].innerHTML = "#" + localStorage.getItem("orderId");
    }
}

console.log(localStorage);

// window.onunload = function() {
//    localStorage.clear();
//}

function contactDisplay(){
    var firstname = document.getElementsByClassName("order__firstname");
    for (i = 0; i < firstname.length; i++){
        firstname[i].innerHTML = localStorage.getItem("orderFirstName");
    }

    var lastname = document.getElementsByClassName("order__lastname");
    for (i = 0; i < lastname.length; i++){
        lastname[i].innerHTML = localStorage.getItem("orderLastName");
    }

    var address = document.getElementsByClassName("order__address");
    for (i = 0; i < address.length; i++){
        address[i].innerHTML = localStorage.getItem("orderAddress");
    }

    var city = document.getElementsByClassName("order__city");
    for (i = 0; i < city.length; i++){
        city[i].innerHTML = localStorage.getItem("orderCity");
    }

    var zipcode = document.getElementsByClassName("order__zipcode");
    for (i = 0; i < zipcode.length; i++){
        zipcode[i].innerHTML = localStorage.getItem("orderZip");
    }

    var mail = document.getElementsByClassName("order__email");
    for (i = 0; i < mail.length; i++){
        mail[i].innerHTML = localStorage.getItem("orderEmail");
    }
}

function productDisplay(){
    var productList = localStorage.getItem("products");
    var tab = productList.split(',');
    console.log(tab);
    for (i = 0; i < tab.length; i++) {
        for (j = 0; j < json.product.length; j++) {
            if (json.product[j]._id == tab[i]) {
                var tempContainer = document.getElementById("orderList");
                var template = document.getElementById("orderTemp");

                var clone = template.content.cloneNode(true);
                var elContainer = clone.querySelector("a");
                var elDivImg = clone.querySelector("div");
                var elImg = clone.querySelector("img");
                var elName = clone.querySelector("h4");
                var elPrice = clone.querySelector("p");
                elImg.setAttribute("src", json.product[j].imageUrl)
                elName.innerHTML = json.product[j].name;
                elPrice.innerHTML = json.product[j].price + " €";

                tempContainer.appendChild(clone);
            }
        }
    }
}

function getDate(){
    var date = new Date();
    document.getElementById("order__date").innerHTML = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    var date2 = new Date();
    date2.setDate(date2.getDate() + 1);
    document.getElementById("order__exp__date").innerHTML = date2.getDate() + "/" + (date2.getMonth() + 1) + "/" + date2.getFullYear();

}

function changeCardType(){
    var index = localStorage.getItem("orderCardType");
    var img = document.getElementById("cardType");
    var txt = document.getElementById("cardTypeDesc");
    if (index == 0) {
        img.setAttribute("src", "assets/visa_card.jpg");
        txt.innerHTML = "VISA Débit";
    } else if (index == 1) {
        img.setAttribute("src", "assets/cb_card.jpg");
        txt.innerHTML = "CARTE BLEUE Débit"
    } else {
        img.setAttribute("src", "assets/master_card.jpg");
        txt.innerHTML = "MASTERCARD Débit";
    }

    var productPrice = document.getElementById("productPrice");
    productPrice.innerHTML = " " + localStorage.getItem("orderTotalPrice") + " €";

    var totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = " " + document.getElementById("productPrice").innerHTML;
}

function leave(){
    localStorage.clear();
    window.location.href="index.html";
}

function main() {
    changeCardType();
    getDate();
    orderIdDisplay();
    contactDisplay();
    productDisplay();
}

main();