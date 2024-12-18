const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const sparkleEffect = document.getElementById("sparkle-effect");
const newYearMessage = document.getElementById("new-year-message");
const countdown = document.getElementById("countdown");


const curYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${curYear+1} 00:00:00`);
//const newYear = new Date("December 19, 2024 01:19:24");

function updateCountdown(){
    const curTime = new Date();
    const diffTime = newYear - curTime;

    if(diffTime <= 0){
        clearInterval(interval);
        displayNewYearEffect();
        return;
    }
    const getDate = Math.floor(diffTime/1000/60/60/24);
    const getHours = Math.floor(diffTime/1000/60/60)%24;
    const getMinutes = Math.floor(diffTime/1000/60)%60;
    const getSeconds = Math.floor(diffTime/1000)%60;
    days.textContent = getDate;
    hours.textContent = getHours;
    minutes.textContent = getMinutes;
    seconds.textContent = getSeconds;

    // if(diffTime <= 0){
    //     clearInterval(interval);
    //     displayNewYearEffect();
    //     return;
    // }
}

function generateSparkle(){
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    const maxWidth = window.innerWidth;
    const minHeight = window.innerHeight;

    const randomX = Math.random()*maxWidth - 50;
    const randomY = Math.random()*minHeight - 50;

    const randomAngle = Math.random()*360;
    const randomDistance = Math.random()*300 + 100;

    sparkle.style.setProperty('--x', `${Math.cos(randomAngle)*randomDistance}px`);
    sparkle.style.setProperty('--y', `${Math.sin(randomAngle)*randomDistance}px`);
    sparkle.style.top = `${randomY}px`;
    sparkle.style.left = `${randomX}px`;
    sparkleEffect.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

function displayNewYearEffect() {
    console.log("Triggered");
    sparkleEffect.classList.remove("hidden");
    newYearMessage.classList.remove("hidden");
    countdown.classList.add("hidden");

    setTimeout(() => {
        console.log("Hiding");
        sparkleEffect.classList.add("hidden");
    },10000);

}
const interval = setInterval(updateCountdown,1000);
updateCountdown();
displayNewYearEffect();