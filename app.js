const hero = document.querySelector(".hero");
const header = document.querySelector("header");
const backImg = document.querySelector(".back-img");
const about = document.querySelector(".about");
const nav = document.querySelector(".nav");
const navButton = document.querySelector(".nav-button");
const navCheck = document.querySelector(".nav-check");
const hexGrid = document.querySelector(".hex-grid-container");

const shadowValues = [2, 4, 6, 8, 12, 16, 24];
const colors = [
	"red",
	"pink",
	"purple",
	"dark-purple",
	"indigo",
	"light-blue",
	"cyan",
	"green",
	"light-green",
	"yellow",
	"orange",
	"deep-orange",
	"brown",
	"grey",
	"blue-grey",
];
AOS.init();

let backImgBgColor = "rgba(240,240,240,0)";
let backImgImg = `url('./images/logo.png')`;
let backImgSize = "90%";

let headerIn = "-15vh";
let headerBgColor = "transparent";
let headerHeight = "15vh";
let headerBoxShadow = "none";

let aboutBgcolor = "#f0f0f0";
let aboutTop = "-100vh";
let aboutOpacity = 0;

const vh = window.innerHeight / 100;
const t = 150 * vh;

const backImgOnScroll = () => {
	if (window.scrollY < 100 * vh) {
		backImgBgColor = `rgba(240,240,240,${window.scrollY / (100 * vh)})`;
		backImgImg = `url('./images/logo.png')`;
		backImgSize = `${45 * (2 - window.scrollY / (100 * vh))}%`;
		hero.style.zIndex = 5;
	} else {
		backImgBgColor = `var(--bgcolor)`;
		backImgImg = "none";
		backImgSize = "0";
		hero.style.zIndex = -1;
	}
	backImg.style.backgroundColor = backImgBgColor;
	backImg.style.backgroundImage = backImgImg;
	backImg.style.height = backImgSize;
	backImg.style.width = backImgSize;
};

const headerOnScroll = () => {
	if (window.scrollY < 100 * vh) {
		headerIn = `${15 * (window.scrollY / (100 * vh) - 1)}vh`;
		headerBgColor = "transparent";
	} else {
		headerIn = "0";
		if (window.scrollY < 150 * vh) {
			headerBgColor = `rgba(240, 240, 240, ${window.scrollY / t})`;
			headerBoxShadow =
				window.scrollY < 0.25 * t
					? "none"
					: `var(--shadow-elevation-${
							window.scrollY > 0.75 * t ? 4 : 2
					  }dp)`;
			headerHeight = `${25 - window.scrollY / (10 * vh)}vh`;
		} else {
			headerBgColor = "var(--bgcolor)";
			headerBoxShadow = `var(--shadow-elevation-${
				window.scrollY > 1.25 * t ? 8 : 4
			}dp)`;
			headerHeight = "10vh";
		}
	}
	console.log("Well ill be damned");
	header.style.top = headerIn;
	header.style.backgroundColor = headerBgColor;
	header.style.boxShadow = headerBoxShadow;
	header.style.height = headerHeight;
};

const aboutOnScroll = () => {
	const t = 100;
	if (window.scrollY > (t + 1) * vh && window.scrollY < (t + 101) * vh) {
		aboutBgcolor = `linear-gradient(to right, #2e3141 ${
			window.scrollY / vh - t
		}%, #f0f0f0 ${window.scrollY / vh - t}%)`;
		aboutOpacity = 1;
		about.style.zIndex = 5;
	} else {
		if (
			window.scrollY > (t + 101) * vh &&
			window.scrollY < (t + 150) * vh
		) {
			aboutBgcolor = `linear-gradient(to right,#f0f0f0 ${
				window.scrollY / vh - (t + 101)
			}%, #2e3141 ${window.scrollY / vh - (t + 101)}%)`;
			aboutOpacity = ((t + 150) * vh - window.scrollY) / (50 * vh);
			about.style.zIndex = 5;
		} else {
			aboutOpacity = 0;
			about.style.zIndex = -1;
		}
	}
	about.style.backgroundImage = aboutBgcolor;
	about.style.opacity = aboutOpacity;
};

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

const renderFestImages = () => {
	s = "";
	for (let i = 1; i <= 21; i++) {
		s += `
			<div class="hex-in" style='background-image:url(./fest/${i}.JPG);' data-aos="zoom-in"></div>
	`;
		hexGrid.innerHTML = s;
	}
};

window.addEventListener("scroll", () => {
	// headerOnScroll();
	aboutOnScroll();
	backImgOnScroll();
});

navButton.addEventListener("click", () => {
	navCheck.classList.toggle("nav-checked");
	handleNav();
});
window.onload = () => {
	handleNav();
	renderFestImages();
};
