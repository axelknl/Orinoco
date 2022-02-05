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

const selectedCardType = document.getElementById("card__option");

function selectCard(){
    var select = document.getElementById("card__option").selectedIndex;
    var img = document.getElementById("cardType");
    if (select == 0) {
        img.setAttribute("src", "assets/visa_card.jpg");
    } else if (select == 1) {
        img.setAttribute("src", "assets/cb_card.jpg");
    } else {
        img.setAttribute("src", "assets/master_card.jpg");
    }
}

selectedCardType.addEventListener('change', (event) => {
    selectCard();
});

function payment(){

    const f_name = document.getElementById("firstname").value;
    const m_name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const adress = document.getElementById("adress").value;
    const city = document.getElementById("city").value;
    const zipcode = document.getElementById("zipcode").value;


    var contacts = {
        "firstName" : f_name,
        "lastName" : m_name,
        "address" : adress,
        "city" : city,
        "email" : mail
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    var productList = new Array()
    
    var order = getRandomInt(10000000);

    var letters = /^[A-Za-z]+$/;

    var errorMessage = document.getElementById("errorMessage");

    if (localStorage.length != 0) {
        if (f_name != "" && m_name != "" && mail != "" && adress != "" && city != "" & zipcode != "") {
            if (f_name.match(letters) && m_name.match(letters)) {
                if (mail.includes("@")) {

                        for (i = 0; i < localStorage.length; i++) {
                                var localRecup = localStorage.getItem(localStorage.key(i));
                                var tab = localRecup.split('/');

                                var idRecup = tab[0];

                                console.log("on ajoute" + idRecup);
                                productList.push(idRecup);
                        }

                        localStorage.clear();

                        localStorage.setItem("products", productList);
                        
                        console.log(productList);
                    
                        localStorage.setItem("orderFirstName", f_name);
                        localStorage.setItem("orderLastName", m_name);
                        localStorage.setItem("orderAddress", adress);
                        localStorage.setItem("orderCity", city);
                        localStorage.setItem("orderZip", document.getElementById("zipcode").value);
                        localStorage.setItem("orderEmail", mail);
                        localStorage.setItem("orderId", order);
                    
                        localStorage.setItem("orderTotalPrice", document.getElementById("totalPrice").innerHTML)
                    
                        localStorage.setItem("orderCardType", document.getElementById("card__option").selectedIndex);

                        console.log(localStorage);
                    
                        window.location.href="confirmation.html";
                } else {
                    console.log("il manque un @");
                    errorMessage.innerHTML = "L'adresse mail doit contenir un '@' ";
                }
            } else {
                console.log("le nom et prénom ne doivent contenir que des lettres");
                errorMessage.innerHTML = "Le nom et prénom ne doivent contenir que des lettres";
            }
        } else {
            console.log("Vous devez remplir tout les champs");
            errorMessage.innerHTML = "Vous devez remplir tout les champs";
        }
    } else {
        console.log("Votre panier est vide");
        errorMessage.innerHTML = "Votre panier est vide";
    }
}