let gameseq = [];
let userseq = [];

let btns =["yellow","green","red","purple"];

let started =false;
let level = 0;
let highestScore=0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
    }
});


function gameFlash (btn) {
    btn.classList.add("flash");
    setTimeout(function () {
    btn.classList.remove("flash");
    }, 250);
}


function userFlash (btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
    btn.classList.remove("userflash");
    }, 250);
}


function levelUp() {

    userseq=[];
    level++;

    if (level > highestScore) {
        highestScore = level;  // Update the highest score
      }
      h2.innerText = `Level ${level} | High Score: ${highestScore}`; 

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns [randIdx];
    gameseq.push(randColor);
    console.log(gameseq);
   
    let randBtn = document.querySelector(`.${randColor}`);

    gameFlash (randBtn);
}

function checkans(idx){
    

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
           
           setTimeout(function(){
            levelUp();
           },500);
        }
}else{
    h2.innerHTML = `Game Over!! <b> Your score was ${level} Highest Score is ${highestScore}</b> <br> Press any key start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout( function(){
        document.querySelector("body").style.backgroundColor = "white";
    },150);

    reset();
} 
}

function btnpress(){
    let btn =this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);

}

let allbtns = document.querySelectorAll(".btn");

for( btn of allbtns){
    btn.addEventListener("click", btnpress);
}
    

function reset(){
    started=false;
    userseq=[];
    gameseq = [];
    level=0;
}


