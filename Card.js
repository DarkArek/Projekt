class Card {
    constructor(type,index) {
        this.type = type;
        this.isFaceUp = false;
        this.matched = false;
        this.id = index
        this.turnFaceUp()
    }
    turnFaceUp() {
        document.getElementById("slot" + this.id).querySelector("img").setAttribute("src",typeToImage[this.type])
        this.isFaceUp = true
    }

    turnFaceDown() {
        document.getElementById("slot" + this.id).querySelector("img").setAttribute("src",faceDown)
        this.isFaceUp = false
    }
};
