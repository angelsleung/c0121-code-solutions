// console.log('Lodash is loaded:', typeof _ !== 'undefined');

// // Creates a collection of 52 card objects
// var cards = [];
// var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
// var suits = ['diamonds', 'clubs', 'hearts', 'spades'];
// for (i = 0; i < 52; i++) {
//   var card = {};
//   card.rank = ranks[i % 13];
//   card.suit = suits[Math.floor(i / 13)];
//   cards.push(card);
// }

// function playGame(numPlayers, numCardsPerHand) {

//   // Creates a collection of player objects
//   var players = [];
//   for (var i = 0; i < numPlayers; i++) {
//     var player = {};
//     player.name = 'Player ' + (i + 1);
//     player.hand = [];
//     players.push(player);
//   }
//   var totalCards = numPlayers * numCardsPerHand;

//   // Creates an array of random (index) numbers between 0 and 51
//   var randomNums = [];
//   while (randomNums.length <= totalCards) {
//     var randomNum = Math.floor(Math.random() * 52);
//     if (!randomNums.includes(randomNum)) {
//       randomNums.push(randomNum);
//     }
//   }

//   // Selects cards based on random numbers and deals to players in a circle
//   for (i = 0; i < totalCards; i++) {
//     card = cards[randomNums[i]];
//     players[i % numPlayers].hand.push(card);
//   }

//   // Calculates each player's score and compares it to the high score
//   var highScore = 0;
//   var winners = [];
//   for (i = 0; i < numPlayers; i++) {
//     var score = 0;
//     // var name = player[i].name;
//     var hand = players[i].hand;
//     for (var j = 0; j < numCardsPerHand; j++) {
//       card = hand[j];
//       if (card.rank === 'Jack' || card.rank === 'Queen' || card.rank === 'King') {
//         score += 10;
//       } else if (card.rank === 'Ace') {
//         score += 11;
//       } else {
//         score += card.rank;
//       }
//       if (score >= highScore) {
//         highScore = score;
//         winners.push({ name: highScore });
//       }
//     }
//   }

//   // To determine the winner in the case of a tie
//   var newRandomNums = [];
//   while (newRandomNums.length <= winners.length) {
//     var newRandomNum = Math.floor(Math.random() * 52);
//     if (!newRandomNums.includes(newRandomNum)) {
//       newRandomNums.push(newRandomNum);
//     }
//   }
//   for (i = 0; i < winners.length; i++) {

//     // winner[i];
//     card = cards[newRandomNums[i]];
//     if (card.rank === 'Jack' || card.rank === 'Queen' || card.rank === 'King') {
//       score += 10;
//     } else if (card.rank === 'Ace') {
//       score += 11;
//     } else {
//       score += card.rank;
//     }
//     if (score >= highScore) {
//       highScore = score;
//       winners.push({ name: highScore });
//     }

//     winners[i % numPlayers].hand.push(card);

//   }

//   // var highScore = 0;
//   // var winners = [];
//   // for (i = 0; i < winners; i++) {
//   //   var score = 0;
//   //   var name = player[i].name;
//   //   var hand = players[i].hand;
//   //   card = hand[j];
//   // }

//   // console.log('The winner is', winner + '!');
// }

// playGame(4, 2);
