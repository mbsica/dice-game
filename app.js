//Тоглогчийн ээлжийн хадгалах хувьсагч Player1 - 0 Player2-1
var activePlayer = 0;
//Тоглогчидын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусаныг хадгалах хувьсагч (1-6)

// initializing game

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  // Тоглогчын ээлжийн оноог өөрчилнө.
  // Буусан тоо нь 1 бол ээлж солино.
  if (diceNumber !== 1) {
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    changePlayer();
  }
});

// Hold товчны эвэнт листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  // round score -г тоглогчийн оноон дээр нэмээд
  // тоглогчийн ээлжийн солино.
  // round score -г тэглэнэ
  scores[activePlayer] += roundScore;

  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "Winner!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    changePlayer();
  }
});

// Шинэ тоглооом эхлүүлэх товчний эвэнт листенер
document.querySelector(".btn-new").addEventListener("click", function () {
  //new game
});

function changePlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
  diceDom.style.display = "none";
}
