let targetDate=new Date("Jan 1, 2023 00:00:00");
console.log(targetDate);

let x=setInterval(function(){

    let now=new Date();
    // console.log(now);
    let differ=targetDate-now;


    let days=Math.floor((differ)/(1000*60*60*24));
    let hours=Math.floor((differ%(1000*60*60*24))/(1000*60*60));
    let minutes=Math.floor((differ%(1000*60*60))/(1000*60));
    let seconds=Math.floor((differ%(1000*60))/(1000));

    document.getElementById("daysLeft").innerHTML=days
    document.getElementById("hoursLeft").innerHTML=hours;
    document.getElementById("minutesLeft").innerHTML=minutes;
    document.getElementById("secondsLeft").innerHTML=seconds;
},1000)

