//Тоглогчийн ээлжийн хадгалах хувьсагч Player1 - 0 Player2-1
var activePlayer = 1;
//Тоглогчидын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусаныг хадгалах хувьсагч (1-6)
var dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// initializing game
document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";

document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";

document.querySelector(".dice").style.display = "none";
