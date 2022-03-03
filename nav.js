const nav = document.querySelector(".nav");
const navButton = document.querySelector(".nav-button");
const navCheck = document.querySelector(".nav-check");

const handleNav = () => {
	if (navCheck.classList.contains("nav-checked")) {
		nav.style.zIndex = 100;
		nav.style.width = "100vw";
		nav.style.height = "100vh";
	} else {
		nav.style.zIndex = 15;
		nav.style.width = "0";
		nav.style.height = "0";
	}
};

navButton.addEventListener("click", () => {
	navCheck.classList.toggle("nav-checked");
	handleNav();
});
window.onload = () => {
	handleNav();
};

AOS.init();
