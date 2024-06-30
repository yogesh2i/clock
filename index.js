const time_text = document.getElementById('time_text');
const date_text = document.getElementById('date_text');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
let date = new Date();
let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
time_text.innerText = time;
let dateString = `${date.getDate()<10?'0'+date.getDate():date.getDate()}/${date.getMonth()<10?'0'+(date.getMonth()+1):date.getMonth+1}/${date.getFullYear()}`;
date_text.innerText = dateString;
let interval;

function startTime(){
 
    interval = setInterval(()=>{
         date = new Date();
         time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        time_text.innerText = time;
    },1000)

}
function stopTime(){
    clearInterval(interval);
}

stopBtn.addEventListener('click',()=>{
    stopTime();
})
startBtn.addEventListener('click',()=>{
    startTime();
})
startTime();

