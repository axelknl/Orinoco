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


for (i = 0; i < json.product.length; i++) {
    var tempContainer = document.getElementById("product");
    var template = document.getElementById("productTemp");

    var clone = template.content.cloneNode(true);
    var elContainer = clone.querySelector("a");
    var elDivImg = clone.querySelector("div");
    var elImg = clone.querySelector("img");
    var elName = clone.querySelector("h3");
    var elPrice = clone.querySelector("p");
    elContainer.setAttribute("id",json.product[i]._id);
    elContainer.setAttribute("onclick","getID(this)");
    elImg.setAttribute("src", json.product[i].imageUrl)
    elName.innerHTML = json.product[i].name;
    elPrice.innerHTML = json.product[i].price;

    tempContainer.appendChild(clone);
}

function getID(monid) {
    var idtransfer = monid.id;
    window.location.href="productPage.html" + '?id=' + idtransfer;
}
