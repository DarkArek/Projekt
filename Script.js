
// Talia Kart
// W Tali wartosci karty po kolej to Typ karty , Czy jest odkryta(true) czy zakryta(false), Math.Random ktory odpowiada za losowanie kolejnosci kart, czy zostala juz dopasowana
let firstCardPick = {card: null, slotid: null}

let secondCardPick = {card: null, slotid: null}
// Pierwszy i drugi wybor kart przez gracza

let liczbaTur = 16

let paused = false

let order = [
    new Card(1),
    new Card(1),

    new Card(2),
    new Card(2),

    new Card(3),
    new Card(3),

    new Card(4),
    new Card(4),

    new Card(5),
    new Card(5),

    new Card(6),
    new Card(6),

    new Card(7),
    new Card(7),

    new Card(8),
    new Card(8)];
console.log(order)

order.sort(function(a, b) {
    return a.orderNumber - b.orderNumber
});
// Funkcja na ukladanie kolejnosci od zaleznie mathrandom.

function slotorder(orderId) {
   setImage(orderId,faceDown)
}



function faceSwap(id) {
    (document.getElementById("slot" + id).addEventListener("click", Swap))
    function Swap() {
        if (paused == false) {
            let selectedCard = order[id]
            if (selectedCard.matched == false && liczbaTur > 0) {
                selectedCard.isFaceUp = !selectedCard.isFaceUp
                console.log(selectedCard.isFaceUp)
                if (selectedCard.isFaceUp) {
                    setImage (id, typeToImage[order[id].type])
                    if (firstCardPick.card == null) {
                        firstCardPick.card = selectedCard
                        firstCardPick.slotid = id
                        firstCardPick.card.matched = true
                    } else {
                        secondCardPick.card = selectedCard
                        secondCardPick.slotid = id
                        secondCardPick.card.matched = true
                    }
                    compare()
                } else {
                    setImage (id, faceDown)

                }
            }
        }
    }
}
// Funkcja odpowiadająca za wybor karty / przypisanie ich do pierwszego i drugiego wyboru gracza i ich porownania
function setImage (id, src) {
    document.getElementById("slot" + id).querySelector("img").setAttribute("src",src)
}

for (let i = 0; i < 16; i++) {
    let id = (i)
    faceSwap(id)
    slotorder(i)
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
