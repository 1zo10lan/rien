// let temps = 100;
// const timerElement = document.getElementById("timer");

// function diminuerTemps(){
//     let minutes = parseInt(temps / 60, 10);
//     let secondes = parseInt(temps % 60, 10);
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     secondes = secondes < 10 ? "0" + secondes : secondes;
//     timerElement.innerText = minutes + ":" + secondes;
//     temps = temps <= 0 ? 0 : temps - 1;
// }   setInterval(diminuerTemps, 1000);

// setInterval(console.log,1000);

// const departMinutes = 5;
// let temps = departMinutes * 60
// const timerElement = document.getElementById("timer");
// setInterval(() => {
//     let minutes = parseInt(temps / 60, 10);
//     let secondes = parseInt(temps % 60, 10);
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     secondes = secondes < 10 ? "0" + secondes : secondes;
//     timerElement.innerText = `${minutes}:${secondes}`;
//     temps = temps <= 0 ? 0 : temps - 1;
// }, 1000);
 
var deadline = new Date("Nov 20, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days ;
    document.getElementById("hour").innerHTML = hours ;
    document.getElementById("minute").innerHTML = minutes ;
    document.getElementById("second").innerHTML = seconds ;

    if (t<0){
        clearInterval(x);
        document.getElementById("demoDate").innerHTML = " <br><br><br><br><br><br><br><br><br><br><br><br> <h1> HAPPY <br><br>BIRTHDAY <br><br>FAITH </h1> <br><br><br><br><br><br><br><br><br><br><br> Copyright @ 10LAN 2022";
        document.getElementById("day").innerHTML = '0' ;
        document.getElementById("hour").innerHTML = '0' ;
        document.getElementById("minute").innerHTML = '0' ;
        document.getElementById("second").innerHTML = '0' ;
    }
}, 1000);