let time = 0;
    let time_fmt = "0:00";

    function timer() {
        document.querySelector("#timer").innerHTML = time_fmt;
        time++  
        if (time < 60 && time < 10) {
            time_fmt = "0:0" + time;
        } else if (time < 60 && time >= 10) {
            time_fmt = "0:" + time;
        } else {
            let seconds = time/60;
            let minutes = Math.floor(seconds);
            let leftover = time - (minutes * 60);
            if (leftover < 60 && leftover < 10) {
                time_fmt = minutes + ":0" + leftover;
            } 
            else if (leftover < 60 && leftover >= 10) {
                time_fmt = minutes + ":" + leftover;
            }
        }
        console.log(time_fmt);
    }
    
let start_game = 0;
function startGame() {
    start_game = 1;
    setInterval(() => timer(), 1000);
    }


{
    let cards_i = 1;
    let cards = 10;
    let faceUp = 0;
    let previousCard = 6;
    let matchCounter = 0;
    let matches = 1;
    let notMatchCounter = 0;

    function changeBG(id) {
        let divId = id.id;
        let divClass = id.className;
        let divContent = id.innerHTML;
        console.log(notMatchCounter);
        if (start_game == 1) {
            if (divClass != "cardClicked") { //if card is clicked
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
                        if (matches != cards/2) { // if last match
                            document.querySelector(".cardClicked").className = "cardMatchPending";
                            document.querySelector("#" + divId).className = "cardMatchPending";
                        } else {
                            document.querySelector(".cardClicked").className = "cardMatch";
                            document.querySelector("#" + divId).className = "cardMatch";  
                            console.log("YOU WIN");  
                        }
                        console.log(matches);
                        matchCounter++
                        matches++
                    } else if (previousCard != 6) {
                        console.log("Not a Match");
                        document.querySelector(".cardClicked").className = "cardNotMatchPending";
                        document.querySelector("#" + divId).className = "cardNotMatchPending";
                        notMatchCounter++
                    }  
                    faceUp = 0;
                    previousCard = 6; 
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

    let card_val = [];
    let init_i = 1;

    while (init_i < 3) {
        for (let i = 0; i < cards/2; i++) {
            card_val.push(i + 1);
        }
        init_i++
    }

    shuffleArray(card_val);

    while (cards_i <= cards) {
        document.querySelector("#card" + cards_i).innerHTML = card_val[cards_i - 1];
        cards_i++
    }  
}


