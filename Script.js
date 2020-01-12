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
let typeToImage = {
    1:  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/40px-Playing_card_club_A.svg.png",
    2:  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/40px-Playing_card_spade_A.svg.png",
    3:  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/40px-Playing_card_heart_A.svg.png",
    4:  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/40px-Playing_card_diamond_A.svg.png",
    5:  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Playing_card_club_J.svg/40px-Playing_card_club_J.svg.png",
    6:  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Playing_card_diamond_Q.svg/40px-Playing_card_diamond_Q.svg.png",
    7:  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Playing_card_heart_K.svg/40px-Playing_card_heart_K.svg.png",
    8:  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/40px-Playing_card_spade_K.svg.png",
};
// W Tali wartosci karty po kolej to Typ karty , Czy jest odkryta(1) czy zakryta(0), Math.Random ktory odpowiada za losowanie kolejnosci kart


let order = [Talia.karta1,  Talia.karta2,  Talia.karta3,
             Talia.karta4,  Talia.karta5,  Talia.karta6,
             Talia.karta7,  Talia.karta8,  Talia.karta9,
             Talia.karta10, Talia.karta11, Talia.karta12,
             Talia.karta13, Talia.karta14, Talia.karta15,
             Talia.karta16
            ];


order.sort(function(a, b) {
    return a.orderNumber - b.orderNumber
});
// Funkcja na ukladanie kolejnosci od zaleznie mathrandom.




document.getElementById("slot1").querySelector("img").setAttribute("src",typeToImage[order[0].type]);

document.getElementById("slot2").querySelector("img").setAttribute("src",typeToImage[order[1].type]);

document.getElementById("slot3").querySelector("img").setAttribute("src",typeToImage[order[2].type]);

document.getElementById("slot4").querySelector("img").setAttribute("src",typeToImage[order[3].type]);

document.getElementById("slot5").querySelector("img").setAttribute("src",typeToImage[order[4].type]);

document.getElementById("slot6").querySelector("img").setAttribute("src",typeToImage[order[5].type]);

document.getElementById("slot7").querySelector("img").setAttribute("src",typeToImage[order[6].type]);

document.getElementById("slot8").querySelector("img").setAttribute("src",typeToImage[order[7].type]);

document.getElementById("slot9").querySelector("img").setAttribute("src",typeToImage[order[8].type]);

document.getElementById("slot10").querySelector("img").setAttribute("src",typeToImage[order[9].type]);

document.getElementById("slot11").querySelector("img").setAttribute("src",typeToImage[order[10].type]);

document.getElementById("slot12").querySelector("img").setAttribute("src",typeToImage[order[11].type]);

document.getElementById("slot13").querySelector("img").setAttribute("src",typeToImage[order[12].type]);

document.getElementById("slot14").querySelector("img").setAttribute("src",typeToImage[order[13].type]);

document.getElementById("slot15").querySelector("img").setAttribute("src",typeToImage[order[14].type]);

document.getElementById("slot16").querySelector("img").setAttribute("src",typeToImage[order[15].type]);
