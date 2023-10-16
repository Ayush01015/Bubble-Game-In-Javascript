


function makeBubble(){
    let clutter = "";
    
    for(let i = 1; i<=152; i++){
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector(".pBottom").innerHTML = clutter;
}

var timer = 60;

function runTimer(){
    setInterval(()=>{
        document.querySelector(".timer").innerHTML = timer;
        console.log(timer);
        timer--;
    },1000)
}
 

makeBubble();
runTimer();
