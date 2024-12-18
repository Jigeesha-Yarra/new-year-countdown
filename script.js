const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const curYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${curYear + 1} 00:00:00`);

year.innerHTML = curYear + 1;

function updateCountdown() {
    const curTime = new Date();
    const diffTime = newYear - curTime;

    const getDate = Math.floor(diffTime/1000/60/60/24);
    const getHour = Math.floor(diffTime/1000/60/60) % 24;
    const getMinutes = Math.floor(diffTime/1000/60) % 60;
    const getSeconds = Math.floor(diffTime/1000)%60;

    days.innerHTML = getDate;
    hours.innerHTML = getHour < 10 ? '0' + getHour : getHour;
    minutes.innerHTML = getMinutes < 10 ? '0' + getMinutes : getMinutes;
    seconds.innerHTML = getSeconds < 10 ? '0' + getSeconds : getSeconds;
}

setTimeout(() => {
    // loading.remove();
    countdown.style.display = 'flex';
},1000);

setInterval(updateCountdown, 1000);