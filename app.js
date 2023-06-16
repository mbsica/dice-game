var activePlayer, scores, roundScore, isNewGame; // isGameOver нь тоглоом дууссан эсэхийн төлөвийг хадгалах хувьсагч

var diceDom = document.querySelector(".dice");

gameInit();

diceDom.style.display = "none";

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    // Тоглогчын ээлжийн оноог өөрчилнө.
    // Буусан тоо нь 1 бол ээлж солино.
    if (diceNumber !== 1) {
      roundScore += diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      changePlayer();
    }
  } else {
    //buttong idewhgvi blgoh
  }
});

// Hold товчны эвэнт листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // round score -г тоглогчийн оноон дээр нэмээд
    // тоглогчийн ээлжийн солино.
    // round score -г тэглэнэ
    scores[activePlayer] += roundScore;

    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      isNewGame = false;
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
  } else {
    //buttong idewhgvi blgh
  }
});

// Шинэ тоглооом эхлүүлэх товчний эвэнт листенер
document.querySelector(".btn-new").addEventListener("click", gameInit);

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

function gameInit() {
  //Тоглогчийн ээлжийн хадгалах хувьсагч Player1 - 0 Player2-1
  activePlayer = 0;
  //Тоглогчидын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  //Ээлжийн оноог хадгалах хувьсагч
  roundScore = 0;
  isNewGame = true;

  // initializing game

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";
}
