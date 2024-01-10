const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const eidDate = new Date('10 April 2024');

/*
    date2 - date1 = milliseconds /1000 = seconds   
    day = 24hour  hour = 60mins   min = 60sec 
       1day in seconds = 24 hour * 60 min * 60sec =  86400sec 
       1hour in seconds = 60*60 = 3600sec
       1min = 60sec
    
*/  

function countDown(){
    const currentDate = new Date();
    
    const totalSeconds = Math.floor((eidDate - currentDate) / 1000);
    // Event has already passed
       if(totalSeconds < 0) {
        daysEl.innerHTML = '00';
        hoursEl.innerHTML = "00";
        minsEl.innerHtml = '00';
        secondsEl.innerHtml = '00';
        return;
       }

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400)/3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const seconds = Math.floor(totalSeconds % 60)

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    
}
function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

// initial call
countDown();

// Update every second
setInterval(countDown,1000);