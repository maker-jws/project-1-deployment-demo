// variables
let game;

// elements

const gameBoardEl = document.querySelector("#gameboard");
const gameBtnEl = document.querySelector("#game-button");

// console.log(gameBoardEl, gameBtnEl);

// listeners

// functions

function init() {
  startGame();
}

function updateBtn(text) {
  gameBtnEl.textContent = text;
}

function updateHandler(currHandler = (f) => f, newHandler = (f) => f) {
  gameBtnEl.removeEventListener("click", currHandler);
  gameBtnEl.addEventListener("click", newHandler);
}

// notes

init();

function startGame() {
  game = new WarGame();
  const gameDeck = new Deck();
  gameDeck.createDeck();
  gameDeck.shuffleDeck();
  const { deck } = gameDeck;
  game.splitDeck(deck);
}
