// let intID = setInterval(showTime, 1000);

const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');

console.log(moonLanding.getFullYear());

let timeBlock = document.getElementById('time');

function showTime(){
    let checkTimeNumber = (number) => (number < 10) ? `0${number}` : `${number}`;

    let tm = new Date(Date.now());
    
    let day = tm.getDate();
    day = checkTimeNumber(day);
    
    let weekDay = tm.getDay();
    
    let month = tm.getMonth();
    month = checkTimeNumber(++month);
        
    let year = tm.getFullYear();
    
    let hour = tm.getHours();
    hour = checkTimeNumber(hour);
    
    let minute = tm.getMinutes();
    minute = checkTimeNumber(minute);
    
    let second = tm.getSeconds();
    second = checkTimeNumber(second);

    timeBlock.innerText = `Bugungi sana ${day}-${month}-${year}. Haftaning ${weekDay}-kuni. Soat: ${hour}:${minute}:${second}`;
}