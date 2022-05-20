
const cart = document.querySelector(".cart")
const cartSideBar = document.querySelector(".cart-sidebar")
const closeCart = document.querySelector(".close-cart")
const burger = document.querySelector(".burger")
const menuSidebar = document.querySelector(".menu-sidebar")
const closeMenu = document.querySelector(".close-menu")
const cartItemsTotal = document.querySelector(".noi")
const cartPriceTotal = document.querySelector(".total-amount")
const cartUi = document.querySelector(".cart-sidebar .cart")
const totalDiv = document.querySelector(".total-sum")
const clearBtn = document.querySelector(".clear-cart-btn")
const cartContent = document.querySelector(".cart-content")
let btnCountPlus = document.querySelector(".btn-count-plus")
let btnCountMinus = document.querySelector(".btn-count-minus")
let countDisplay = document.querySelector(".count")
let noItems = document.querySelector(".numb-of-items")
let count =0;





cart.addEventListener("click", function() {

  cartSideBar.style.transform = "translate(0%)"
  const bodyOverlay = document.createElement("div")
  bodyOverlay.classList.add("overlay");
  setTimeout(function() {
    document.querySelector("body").append(bodyOverlay)
  }, 300)
})



closeCart.addEventListener("click", function() {
  cartSideBar.style.transform = "translate(100%)"
  const bodyOverlay = document.querySelector(".overlay")
  document.querySelector("body").removeChild(bodyOverlay)

})




btnCountPlus.addEventListener("click",function(){
  count ++
  countDisplay.innerHTML = count


})

btnCountMinus.addEventListener("click",function(){
  count --;
  countDisplay.innerHTML = count;
})















burger.addEventListener("click", function() {
  menuSidebar.style.transform = "translate(0%)"
})

closeMenu.addEventListener("click", function() {
  menuSidebar.style.transform = "translate(-100%)"
})

