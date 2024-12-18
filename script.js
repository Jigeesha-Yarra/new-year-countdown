const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const curYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${curYear+1} 00:00:00`);
//const newYear = new Date("December 19, 2024 01:19:24");

function updateCountdown(){
    const curTime = new Date();
    const diffTime = newYear - curTime;

    const getDate = Math.floor(diffTime/1000/60/60/24);
    const getHours = Math.floor(diffTime/1000/60/60)%24;
    const getMinutes = Math.floor(diffTime/1000/60)%60;
    const getSeconds = Math.floor(diffTime/1000)%60;
    days.textContent = getDate;
    hours.textContent = getHours;
    minutes.textContent = getMinutes;
    seconds.textContent = getSeconds;
}

const interval = setInterval(updateCountdown,1000);
updateCountdown();