const burgerButton = document.querySelector(".header__burger-container");
const burgerLines = document.querySelectorAll(".header__burger-line");
const sideMenu = document.querySelector(".header__nav-container");
const body = document.querySelector("body");
const linkButtons = document.querySelectorAll(".header__nav-link");

burgerButton.addEventListener("click", () => {
  if (burgerLines[0].classList.contains("header__burger-line-top-animation")) {
    body.classList.remove("lock");
    closeMenu();
  } else {
    body.classList.add("lock");
    openMenu();
  }
});

linkButtons.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("lock");
    closeMenu();
  });
});

function closeMenu() {
  burgerLines[0].classList.remove("header__burger-line-top-animation");
  burgerLines[1].classList.remove("header__burger-line-bottom-animation");
  sideMenu.classList.remove("header__nav-container-animation");
}

function openMenu() {
  burgerLines[0].classList.add("header__burger-line-top-animation");
  burgerLines[1].classList.add("header__burger-line-bottom-animation");
  sideMenu.classList.add("header__nav-container-animation");
}
