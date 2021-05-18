const burger = document.querySelector(".btn-burger")
const nav = document.querySelector(".main-navigation__inner-wrap")

burger.addEventListener("click", ()=>{
  nav.classList.toggle("main-navigation__inner-wrap--is-open")
  burger.classList.toggle("btn-burger--is-expanded")

})