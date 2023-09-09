let start_game = 0;

function startGame() {
    start_game = 1;
    setInterval(() => timer(), 1000);
}


let cards = 1;
let card_tot = 50;
let faceUp = 0;
let previousCard = card_tot/2 + 1;
let matchCounter = 0;
let notMatchCounter = 0;
let matches = 1;

function changeBG(id) {
    let divId = id.id;
    let divClass = id.className;
    let divContent = id.innerHTML;
    console.log(notMatchCounter);
    if (start_game == 1) {
        if (divClass != "cardClicked") {
            if (faceUp < 1) { //if no card is face up
                if (matchCounter == 1) {
                    for (let i = 0; i < 2; i++) {
                        document.querySelector(".cardMatchPending").className = "cardMatch";
                    }
                    matchCounter = 0;
                }
                if (notMatchCounter == 1) {
                    for (let i = 0; i < 2; i++) {
                        document.querySelector(".cardNotMatchPending").className = "card";
                    }
                    notMatchCounter = 0;
                }
                if (divClass == "card") { //if card is face down
                    document.querySelector("#" + divId).className = "cardClicked";
                    console.log("Current: " + divContent);
                    console.log("Previous: " + previousCard);
                    previousCard = divContent;
                    faceUp++
                }
            } else { //if 1 card is already face up
                if(divContent == previousCard) { //if match
                    console.log("match");
                    if (matches != card_tot/2) {
                        document.querySelector(".cardClicked").className = "cardMatchPending";
                        document.querySelector("#" + divId).className = "cardMatchPending";
                    } else {
                        document.querySelector(".cardClicked").className = "cardMatch";
                        document.querySelector("#" + divId).className = "cardMatch";
                        endGame()
                    }
                    matchCounter++
                    matches++
                } else if (previousCard != card_tot/2 + 1) {
                    console.log("Not a Match");
                    document.querySelector(".cardClicked").className = "cardNotMatchPending";
                    document.querySelector("#" + divId).className = "cardNotMatchPending";
                    notMatchCounter++
                }  
                faceUp = 0;
                previousCard = card_tot/2 + 1; 
            }
            console.log("Face Up: " + faceUp);
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
let card_val = []
let init_i = 0

while (init_i < 2) {
    for (let i = 1; i <= card_tot/2; i++) {
        card_val.push(i);
    } 
    init_i++
}

shuffleArray(card_val);

while (cards <= card_tot) {
    document.querySelector("#card" + cards).innerHTML = card_val[cards - 1];
    cards++
}  

let time = 0;
let time_fmt;

function timer() {
    time++
    let minutes = Math.floor(time/60);
    let seconds = time -(minutes * 60);

    if (time < 60 && time < 10) {
        time_fmt = "0:0" + time;
    } else if (time < 60 && time > 10) {
        time_fmt = "0:" + time;
    } else {
        if (seconds < 10) {
            time_fmt = minutes + ":0" + seconds;
        } else {
            time_fmt = minutes + ":" + seconds;
        }
    }
    if (end_game != 1) {
        document.querySelector("#timer").innerHTML = time_fmt;
    }
}
let end_game = 0;
function endGame() {
    end_game = 1;
}