function clock() {
    let hoursE = document.getElementById('hour');
    let minutesE = document.getElementById('minutes');
    let secondsE = document.getElementById('seconds');
    let ampmE = document.getElementById('am');
    
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = hour >= 12 ? 'PM' : 'AM';

    if(hour > 12) {
        hour = hour - 12; 

    } 

    hour = (hour < 10) ? "0" + hour : hour; 
    minute = (minute < 10) ? "0" + minute : minute; 
    second = (second < 10) ? "0" + second : second;

    hoursE.innerHTML = hour;
    minutesE.innerHTML = minute;
    secondsE.innerHTML = second;
    ampmE.innerHTML = ampm;
}

setInterval(clock, 1000);
