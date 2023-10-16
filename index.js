var score = 0;
var timer = 60;
var hitRn = 0;
var start = false;
let startBtn = document.querySelector(".start");
let reStartBtn = document.querySelector(".reStart");
let timerBox = document.querySelector(".timer");
let playerScore = document.querySelector(".score");


function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 160; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector(".pBottom").innerHTML = clutter;
}

function runTimer() {
  var timerInterval = setInterval(() => {
    let pbtm = document.querySelector(".pBottom");
    if (timer === 0) {
      start = false;
      reStartBtn.style.display = "block";
      startBtn.style.display = "none";
    }
    if (!(timer < 0)) {
      timerBox.textContent = timer;
      if (timer < 21) {
        timerBox.style.backgroundColor = "yellow";
      }
      if (timer < 11) {
        timerBox.style.backgroundColor = "red";
      }
      timer--;
    } else {
      clearInterval(timerInterval);
      pbtm.innerHTML = `<h1>Game Over</h1>`;
      pbtm.classList.add("center");
    }
  }, 1000);
}

function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = hitRn;
}

function increaseScore() {
  score += 10;
  playerScore.textContent = score;
}

document.querySelector(".pBottom").addEventListener("click", (dets) => {
  let clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === hitRn) {
    if (start === true) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  }
});

function startGame() {
  startBtn.addEventListener("click", () => {
    if (start === false) {
      start = true;
      runTimer();
      // timer = 10;
      // score = 0;
    }
  });
}

reStartBtn.addEventListener("click", () => {
    timer = 60;
    score = 0;
    timerBox.textContent = timer;
    playerScore.textContent = score;
    console.log(timer);
    reStartBtn.style.display = "none";
    startBtn.style.display = "block";
    makeBubble();
});

makeBubble();
getNewHit();
startGame();

