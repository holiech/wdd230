
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;



const ham = document.querySelector('.navigation');
const hbutton = document.querySelector('#menu')

hbutton.addEventListener('click', () => {
    ham.classList.toggle('show');
    hbutton.classList.toggle('show');
});


const mode = document.querySelector("#dark-mode");
const main = document.querySelector("main");

mode.addEventListener("click", () => {
	if (mode.textContent.includes("🌑")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		mode.textContent = "🌞";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		mode.textContent = "🌑";
	}
});


let visit= localStorage.getItem('visit') || 0;
document.getElementById('visit').textContent = visit;

visit ++;
localStorage.setItem('visit', visit);

