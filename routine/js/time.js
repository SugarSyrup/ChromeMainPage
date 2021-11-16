const clock = document.querySelector("p#clock");

// clock to Text
function getClock(){
    const date = new Date();
    let hours = String(date.getHours()).padStart(2,"0");
    let moringAfternoon = "오전"
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const Days = String(date.getDay());
    
    const Month = String(date.getMonth());

    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = String(week[date.getDay()]);

    if ( hours > 12 ){
        hours = hours - 12;
        moringAfternoon = "오후";
    }
    clock.innerText = `${Month}.${Days} (${dayOfWeek}) ${moringAfternoon} ${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 60000);