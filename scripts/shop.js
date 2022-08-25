let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Traditional Fire Tiki Mask Sculpture',
        tag:'fire mask.jpg',
        price:29.70,
        inCart:0
    },
    {
        name:'Peacock Decorative Tiki Mask',
        tag:'Peacock Decorative Tiki Mask.jpg',
        price:30.60,
        inCart:0
    },
    {
        name:'Blue Mayura Raksha (Peacock Demon)',
        tag:'Blue Mayura Raksha (Peacock Demon).jpg',
        price:79.00,
        inCart:0
    },
    {
        name:'Fridge Magnet Gurulu Raksha ( Bird Devil )',
        tag:'Fridge Magnet Gurulu Raksha ( Bird Devil ).webp',
        price:15.20,
        inCart:0
    },
    {
        name:'Black tea',
        tag:'black tea.jpg',
        price:3.20,
        inCart:0
    },
    {
        name:'Cinnmon Tea',
        tag:'cinnamon tea.jpg',
        price:4.49,
        inCart:0
    },
    {
        name:'Green Tea',
        tag:'greentea.jpg',
        price:4.49,
        inCart:0
    },
    {
        name:'Apple tea',
        tag:'apple tea rs.jpg',
        price:4.49,
        inCart:0
    },
    {
        name:'Ginger Tea',
        tag:'ginger tea.jpg',
        price:4.49,
        inCart:0
    },
    {
        name:'Strawberry Tea',
        tag:'stawbery tea.jpg',
        price:4.49,
        inCart:0
    }
];

for (let i=0 ; i< carts.length; i++){
    carts[i].addEventListener('click' , () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}



function cartNumbers(product){
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-span').textContent = productNumbers + 1;
        
    }
    else{
        localStorage.setItem('cartNumbers', 1); 
        document.querySelector('.cart-span').textContent = 1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems={
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else{
        product.inCart = 1;
        cartItems ={
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){

    let cartCost = localStorage.getItem('totalCost');
    
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    }
    else{
        localStorage.setItem("totalCost",product.price);
    }
    display(totalCost);
}

function display(totalCost){
    var rightbox = document.querySelectorAll('.output');
    var cartCost = localStorage.getItem(totalCost);
    rightbox.innerHTML ="total price:" +totalCost+"<br/>Value:  "+cartCost;


}
function displayCart() {
    let cartItems = localStorage.getItem("producatsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer ){
        producatContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            producatContainer.innerHTML += `<section class="item">
                <img src="photos/${item.tag}" alt="product"> 
                <figcaption>${item.name}</figcaption>
            </section>
            <span class="price">$${item.price}</span>
            <section class="quantity>
                <span style='font-size:100px;'>&#10133;</span>
                <span>${item.inCart}</span>
                <span style='font-size:100px;'>&#10134;</span>
            </section>
            <section class="total">
                $${item.inCart * item.price}
            </section>`
        } );
        productContainer.innerHTML +=`
        <section class="basketTotalContainer">
            <h4 class = "basketTotalTitles">Basket Total
            </h4>
            <h4 class="basketTotal>
                $${cartCost}
            </h4>`
        ;
    }
}



displayCart();
window.localStorage.clear(); //clear all localstorage



