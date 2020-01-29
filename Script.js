let order = shuffle([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]).map(function(type,index){
    return new Card(type,index)
})

for (let i = 0; i < 16; i++) {
    faceSwap(i)
}

let firstCardPick = null

let secondCardPick = null

let turnCounter = 16

let paused = false

function faceSwap(i) {
    (document.getElementById("slot" + i).addEventListener("click", Swap))
    function Swap() {
        if (paused == false) {
            let selectedCard = order[i]
            if (selectedCard.matched == false && turnCounter > 0) {
                selectedCard.turnFaceUp()
                if (selectedCard.isFaceUp) {
                    if (firstCardPick == null) {
                        firstCardPick = selectedCard
                        firstCardPick.matched = true
                    } else {
                        secondCardPick = selectedCard
                        secondCardPick.matched = true
                    }
                    compare()
                } else {
                    selectedCard.turnFaceDown()

                }
            }
        }
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
                firstCardPick.matched = false
                secondCardPick.matched = false
                firstCardPick.turnFaceDown()
                secondCardPick.turnFaceDown()
                firstCardPick = null
                secondCardPick = null
                paused = false
                turnCounter--
                updateTurnDisplay()
            }
            paused = true
            setTimeout(clearSelectedCards, 3000)
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
