const burger_menu = document.querySelector(".burger-menu")
const cross_icon = document.querySelector(".cross-icon")
const navLinks = document.querySelector(".center")
const exit = document.querySelector(".cross-icon")


burger_menu.addEventListener('click',()=>{navLinks.classList.toggle('mobile-menu')})
burger_menu.addEventListener('click',()=>{exit.classList.toggle('mobile-menu')})
cross_icon.addEventListener('click',()=>{navLinks.classList.toggle('mobile-menu')})
cross_icon.addEventListener('click',()=>{exit.classList.toggle('mobile-menu')})