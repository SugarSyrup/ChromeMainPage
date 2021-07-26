const clock = document.querySelector("p#clock");

// clock to Text
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const Days = String(date.getDay());
    
    const months = ['Jan','Feb',"Mar",'Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    const Month = String(months[date.getMonth()]);

    const week = ['SUN', 'MON', 'THU', 'WED', 'THR', 'FRI', 'SAT'];
    const dayOfWeek = String(week[date.getDay()]);

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    dates.innerText = `${Month} ${Days} (${dayOfWeek})`;
}

setInterval(getClock, 1000);