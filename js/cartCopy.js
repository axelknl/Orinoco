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

console.log(localStorage);

function clearCart(){
    localStorage.clear();
    document.location.reload();
}

function removeFromCart(monid) {
    console.log("je vais supprimer");
    var idToDelete = monid.id;
    for (i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(localStorage.key(i)) == idToDelete) {
            localStorage.removeItem(localStorage.key(i));
            document.location.reload();
            break;
        }
    }
}

var eachPrice = 0;

for (i = 0; i < json.product.length; i++) {
    for (var j = 0; j < localStorage.length; j++) {
        if ((parseFloat(localStorage.key(j)) == parseInt(localStorage.key(j))) && !isNaN(localStorage.key(j))) {
            var localRecup = localStorage.getItem(localStorage.key(j));
            var tab = localRecup.split('/');

            var idRecup = tab[0];
            var colorRecup = tab[1];

            if (json.product[i]._id == idRecup) {

                /* Essai template */
                var tempContainer = document.getElementById("cart__list");
                var template = document.getElementById("cartTemp");

                var clone = template.content.cloneNode(true);
                var p = clone.querySelectorAll("p");
                var image = clone.querySelector("img");
                var icon = clone.querySelector("i");
                image.setAttribute("src", json.product[i].imageUrl);
                icon.setAttribute("id",localRecup);
                icon.setAttribute("onclick","removeFromCart(this)");
                console.log(localRecup);
                p[0].textContent = json.product[i].name;
                p[1].textContent = "Couleur : " + colorRecup;
                p[2].textContent = "Prix : " + json.product[i].price + " €";

                tempContainer.appendChild(clone);

                var parsePrice = parseInt(json.product[i].price);
                eachPrice = eachPrice + parsePrice;
                console.log(eachPrice);

                document.getElementById('totalPrice').innerHTML = eachPrice;
            }
        }
    }
}