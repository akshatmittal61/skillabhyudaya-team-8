const header = document.querySelector("header");
const backImg = document.querySelector(".back-img");
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
let headerIn = "-15vh";
let headerBgColor = "transparent";
let headerHeight = "15vh";
let headerBoxShadow = "none";
const vh = window.innerHeight / 100;
const t = 50 * vh;
window.addEventListener("scroll", () => {
	if (window.scrollY < 100 * vh) {
		backImgBgColor = `rgba(240,240,240,${window.scrollY / (100 * vh)})`;
		headerIn = `${15 * (window.scrollY / (100 * vh) - 1)}vh`;
		headerBgColor = "transparent";
	} else {
		backImgBgColor = `var(--bgcolor)`;
		headerIn = "0";
		if (window.scrollY < 150 * vh) {
			bgcolor = `rgba(159, 86, 46, ${window.scrollY / t})`;
			headerBoxShadow =
				window.scrollY < 0.25 * t
					? "none"
					: `var(--shadow-elevation-${
							window.scrollY > 0.75 * t ? 4 : 2
					  }dp)`;
			headerHeight = `${25 - window.scrollY / (10 * vh)}vh`;
		} else {
			bgcolor = "rgb(159, 86, 46)";
			headerBoxShadow = `var(--shadow-elevation-${
				window.scrollY > 1.25 * t ? 8 : 4
			}dp)`;
			headerHeight = "10vh";
		}
	}
	console.log(headerHeight);
	backImg.style.backgroundColor = backImgBgColor;
	header.style.top = headerIn;
	header.style.backgroundColor = headerBgColor;
	header.style.boxShadow = headerBoxShadow;
	header.style.height = headerHeight;
});
