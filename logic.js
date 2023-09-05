let cards = 1;
let faceUp = 0;
let previousCard = 4;
let matchCounter = 0;
let notMatchCounter = 0;

function changeBG(id) {
    let divId = id.id;
    let divClass = id.className;
    let divContent = id.innerHTML;
    console.log(notMatchCounter);
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
                document.querySelector(".cardClicked").className = "cardMatchPending";
                document.querySelector("#" + divId).className = "cardMatchPending";
                matchCounter++
            } else if (previousCard != 4) {
                console.log("Not a Match");
                document.querySelector(".cardClicked").className = "cardNotMatchPending";
                document.querySelector("#" + divId).className = "cardNotMatchPending";
                notMatchCounter++
            }  
            faceUp = 0;
            previousCard = 4; 
        }
        console.log("Face Up: " + faceUp);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

let card_val = [1, 2, 3, 1, 2, 3];
shuffleArray(card_val);

while (cards <= 6) {
    document.querySelector("#card" + cards).innerHTML = card_val[cards - 1];
    cards++
}  