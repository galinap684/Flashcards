const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');


class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
   let cards = prototypeQuestions.map(ele => {
      let card = new Card(ele.id, ele.question, ele.answers, ele.correctAnswer)
      return card
    });
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards!
    You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    console.log(util.main(round));
  }

}

module.exports = Game;
