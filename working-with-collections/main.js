/* eslint-disable no-prototype-builtins */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

function createCards() {
  var cards = [];
  var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var suits = ['diamonds', 'clubs', 'hearts', 'spades'];
  for (var i = 0; i < 52; i++) {
    var card = {};
    card.rank = ranks[i % 13];
    card.suit = suits[Math.floor(i / 13)];
    cards.push(card);
  }
  return cards;
}

function createPlayers(numPlayers) {
  var players = [];
  for (var i = 0; i < numPlayers; i++) {
    var player = {};
    player.name = 'Player ' + (i + 1);
    player.hand = [];
    players.push(player);
  }
  return players;
}

function shuffle(totalCards) {
  var cardIndexes = [];
  while (cardIndexes.length <= totalCards) {
    var cardIndex = Math.floor(Math.random() * 52);
    if (!cardIndexes.includes(cardIndex)) {
      cardIndexes.push(cardIndex);
    }
  }
  return cardIndexes;
}

function deal(players, totalCards, cardIndexes) {
  for (var i = 0; i < totalCards; i++) {
    var card = cards[cardIndexes[i]];
    players[i % players.length].hand.push(card);
  }
  return players;
}

function score(players) {
  var winners = [];
  for (var i = 0; i < players.length; i++) {
    var score = 0;
    var hand = players[i].hand;
    for (var j = 0; j < hand.length; j++) {
      var card = hand[j];
      if (card.rank === 'Jack' || card.rank === 'Queen' || card.rank === 'King') {
        score += 10;
      } else if (card.rank === 'Ace') {
        score += 11;
      } else {
        score += card.rank;
      }
    }
    var highScore = 0;
    var name = players[i].name;
    if (score > highScore) {
      winners = [name];
      highScore = score;
    } else if (score === highScore) {
      winners.push(name);
    }
  }
  return winners;
}

function playGame(players, numCardsPerHand) {
  var totalCards = players.length * numCardsPerHand;
  var cardIndexes = shuffle(totalCards);
  players = deal(players, totalCards, cardIndexes);
  var winners = score(players);
  if (winners.length > 1) {
    playGame(winners.length, 1);
  }
  console.log('winners:', winners);
  var winnerName = winners[0];
  console.log('The winner is', winnerName + '!');
  console.log('Players:', players);
}

// function handleTie(totalCards) {
//   while (winners.length > 1) {
//     console.log('Tie - deal another card as tie-breaker');
//     var tiePlayers = [];
//     for (var i = 0; i < players.length; i++) {
//       if (winners.includes(players[i].name)) {
//         tiePlayers.push(players[i]);
//       }
//     }
//     players = tiePlayers;
//     var dealStartIndex = totalCards;
//     totalCards += winners.length;
//     shuffle(totalCards);
//     deal(totalCards, dealStartIndex);
//     winners = [];
//     score();
//   }
// }

var cards = createCards();
var players = createPlayers(4);
playGame(players, 2);
