function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 160; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector(".pBottom").innerHTML = clutter;
}

var score = 0;
var timer = 2;
var hitRn = 0;

function runTimer() {
  var timerInterval = setInterval(() => {
    let pbtm = document.querySelector(".pBottom");
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
      pbtm.innerHTML = `<h1>Game Over</h1>`;
      pbtm.classList.add('center');
    }
  }, 1000);
}

function getNewHit() {
    hitRn = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = hitRn;
}
function increaseScore(){
    score += 10;
    document.querySelector(".score").textContent = score;
}

document.querySelector(".pBottom")
.addEventListener("click",(dets)=>{
    let clickedNumber = Number(dets.target.textContent);
    if(clickedNumber === hitRn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

// let startBtn = document.querySelector
makeBubble();
runTimer();
getNewHit();