const newGame = document.getElementById("NewGame");
const throwDice = document.getElementById("ThrowDice");
const hold = document.getElementById("Hold");

var p1Round = document.getElementById("Player1Round");
var p2Round = document.getElementById("Player2Round");
var p1Score = document.getElementById("Player1Score");
var p2Score = document.getElementById("Player2Score");

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");

var p1Global = 0;
var p2Global = 0;
var activePlayer = 0;

let images = ["images/dice1.svg",
"images/dice2.svg",
"images/dice3.svg",
"images/dice4.svg",
"images/dice5.svg",
"images/dice6.svg"];

newGame.addEventListener('click', () => {
    activePlayer = 0;
    dot1.style.backgroundColor = 'red';
    dot2.style.backgroundColor = 'white';
    p1Round.innerHTML = 0;
    p1Score.innerHTML = 0;
    p2Round.innerHTML = 0;
    p2Score.innerHTML = 0;
})

function Throw () {
let dice =(Math.floor(Math.random()*6)+1);
   document.querySelector(".dice").classList.add("shake");
   console.log(dice);
   
   setTimeout(function(){
    document.querySelector(".dice").classList.remove("shake"); 
    document.querySelector("#dieImg").setAttribute("src",images[dice-1]);
    if (dice == 1) {
        if (activePlayer == 0) {
            p1Round.innerHTML = 0;
            dot1.style.backgroundColor = 'white';
            dot2.style.backgroundColor = 'red';
            activePlayer = 1;
        }
        else {
            p2Round.innerHTML = 0;
            dot1.style.backgroundColor = 'red';
            dot2.style.backgroundColor = 'white';
            activePlayer = 0;
        }
       }
       else {
           if (activePlayer == 0) {
            p1Round.innerHTML = parseInt(p1Round.innerHTML,10) + dice;
            
           }
           else {
            p2Round.innerHTML = parseInt(p2Round.innerHTML,10) + dice;
    
           }
       } 
  },1000);
}

hold.addEventListener('click', () => {
        /*alert("C'est au tour du joueur "+(activePlayer+1)+"." );*/
        if (activePlayer == 0){
            if (p1Global >= 100){
                alert("Victoire du joueur 1");
            }
            else {
              p1Score.innerHTML = p1Global + parseInt(p1Round.innerHTML,10);
              p1Global = p1Global + parseInt(p1Round.innerHTML,10);
              p1Round.innerHTML = 0;
              activePlayer = 1;
              dot1.style.backgroundColor = 'white';
              dot2.style.backgroundColor = 'red';
              return;  
            }
        }
        else {
            if (p2Global >= 100){
                alert("Victoire du joueur 2");
            }
            else {
              p2Score.innerHTML = p2Global + parseInt(p2Round.innerHTML,10);
              p2Global = p2Global + parseInt(p2Round.innerHTML,10);
              p2Round.innerHTML = 0;
              activePlayer = 0;
              dot1.style.backgroundColor = 'red';
              dot2.style.backgroundColor = 'white';
              return;  
            }
        }

    });