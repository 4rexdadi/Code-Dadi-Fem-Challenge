const hamburger = document.querySelector(".header__hamburger");
const sideMenu = document.querySelector(".header__side-menu");
const bodyOverflow = document.querySelector(".body");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	sideMenu.classList.toggle("display");
	bodyOverflow.classList.toggle("bodyOverflow");
});
