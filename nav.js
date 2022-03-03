const nav = document.querySelector(".nav");
const navButton = document.querySelector(".nav-button");
const navCheck = document.querySelector(".nav-check");

navButton.addEventListener("click", () => {
	navCheck.classList.toggle("nav-checked");
	handleNav();
});
window.onload = () => {
	handleNav();
};
