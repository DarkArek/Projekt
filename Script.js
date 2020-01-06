let Talia = {
    karta1: [type: 1, isFaceUp: false,orderNumber: Math.random(0,1)],
    karta2: [type: 1, isFaceUp: false,orderNumber: Math.random(0,1)],

    karta3: [type: 2, isFaceUp: false,orderNumber: Math.random(0,1)],
    karta4: [type: 2, isFaceUp: false,orderNumber: Math.random(0,1)],

    karta5: [type: 3, isFaceUp: false,orderNumber: Math.random(0,1)],
    karta6: [type: 3, isFaceUp: false,orderNumber: Math.random(0,1)],

    karta7: [type: 4, isFaceUp: false,orderNumber: Math.random(0,1)],
    karta8: [type: 4, isFaceUp: false,orderNumber: Math.random(0,1)],

    karta9: [type: 5, isFaceUp: false,orderNumber: Math.random(0,1)],
    karta10: [type: 5, isFaceUp: false,orderNumber: Math.random(0,1)],

    karta11: [type: 6, isFaceUp: false,orderNumber: Math.random(0,1)],
    karta12: [type: 6, isFaceUp: false,orderNumber: Math.random(0,1)],

    karta13: [type: 7, isFaceUp: false,orderNumber: Math.random(0,1)],
    karta14: [type: 7, isFaceUp: false,orderNumber: Math.random(0,1)],
    
    karta15: [type: 8, isFaceUp: false,orderNumber: Math.random(0,1)],
    karta16: [type: 8, isFaceUp: false,orderNumber: Math.random(0,1)],
}
// W Tali wartosci karty po kolej to Typ karty , Czy jest odkryta(1) czy zakryta(0), Math.Random ktory odpowiada za losowanie kolejnosci kart
document.getElementById("karta1").innerHTML = Talia.Karta1[orderNumber]