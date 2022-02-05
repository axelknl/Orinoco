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

var urlCurr = new URL(window.location.href);
var teddyW = urlCurr.searchParams.get("id");

for (i = 0; i < json.product.length; i++) {
    if (json.product[i]._id == teddyW) {
        let title = document.getElementById('product__title').innerHTML = json.product[i].name;
        let price = document.getElementById('product__price').innerHTML = json.product[i].price + " €";
        let desc = document.getElementById('product__desc').innerHTML = json.product[i].desc;
        let img = document.getElementById('product__img').setAttribute("src", json.product[i].imageUrl);
        let proOption = document.getElementById("product__option");
        const newOption = document.createElement("option");
        newOption.innerHTML = 'Sélectionnez une couleur';
        proOption.appendChild(newOption);
        for (let j = 0; j < json.product[i].color.length ; j++) {
            const newOption = document.createElement("option");
            newOption.innerHTML = json.product[i].color[j];
            proOption.appendChild(newOption);
        }
    }
}

function addToCart(){
    var liste = document.getElementById("product__option");
    choice = liste.selectedIndex;

    var errorMessage = document.getElementById("errorMessage");

    if (choice != 0) {
        colorW = liste.options[liste.selectedIndex].text;

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        
        var calcul = getRandomInt(100000);
    
        var idCart = calcul;
        teddyW = teddyW + '/' + colorW;
    
    
        console.log(idCart);
        console.log(teddyW);
        localStorage.setItem(idCart,teddyW);
        console.log("Item has been add to cart");
        teddyW = urlCurr.searchParams.get("id");
        console.log(localStorage);

        errorMessage.innerHTML = "";
        errorMessage.style.marginBottom = "";
    } else {
        console.log("choisissez une couleur");
        errorMessage.innerHTML = "Veuillez choisir une couleur";
        errorMessage.style.marginBottom = "24px";
    }
}