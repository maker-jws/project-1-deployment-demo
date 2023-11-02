// notes

// classes
class Card {
  constructor(suit, value, face) {
    this._suit = suit;
    this._value = value;
    this._face = face;
  }
  get face() {
    return this.face;
  }
  set value(num) {
    return (this._value = num);
  }
  get value() {
    return this._value;
  }
  get suit() {
    return this._suit;
  }
}

class Deck {
  static suits = ["❤️", "♦️", "♣", "♠️"];
  static values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
  static faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  constructor() {
    this.deck = [];
  }

  createDeck() {
    Deck.suits.forEach((suit) => {
      Deck.values.forEach((val, idx) => {
        let face = Deck.faces[idx];
        this.deck.push(new Card(suit, val, face));
      });
    });
  }
  shuffleDeck() {
    // algo source - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = this.deck.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.deck[currentIndex], this.deck[randomIndex]] = [
        this.deck[randomIndex],
        this.deck[currentIndex],
      ];
    }
    return this.deck;
  }
}

class WarGame {
  constructor() {
    this.p1Hand = [];
    this.p2Hand = [];

    this.p1WarHand = [];
    this.p2WarHand = [];
  }

  compareCards(p1, p2) {
    console.log(p1, p2);

    return { winner: null, cards: [p1, p2] };
  }

  gameTurn() {
    let p1Card = this.p1Hand.pop();
    let p2Card = this.p2Hand.pop();
    let { winner, cards } = this.compareCards(p1Card, p2Card);
    // if winner = 'war'
    // else if winner = p1
    // else if winner = p2
    console.log(winner, cards);
  }

  splitDeck(deck) {
    let num = 0;
    while (deck.length) {
      if (num == 1) {
        this.p2Hand.push(deck.shift());
        num = 0;
      } else {
        this.p1Hand.push(deck.shift());
        num++;
      }
    }
  }

  warTurn() {
    console.log("war");
  }

  addToHand(player, cards) {}
}
