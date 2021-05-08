const countdown =()=>{

const countDate=new Date("23 May ,2021,00:00:00").getTime()
const nowTime =new Date().getTime() 
const gap=countDate-nowTime
// console.log(countDate,nowTime,gap);


const second=1000;
const minute=second*60 
const hour = minute*60
const day = hour*24
// console.log(second,hour,day,minute);

const countDay=Math.floor(gap/day)
const dateInDay=document.querySelector(".day").innerText=countDay
///////
const countHour=Math.floor((gap%day)/hour)
const dateInHour=document.querySelector(".hour").innerText=countHour

/////
const countMinute=Math.floor((gap%hour)/minute)
const dateInMinute=document.querySelector(".minute").innerText=countMinute

const countSecond=Math.floor((gap%minute)/second)
const dateInSecond=document.querySelector(".second").innerText=countSecond


}


setInterval(countdown,1000)