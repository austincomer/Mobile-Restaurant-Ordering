import { menuArray } from "./data.js";
import { cartItemsArray } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

// Grabbing elements in the DOM
const conatiner = document.getElementById('container')
const subtotal = document.getElementById("subtotal")
const tip = document.getElementById("tip")
const total = document.getElementById("total")
const paymentPopup = document.getElementById("payment-popup")
const paymentEnter = document.getElementById("payment-enter")
const paymentSuccessful = document.getElementById("payment-successful")
const paymentInfoForm = document.getElementById("payment-info")


// Document event listener
document.addEventListener("click", function(e) {

    if (e.target.dataset.menuItemBtn) {
        handleAddToCartClick(e.target.dataset.menuItemBtn)
        renderCartItems()
        getCartItemsSubtotal('add')
        getCartItemsTip()
        getCartItemsTotal()
        subtotal.innerHTML = `$${getCartItemsSubtotal('add')}`
        tip.innerHTML = `$${getCartItemsTip('add')}`
        total.innerHTML = `$${getCartItemsTotal('add')}`

    } 
    else if (e.target.dataset.removeItem) {
        handleRemoveItemClick(e.target.dataset.removeItem)
        renderCartItems()
        getSubtractCartItemsSubtotal()
        getCartItemsTip()
        getCartItemsTotal()
        subtotal.innerHTML = `$${getSubtractCartItemsSubtotal()}`
        tip.innerHTML = `$${getCartItemsTip()}`
        total.innerHTML = `$${getCartItemsTotal()}`
    } 
    else if (e.target.id === "checkout-btn" && cartItemsArray.length > 0 ) {
        paymentPopup.style.display = 'block'
        container.style.filter = 'blur(3px) brightness(70%)'
    }
    else if (e.target.id === "close-payment-popup") {
        paymentPopup.style.display = 'none'
        container.style.filter = 'none'
    }

})


// Handle event listener clicks
function handleAddToCartClick(itemId) {
    const targetItemObj = menuArray.filter(function(item) {
        return item.uuid === itemId
    })[0]

    cartItemsArray.push(targetItemObj)
}

function handleRemoveItemClick(itemId) {
    const targetItemObj = menuArray.filter(function(item) {
        return item.uuid === itemId
    })[0]

    let targetItemIndex = cartItemsArray.indexOf(targetItemObj)

    cartItemsArray.splice(targetItemIndex, 1)
}



// Sum functions 
function getCartItemsSubtotal(operator) {

    let cartItemsSubtotal = +''

    cartItemsArray.forEach(function(cart) {
        cartItemsSubtotal += cart.price
    })
    
    return cartItemsSubtotal.toFixed(2)
} 

function getSubtractCartItemsSubtotal() {

    let cartItemsSubtotal = +''

    cartItemsArray.forEach(function(cart) {
        cartItemsSubtotal += cart.price
    })
    
    return cartItemsSubtotal.toFixed(2)
} 

function getCartItemsTip() {
    
    let cartSubtotal = getCartItemsSubtotal()
    let tipTotal = cartSubtotal * .18

    return tipTotal.toFixed(2)
}

function getCartItemsTotal() {

    let subtotalValue = getCartItemsSubtotal()
    let tipValue = getCartItemsTip()
    let totalValue = +tipValue + +subtotalValue

    return totalValue.toFixed(2)
}




// Handle payment click 
paymentInfoForm.addEventListener("submit", function(e) {
    e.preventDefault()
    paymentSuccessful.style.display = "block"
    paymentEnter.style.display = "none"
    container.style.filter = 'blur(3px) brightness(70%)'
})






// Generate the html for the MENU item section
function getMenuItemsHtml() {

    let menuItemsHtml = ''

    menuArray.forEach(function(item) {
        
        menuItemsHtml += `
            <div class="menu-item-card">
                <div class="menu-item-card-img-container">
                    <img src="${item.photo}" class="menu-item-img">
                </div>

                <div class="menu-card-body">
                    <h3 class="food-name">${item.name}</h3>
                    <div class="menu-card-body-price">
                        <h3 class="food-price">$${item.price}</h3>
                        <span class="desc-icon">
                            <i class="fa-solid fa-circle-info"></i>
                        </span>
                    </div>
                    <button class="add-to-cart-btn" id="add-to-cart-btn" data-menu-item-btn="${item.uuid}">Add to cart</button>
                </div>
            </div>
        `
    })
    return menuItemsHtml
}


// Generate the html for the CART items section 
function getCartItemsHtml() {

    let cartItemsHtml = ''

    cartItemsArray.forEach(function(item) {

        cartItemsHtml += `
            <div class="cart-items-card">
                <div class="cart-item-img-container">
                    <img src="${item.photo}" class="cart-item-img">
                </div>

                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <button class="remove-item" id="remove-item" data-remove-item="${item.uuid}">Remove item</button>
                </div>

                <div class="cart-item-price">
                    <h3>$${item.price}</h3>
                </div>
            </div>
        `
    })

    return cartItemsHtml
}


// render the menu item html to the dom
function renderMenuItems() {
    document.getElementById('menu-items').innerHTML = getMenuItemsHtml()
}

// render the cart item html to the dom
function renderCartItems() {
    document.getElementById('checkout-items').innerHTML = getCartItemsHtml()
}


renderMenuItems()



