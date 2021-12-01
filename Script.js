const newGame = document.getElementById("NewGame");
const throwDice = document.getElementById("ThrowDice");
const hold = document.getElementById("Hold");

const p1Score = document.getElementById("Player1Score");
const p2Score = document.getElementById("Player2Score");

let p1Round = 0;
let p2Round = 0;
let p1Global = 0;
let p2Global = 0;
let activePlayer = 0;

throwDice.addEventListener('click', () => {
   let dice =(Math.floor(Math.random()*6)+1);
   if (dice == 1) {
    if (activePlayer == 0) {
        p1Round = 0;
        activePlayer = 1;
    }
   }
   else {
        p2Round = 0;
        activePlayer = 0;
   }
})

hold.addEventListener('click', () => {
        alert('Vous avez cliqué sur Hold.');
        if (activePlayer == 0){
            p1Score.innerHTML = p1Global + p1Round;
            p1Global = p1Global + p1Round;
            activePlayer = 1;
            return;
        }
        else {
            p2Score.innerHTML = p2Global + p2Round;
            p2Global = p2Global + p2Round;
            activePlayer = 0;
            return;
        }

    });