class Card {
  constructor(type) {
    this.type = type;
    this.isFaceUp = false;
    this.orderNumber = Math.random();
    this.matched = false;
  }
}