function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 160; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector(".pBottom").innerHTML = clutter;
}

var score = 0;
var timer = 60;

function runTimer() {
  var timerInterval = setInterval(() => {
    if (!(timer < 0)) {
      let timerBox = document.querySelector(".timer");
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
    }
  }, 1000);
}

function getNewHit() {
  document.querySelector(".hit").textContent = Math.floor(Math.random() * 10);
}
function increaseScore(){
    score += 10;
    document.querySelector(".score").textContent = score;
}

makeBubble();
runTimer();
getNewHit();