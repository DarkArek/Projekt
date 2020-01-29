class Card {
    constructor(type) {
        this.type = type;
        this.isFaceUp = false;
        this.matched = false;
    }
};

let order = []

for (let i = 0; i < 16; i++) {
    faceSwap(i)
    slotorder(i)
    ordercreate(i)
}
console.log(order)



let firstCardPick = {card: null, slotid: null}

let secondCardPick = {card: null, slotid: null}
// Pierwszy i drugi wybor kart przez gracza

let liczbaTur = 16

let paused = false

shuffle(order)

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

function slotorder(orderId) {
   setImage(orderId,faceDown)
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
                    setImage (i, typeToImage[order[i].type])
                    if (firstCardPick.card == null) {
                        firstCardPick.card = selectedCard
                        firstCardPick.slotid = i
                        firstCardPick.card.matched = true
                    } else {
                        secondCardPick.card = selectedCard
                        secondCardPick.slotid = i
                        secondCardPick.card.matched = true
                    }
                    compare()
                } else {
                    setImage (i, faceDown)

                }
            }
        }
    }
}
// Funkcja odpowiadająca za wybor karty / przypisanie ich do pierwszego i drugiego wyboru gracza i ich porownania
function setImage (id, src) {
    document.getElementById("slot" + id).querySelector("img").setAttribute("src",src)
}


function compare() {
    if (firstCardPick.card !== null && secondCardPick.card !== null) {
        if (firstCardPick.card.type == secondCardPick.card.type) {
            console.log("works")
            firstCardPick.card = null
            secondCardPick.card = null
            liczbaTur--
            console.log(liczbaTur)
        } else {

            let a = function () {
                firstCardPick.card.isFaceUp = false
                secondCardPick.card.isFaceUp = false
                firstCardPick.card.matched = false
                secondCardPick.card.matched = false
                setImage(firstCardPick.slotid,faceDown)
                setImage(secondCardPick.slotid,faceDown)
                firstCardPick.card = null
                secondCardPick.card = null
                paused = false
                liczbaTur--
            console.log(liczbaTur)
            }
            paused = true
            setTimeout(a, 3000)
        }
    }

}
//Funkcja odpowiedzialna za porownanie wyborow gracza
