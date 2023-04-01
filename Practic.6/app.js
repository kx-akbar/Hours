
"use script"

const horDiv = document.getElementById("hours");
const minDiv = document.getElementById("minute");
const secDiv = document.getElementById("second");
const HorData = document.getElementById("clock");
const minData = document.getElementById('minut');
const btn = document.getElementById('button');
const body = document.getElementById('body');
const span = document.getElementById('span');
const pm = document.getElementById('pm');


btn.addEventListener('click', () => {
    body.classList.toggle('tun');
    btn.style.backgroundColor = "#fff";
    btn.style.color = "black";
    btn.classList.toggle('brd');
    horDiv.classList.toggle('kun');
    minDiv.classList.toggle('kun');
    secDiv.classList.toggle('kun-tun');
    HorData.classList.toggle('nur');
    span.classList.toggle('spn');
    if(btn.innerHTML == 'Off'){
        btn.innerHTML = 'On'
    }else{
        btn.innerHTML = 'Off'
    }
});

setInterval(updateClock, 1000);

const data = new Date();

function updateClock() {
    let data = new Date();
    sec = data.getSeconds() / 60,
    min = (data.getMinutes() + sec) / 60,
    hor = (data.getHours() + min) / 12;

    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    horDiv.style.transform = "rotate(" + (hor * 360) + "deg)";
}

updateClock();

function timeShower() {
    let timeNow = new Date();

HorData.textContent = timeNow.getHours();
minData.textContent = timeNow.getMinutes();
}

setInterval (function() {
    timeShower();
});

timeShower();