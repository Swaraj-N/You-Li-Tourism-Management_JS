console.log("I am the firs statement in the script");
//Settimeout is a webApi method used to perform any action after specified period of time
setTimeout(() => {
    console.log("2nd statement in the script Waited for 1 Second");
}, 1000);
setTimeout(() => {
    console.log("3rd statement in the script Waited for 3 Second");
}, 3000);
setTimeout(() => {
    console.log("4th statement in the script Waited for 2 Second");
}, 2000);
//setInterval is also web Api method used to perform an action repeatedly for the specified time period
setInterval(() => {
    console.log("I am being printed for every 4 Seconds");
}, 4000);
console.log("I am the last statement in the script");
//TO OVERCOME THIS DRAWBACK WE GO FOR PROMISE