let Talia = {
    Karta1: [1,0,Math.random(0,1)],
    Karta2: [1,0,Math.random(0,1)],

    Karta3: [2,0,Math.random(0,1)],
    Karta4: [2,0,Math.random(0,1)],

    Karta5: [3,0,Math.random(0,1)],
    Karta6: [3,0,Math.random(0,1)],

    Karta7: [4,0,Math.random(0,1)],
    Karta8: [4,0,Math.random(0,1)],

    Karta9: [5,0,Math.random(0,1)],
    Karta10: [5,0,Math.random(0,1)],

    Karta11: [6,0,Math.random(0,1)],
    Karta12: [6,0,Math.random(0,1)],

    Karta13: [7,0,Math.random(0,1)],
    Karta14: [7,0,Math.random(0,1)],
    
    Karta15: [8,0,Math.random(0,1)],
    Karta16: [8,0,Math.random(0,1)],
}
// W Tali wartosci karty po kolej to Typ karty , Czy jest odkryta(1) czy zakryta(0), Math.Random ktory odpowiada za losowanie kolejnosci kart
document.getElementById("karta1").innerHTML = Talia.Karta1[1]