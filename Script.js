let order = shuffle([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]).map(function(type,index){
    return new Card(type,index)
})

for (let i = 0; i < 16; i++) {
    faceSwap(i)
}
console.log(order)

let firstCardPick = null

let secondCardPick = null
// Pierwszy i drugi wybor kart przez gracza

let liczbaTur = 16

let paused = false

function faceSwap(i) {
    (document.getElementById("slot" + i).addEventListener("click", Swap))
    function Swap() {
        if (paused == false) {
            let selectedCard = order[i]
            if (selectedCard.matched == false && liczbaTur > 0) {
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
// Funkcja odpowiadająca za wybor karty / przypisanie ich do pierwszego i drugiego wyboru gracza i ich porownania
/*function setImage (id, src) {
    document.getElementById("slot" + id).querySelector("img").setAttribute("src",src)
}*/


function compare() {
    if (firstCardPick !== null && secondCardPick !== null) {
        if (firstCardPick.type == secondCardPick.type) {
            console.log("works")
            firstCardPick = null
            secondCardPick = null
            liczbaTur--
            console.log(liczbaTur)
        } else {

            let clearSelectedCards = function () {
                firstCardPick.matched = false
                secondCardPick.matched = false
                firstCardPick.turnFaceDown()
                secondCardPick.turnFaceDown()
                firstCardPick = null
                secondCardPick = null
                paused = false
                liczbaTur--
            console.log(liczbaTur)
            }
            paused = true
            setTimeout(clearSelectedCards, 3000)
        }
    }

}
//Funkcja odpowiedzialna za porownanie wyborow gracza
