const endLockdown = "13 Oct 2020";
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countdown(){
    const currentDate = new Date();
    const endLockdownDate = new Date(endLockdown);

    const totalSeconds = (endLockdownDate - currentDate) / 1000 ;
    const seconds = Math.floor(totalSeconds % 60 )
    const days = Math.floor(totalSeconds / 3600 / 24);
    const mins = Math.floor(totalSeconds / 60 % 60 );
    const hours = Math.floor(totalSeconds / 3600 % 24);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time ;
}


countdown();
setInterval(countdown,1000);