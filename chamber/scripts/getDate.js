document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

const ham = document.querySelector('.navigation');
const hbutton = document.querySelector('#menu')

hbutton.addEventListener('click', () => {
    ham.classList.toggle('show');
    hbutton.classList.toggle('show');
});
