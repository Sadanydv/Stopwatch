
let second=0,minute=0,hour=0,day=0;
const mybtn=document.querySelector(".btn")
const days=document.querySelector(".days");
const hours=document.querySelector(".hours");
const minutes=document.querySelector(".minutes");
const seconds=document.querySelector(".seconds");
const resetbtn=document.querySelector(".resetbtn");
let timerInterval;


const TimerFunction=()=>{

    timerInterval=setInterval(() => {

        if(second==59)
        {
            minute=minute+1;
            second=-1;
            minutes.innerHTML=minute;
        }
        if(minute==60)
        {
            hour=hour+1;
            minute=0;
        }
        if(hour==12)
        {
            day=day+1;
            hour=0;
        }
        second=second+1;
        seconds.innerHTML=second;
        minutes.innerHTML=minute;
        hours.innerHTML=hour;
        days.innerHTML=day;

    }, 1000);
}

mybtn.addEventListener("click",()=>{
   
    if(mybtn.innerText==="START")
    {
        mybtn.innerText="STOP ";
        TimerFunction();
    }
    else{
        mybtn.innerText="START";
        clearInterval(timerInterval);
    }
});

const resetFunction=()=>{
    clearInterval(timerInterval);
    second=0;
    minute=0;
    hour=0;
    day=0;
    updateTime();
}
const updateTime=()=>{
    seconds.innerHTML=second;
    minutes.innerHTML=minute;
    hours.innerHTML=hour;
    days.innerHTML=day;
}
resetbtn.addEventListener("click",()=>{
    resetFunction();
})

