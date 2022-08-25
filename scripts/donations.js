let btnSubmit=document.getElementById("submit");
btnSubmit.addEventListener("click",submit);

function submit(){
    event.preventDefault();//prevents page from reloading
    console.log("Name:",document.getElementById("name").value);
    console.log("Email:",document.getElementById("email").value);
    console.log("DOB:",document.getElementById("dob").value);
    console.log("Telephone",document.getElementById("telephone").value);
    console.log("security code:",document.getElementById("security").value);
    console.log("Expiry date:",document.getElementById("exp").value);
    console.log("Address:",document.getElementById("address").value);
    
    let optCountry =document.getElementById("country");
let country=optCountry.options[optCountry.selectedIndex].value;
console.log("Country:"+country);

let amount=document.querySelector("input[name='amountType']:checked").value;
console.log("Amount:"+amount);
}

//attach event handler to all amount options
let rooms = document.querySelectorAll("input[name='amountType']");

for (let i = 0; i < rooms.length; i++) {
    rooms[i].addEventListener("change", checkAmount);
}

//check which value is linked to radio button
function checkAmount() {
    if (this.value == "100") {
        console.log("Donated amount LKR 100");
    }
    else if (this.value == "250") {
        console.log("Donated amount LKR 250");
    }
    else if (this.value == "500") {
        console.log("Donated amount LKR 500");
    }
    else if (this.value == "1000") {
        console.log("Donated amount LKR 1000");
    }
    else if (this.value == "2500") {
        console.log("Donated amount LKR 2500");
    }
    else if (this.value == "5000") {
        console.log("Donated amount LKR 5000");
    }
    else {
        console.log("Donated amount LKR 10000");
    }
}

function submitFunction(){
    let cardnum = document.getElementById("cardnum").value
    if (cardnum == ""){
        alert("please check whether you have entered everything correctly")
        txtOutput.innerText = `Please check your details`
    }
    else{
        alert("YOUR DONATION IS SUCCESSFULL. YOUR DONATION MEANS A LOT TO US. THANK YOU")
        txtOutput.innerText = `thank you for your kind donation`
    }
}
//order favourit

let txtName=document.getElementById('name');
let txtNumber=document.getElementById('telephone');
let txtEmail=document.getElementById('Email');
let txtDob=document.getElementById('dob');
let txtamount=document.querySelector("input[name='amountType']:checked").value;
let txtDonation=document.getElementById('dt');
let txtPeople=document.getElementById('people');
let btnAdd=document.getElementById('of');

btnAdd.addEventListener('click',addEntry);

let btnDonation=document.getElementById('atf');
btnDonation.addEventListener('click',addDetails)

function totalCost(product){
    console.log("the product price is",product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("Mt cartCost is" ,cartCost);
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    }
    else{
        localStorage.setItem("totalCost",product.price);
    }
    
}



