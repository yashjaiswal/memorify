let flag = 1;
  
var clicks = new Set();
var correctClicks = new Set();
var correctCounter = 8;
let alphabets = [
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "H",
  "H"
];
let len = alphabets.length - 1;
let fc=0;
let sc=0;

function playAgain(){
  document.getElementById("congratsdiv").remove();
  window.flag=1;
  window.clicks=new Set();
  window.correctClicks=new Set();
  window.correctCounter = 8;
  window.alphabets=["A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "H",
  "H"];
  window.len = alphabets.length - 1;
  window.fc=0;
  window.sc=0;
  let wholeCellDiv = document.createElement("div");
  wholeCellDiv.setAttribute("id","wholeCell");
  wholeCellDiv.setAttribute("class","grid-container");
  for(let i=0;i<16;i++){
    let divEle=document.createElement("div");
    divEle.setAttribute("id",(i+1));
    divEle.setAttribute("class","grid-item");
    divEle.textContent="X";
    wholeCellDiv.appendChild(divEle);
  }
  let playagainDiv=document.getElementById("playagain");
  document.body.insertBefore(wholeCellDiv,playagainDiv);
playgame();
}

function playgame(){

for (let i = len; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  [alphabets[i], alphabets[j]] = [alphabets[j], alphabets[i]];
}
console.log(alphabets);


document.getElementById("wholeCell").addEventListener("click", cellClick);
}

function cellClick(e) {
  if (flag === 1) {
    getFirstClick(e);
  } else if (flag === 0) {
    getSecondClick(e);
    if (
      document.getElementById(sc).textContent ===
      document.getElementById(fc).textContent && sc!==fc && !correctClicks.has(fc) && !correctClicks.has(sc)
    ) {
      document.getElementById(sc).style.backgroundColor = "green";
      document.getElementById(fc).style.backgroundColor = "green";
      correctClicks.add(sc);
      correctClicks.add(fc);
      clicks.delete(sc);
      clicks.delete(fc);

      correctCounter--;
       console.log(correctCounter);
      if (correctCounter === 0) {
        setTimeout(() => {
          document.getElementById("wholeCell").remove();
          endGame();
        }, 400);
      }
      //console.log("kudos!");
    } else if(correctClicks.has(fc) && !correctClicks.has(sc)){
setTimeout(()=>{ document.getElementById(sc).textContent = "X"; 
      document.getElementById(sc).style.backgroundColor = "white";
      document.getElementById(fc).style.backgroundColor = "green";
      },400);
      clicks.delete(fc);
      clicks.delete(sc);
    }
    else if(!correctClicks.has(fc) && correctClicks.has(sc)){
      setTimeout(()=>{ document.getElementById(fc).textContent = "X"; 
      document.getElementById(fc).style.backgroundColor = "white";
      document.getElementById(sc).style.backgroundColor = "green";
      },400);
      clicks.delete(fc);
      clicks.delete(sc); 
    }else if(correctClicks.has(fc) && correctClicks.has(sc)){
      setTimeout(()=>{
      document.getElementById(fc).style.backgroundColor = "green";
      document.getElementById(sc).style.backgroundColor = "green";
      },400);
      clicks.delete(sc);
      clicks.delete(fc);
    }
    else {
      setTimeout(() => {
        document.getElementById(sc).textContent = "X";
        document.getElementById(fc).textContent = "X";
        document.getElementById(sc).style.backgroundColor = "white";
        document.getElementById(fc).style.backgroundColor = "white";
      }, 400);
      clicks.delete(sc);
      clicks.delete(fc);

      //console.log("bonkers");
    }
  }
}
function getFirstClick(e) {
  fc = e.target.id;
  if (clicks.has(fc) || correctClicks.has(fc)) {
    flag--;return;
  }
  clicks.add(fc);
  flag--;
  e.target.textContent = alphabets[fc - 1];
  e.target.style.backgroundColor = "orange";
}
function getSecondClick(e) {
  sc = e.target.id;
  if (clicks.has(sc) || correctClicks.has(sc)) {
    flag++;return;
  }
  clicks.add(sc);
  flag++;
  e.target.textContent = alphabets[sc - 1];
  e.target.style.backgroundColor = "orange";
}

function endGame(){
  let congratsDiv = document.createElement("div");
  congratsDiv.setAttribute("class","congratswrapper");
  congratsDiv.setAttribute("id","congratsdiv");
  
  let congratsMessage = document.createElement("p");
   congratsMessage.setAttribute("align","center");
  congratsMessage.textContent = "Well done. Here's a candy! 🍬";
  congratsMessage.style.fontSize="xx-large";
  

  
  congratsDiv.appendChild(congratsMessage);
  //congratsDiv.appendChild(linkedin);
  
  document.body.insertBefore(congratsDiv,document.getElementById("playagain"));
  
  
}
