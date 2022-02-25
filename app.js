const shadowContainer = document.querySelector(".shadow-container");
const colorContainer = document.querySelector(".color-container");
let s = "";
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

for (let i = 1; i <= 7; i++) {
	s += `
    <div class="a" style="box-shadow: var(--shadow-elevation-${
		shadowValues[i - 1]
	}dp)"></div>
    `;
	shadowContainer.innerHTML = s;
}
s = "";
for (let i = 0; i < colors.length; i++) {
	s += `
    <div class="a" style="box-shadow:  var(--shadow-elevation-8dp)">
    <span style="background-color: var(--${colors[i]})"></span>
    <span style="background-color: var(--${colors[i]}-100)"></span>
    <span style="background-color: var(--${colors[i]}-400)"></span>
    <span style="background-color: var(--${colors[i]}-700)"></span>
    </div>
    `;
	colorContainer.innerHTML = s;
}
