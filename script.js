//ไฟล์ระบบ

//สร้างนาฬิกา
const liveTime = document.getElementById('clock');
//เสียงงนาฬิกา
const audio = new Audio('alarm.mp3');
audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;
let alertdiv=document.getElementById('alarm-box');


//ฟังชั่นอัพเเดตเวลา
function updateLiveTime() {
    const date = new Date(); //วัน
    const hour = addZero(date.getHours()); //ชั่วโมง
    const minute = addZero(date.getMinutes()); //นาที
    const second = addZero(date.getSeconds()); //วินาที

    liveTime.innerText = `${hour}:${minute}:${second}`; //เอา ชั่วโฒง นาที วิทนาทีมารวมกันเป็นเวลา
}

setInterval(updateLiveTime, 1000);

//เพิ่มเวลา
function addZero(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

//ตั้งเวลา
function setAlarmTime(value) {
    alarmTime = value;
}

//ฟังชั่นตั้งปลก
function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);            
            alertdiv.className='alert alert-warning';
            alertdiv.innerHTML=`Alarm scheduled on ${timeToAlarm}`;
            // alert('Alarm set');
            // alarmBox.append(alertdiv);
        }
    }else{
        alert("Please select the date and time")
    }
}

//ฟังชั่นลบการปลูก
function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alertdiv.innerHTML=`Alarm Cleared, No Alarm for now. `;
        // alert('Alarm cleared');
    }
    document.getElementById('alarm-time').value="";
}
