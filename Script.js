class Card {
    constructor(type) {
        this.type = type;
        this.isFaceUp = false;
        this.matched = false;
        this.id;
    }
    turnFaceUp() {
        document.getElementById("slot" + this.id).querySelector("img").setAttribute("src",typeToImage[this.type])
    }

    turnFaceDown() {
        document.getElementById("slot" + this.id).querySelector("img").setAttribute("src",faceDown)
    }
};

let order = []

for (let i = 0; i < 16; i++) {
    faceSwap(i)
    ordercreate(i)
}
console.log(order)






let firstCardPick = null

let secondCardPick = null
// Pierwszy i drugi wybor kart przez gracza

let liczbaTur = 16

let paused = false

shuffle(order)

function setCardId() {
    for (let i = 0; i < order.length; i++) {
        order[i].id = i
        order[i].turnFaceDown()
    }
}
setCardId()




function shuffle(array) {
    let m = array.length;
    let t;
    let i;

    // While there remain elements to shuffle…
    while (m > 0) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m);
      m = m - 1;
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }


function ordercreate(i) {
    if (i < 8) {
        order.push(new Card(i))
    } else {
        order.push(new Card(i - 8))
    }
}


function faceSwap(i) {
    (document.getElementById("slot" + i).addEventListener("click", Swap))
    function Swap() {
        if (paused == false) {
            let selectedCard = order[i]
            if (selectedCard.matched == false && liczbaTur > 0) {
                selectedCard.isFaceUp = !selectedCard.isFaceUp
                console.log(selectedCard.isFaceUp)
                if (selectedCard.isFaceUp) {
                    selectedCard.turnFaceUp(i)
                    if (firstCardPick == null) {
                        firstCardPick = selectedCard
                        firstCardPick.matched = true
                    } else {
                        secondCardPick = selectedCard
                        secondCardPick.matched = true
                    }
                    compare()
                } else {
                    selectedCard.turnFaceDown(i)

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
                firstCardPick.isFaceUp = false
                secondCardPick.isFaceUp = false
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
