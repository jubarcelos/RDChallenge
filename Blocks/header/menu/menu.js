const menu = document.querySelector(".menu");
const menuTwo = document.querySelectorAll(".header__nav_item")[1];

function handleMenu() {
  menu.classList.toggle("menu_opened");
}

menuTwo.addEventListener("click", () => {
  handleMenu();
  //animation
});