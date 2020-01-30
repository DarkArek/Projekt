let order = shuffle([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]).map((type,index) => new Card(type, index));

for (let i = 0; i < 16; i++) {
    faceSwap(i)
}

let firstCardPick = null

let secondCardPick = null

let turnCounter = 20

let paused = false

function faceSwap(i) {
    (document.getElementById("slot" + i).addEventListener("click", Swap))
    function Swap() {
        let selectedCard = order[i]
        if (paused == true || selectedCard.isFaceUp == true || turnCounter == 0) {
            return;
        }
        selectedCard.turnFaceUp()
        if (firstCardPick == null) {
            firstCardPick = selectedCard
        } else {
            secondCardPick = selectedCard
        }
        compare()
    }
}


function compare() {
    if (firstCardPick !== null && secondCardPick !== null) {
        if (firstCardPick.type == secondCardPick.type) {
            firstCardPick = null
            secondCardPick = null
            turnCounter--
            updateTurnDisplay()
        } else {

            let clearSelectedCards = function () {
                firstCardPick.turnFaceDown()
                secondCardPick.turnFaceDown()
                firstCardPick = null
                secondCardPick = null
                paused = false
                turnCounter--
                updateTurnDisplay()
            }
            paused = true
            setTimeout(clearSelectedCards, 1500)
        }
    }

}

function startUp() {
    paused = true
    setTimeout(function() {
        paused = false
        for (i = 0; i < order.length; i++) {
            order[i].turnFaceDown()
        }
    }, 5000)
}
startUp()

let turnDisplay = document.getElementById("turn")
function updateTurnDisplay() {
    turnDisplay.textContent = turnCounter
}
updateTurnDisplay()
