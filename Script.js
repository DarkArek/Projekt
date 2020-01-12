let Talia = {
    karta1: {type: 1, isFaceUp: false, orderNumber: Math.random()},
    karta2: {type: 1, isFaceUp: false, orderNumber: Math.random()},

    karta3: {type: 2, isFaceUp: false, orderNumber: Math.random()},
    karta4: {type: 2, isFaceUp: false, orderNumber: Math.random()},

    karta5: {type: 3, isFaceUp: false, orderNumber: Math.random()},
    karta6: {type: 3, isFaceUp: false, orderNumber: Math.random()},

    karta7: {type: 4, isFaceUp: false, orderNumber: Math.random()},
    karta8: {type: 4, isFaceUp: false, orderNumber: Math.random()},

    karta9: {type: 5, isFaceUp: false, orderNumber: Math.random()},
    karta10: {type: 5, isFaceUp: false, orderNumber: Math.random()},

    karta11: {type: 6, isFaceUp: false, orderNumber: Math.random()},
    karta12: {type: 6, isFaceUp: false, orderNumber: Math.random()},

    karta13: {type: 7, isFaceUp: false, orderNumber: Math.random()},
    karta14: {type: 7, isFaceUp: false, orderNumber: Math.random()},
    
    karta15: {type: 8, isFaceUp: false, orderNumber: Math.random()},
    karta16: {type: 8, isFaceUp: false, orderNumber: Math.random()},
}
// W Tali wartosci karty po kolej to Typ karty , Czy jest odkryta(1) czy zakryta(0), Math.Random ktory odpowiada za losowanie kolejnosci kart


let order =  [Talia.karta1,Talia.karta2,Talia.karta3,
            Talia.karta4,Talia.karta5,Talia.karta6,
            Talia.karta7,Talia.karta8,Talia.karta9,
            Talia.karta10,Talia.karta11,Talia.karta12,
            Talia.karta13,Talia.karta14,Talia.karta15,
            Talia.karta16];
order.sort(function(a.orderNumber, b.orderNumber){return a.orderNumber - b.orderNumber});
// Funkcja na ukladanie kolejnosci od mathrandom. Musialem poszukac tego w internecie bo niebylem wstanie wymyslec jak to zrobic. Te funkcje nadal mam problem
//  w pelni zrozumiec ale przynajmniej wiem oco w niej chodzi.


// Musze zrobic zeby w zaleznosci od mathrandom maja mi sie ukladac typy kart





document.getElementById("slot1").innerHTML = order[0];
document.getElementById("slot2").innerHTML = order[1];
document.getElementById("slot3").innerHTML = order[2];
document.getElementById("slot4").innerHTML = order[3];
document.getElementById("slot5").innerHTML = order[4];
document.getElementById("slot6").innerHTML = order[5];
document.getElementById("slot7").innerHTML = order[6];
document.getElementById("slot8").innerHTML = order[7];
document.getElementById("slot9").innerHTML = order[8];
document.getElementById("slot10").innerHTML = order[9];
document.getElementById("slot11").innerHTML = order[10];
document.getElementById("slot12").innerHTML = order[11];
document.getElementById("slot13").innerHTML = order[12];
document.getElementById("slot14").innerHTML = order[13];
document.getElementById("slot15").innerHTML = order[14];
document.getElementById("slot16").innerHTML = order[15];
// Zmienilem nazwy z karta1,2,3... na slot1,2,3 zeby nie mieszaly mi sie bo slot ma byc miejscem dla karty a nie sama karta.