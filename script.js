let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2024, 0, 1, 0o0, 0o0);
let endTime = endDate.getTime();

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remaimingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeroes = (num) => (num < 10 ? `0${num}` : num);

if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
        ".countdown"
    ).innerHTML = `<h1>🥳 Feliz Año Nuevo! 🥳</h1>`;
} else {
    let daysLeft = Math.floor(remaimingTime / oneDay);
    let hrsLeft = Math.floor((remaimingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remaimingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remaimingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();


var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f = new Date();
document.write('<div class="mifecha">Hoy es ' + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear() + '</div>');