// Timeout
// Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato

// "Ora" : "Minuti"
// possiamo scrivere 3 timeout diversi, oppure come bonus usiamo un array con i tempi [1,5,10].forEach

//w 3 timeout
function myTimer() {
  let timeRightNow = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return console.log(timeRightNow);
}

let firstTimer = setTimeout(myTimer, 1000);
let secondTimer = setTimeout(myTimer, 5000);
let thirdTimer = setTimeout(myTimer, 10000);

// Interval
// 1- Fare il console.log analogo a quello mostrato su time.is
// 2- optional- dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo, come se fosse un tombola, un numero.
//Cancelliamo l'interval quando avremo pescato tutti i numeri possibili.
//tip: Contiamo quante volte abbiamo fatto parte l'intervallo

//1

function displayTime() {
  let date = new Date();
  let actualTime = date.toLocaleTimeString();
  console.log(actualTime);
}
const myClock = setInterval(displayTime, 1000);

//2 NOT WORKING, GONNA UPDATE TOMORROW, non reggo più, scusate
// const number = [42, 23, 1, 7, 12, 99];

// function bingo() {
//   for (let i = -1; i < number.length - 1; i++) {
//     console.log(number[i]);
//   }
// }

// const myBingo = setInterval(bingo, 1000);

// DOM
// Prendiamo l'esercizo 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "...""

function displayTimeTwo() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById("demo").innerHTML = time;
}
const myClock2 = setInterval(displayTimeTwo, 1000);
