let favourits = document.querySelectorAll('.add-favorit');

let items =[
    {
        name:'Traditional Fire Tiki Mask Sculpture',
        tag:'tftms',
        price:29.70,
        inCart:0
    },
    {
        name:'Peacock Decorative Tiki Mask',
        tag:'pdtm',
        price:30.60,
        inCart:0
    },
    {
        name:'Blue Mayura Raksha (Peacock Demon)',
        tag:'bmr',
        price:79.00,
        inCart:0
    },
    {
        name:'Fridge Magnet Gurulu Raksha ( Bird Devil )',
        tag:'fmgr',
        price:15.20,
        inCart:0
    },
    {
        name:'Black tea',
        tag:'bt',
        price:3.20,
        inCart:0
    },
    {
        name:'Cinnmon Tea',
        tag:'ct',
        price:4.49,
        inCart:0
    },
    {
        name:'Green Tea',
        tag:'gt',
        price:4.49,
        inCart:0
    },
    {
        name:'Apple tea',
        tag:'at',
        price:4.49,
        inCart:0
    },
    {
        name:'Ginger Tea',
        tag:'git',
        price:4.49,
        inCart:0
    },
    {
        name:'Strawberry Tea',
        tag:'st',
        price:4.49,
        inCart:0
    }
];
for(let i=0; i < favourits.length; i++){
    favourits[i].addEventListener('click', ()=>{
        cartNum(items[i]);
    })
}

function cartNum(item){
    let itemNum = localStorage.getItem('cartNumbers');
    itemNum = parseInt(itemNum);

    if(itemNum) {
        localStorage.setItem('cartNumbers', itemNum);
        document.querySelector('.cart-span').textContent = itemNum ;
        
    }
    else{
        localStorage.setItem('cartNumbers', 1); 
        document.querySelector('.cart-span').textContent = 1;
    }
    setItems(item);
}



function setItem(item){
    console.log("my product is:",item);

    let cartProduct = localStorage.getItem('itemsInCart');
    cartItems = JSON.parse(cartProduct);
    
    if(cartProduct != null) {

        if(cartProduct[item.tag] == undefined) {
            cartProduct={
                ...cartProduct,
                [item.tag]: item
            }
        }
    }
    else{
        item.inCart = 1;
        cartProduct ={
            [item.tag]: item
        }
    }
    
    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
}

function fullCost(item){
    console.log("the product price is", item.price);
    let cartTotalCost = localStorage.getItem('fullCost');
    
    console.log("Mt cartCost is" ,cartTotalCost);
    if(cartTotalCost != null){
        cartTotalCost = parseInt(cartCost);
        localStorage.setItem("fullCost", cartTotalCost + item.price)
    }
    else{
        localStorage.setItem("fullCost",item.price);
    }
    
}
function display(fullCost){
    var rightbox = document.querySelectorAll('.output');
    var cartTotalCost = localStorage.getItem(fullCost);
    rightbox.innerHTML ="total price:" +fullCost+"<br/>Value:  "+cartTotalCost;


}


window.localStorage.clear(); //clear all localstorage

