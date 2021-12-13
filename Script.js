const newGame = document.getElementById("NewGame");
const throwDice = document.getElementById("ThrowDice");
const hold = document.getElementById("Hold");

var p1Round = document.getElementById("Player1Round");
var p2Round = document.getElementById("Player2Round");
var p1Score = document.getElementById("Player1Score");
var p2Score = document.getElementById("Player2Score");

var p1Global = 0;
var p2Global = 0;
var activePlayer = 0;

throwDice.addEventListener('click', () => {
   let dice =(Math.floor(Math.random()*6)+1);
   console.log(dice);
   if (dice == 1) {
    if (activePlayer == 0) {
        p1Round.innerHTML = 0;
        activePlayer = 1;
    }
    else {
        p2Round.innerHTML = 0;
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
})

hold.addEventListener('click', () => {
        alert("C'est au tour du joueur "+(activePlayer+1)+"." );
        if (activePlayer == 0){
            p1Score.innerHTML = p1Global + parseInt(p1Round.innerHTML,10);
            p1Global = p1Global + parseInt(p1Round.innerHTML,10);
            p1Round.innerHTML = 0;
            activePlayer = 1;
            return;
        }
        else {
            p2Score.innerHTML = p2Global + parseInt(p2Round.innerHTML,10);
            p2Global = p2Global + parseInt(p2Round.innerHTML,10);
            p2Round.innerHTML = 0;
            activePlayer = 0;
            return;
        }

    });