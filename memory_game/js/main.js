console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
//var cardId = cards.index;

//Code has been shortened and optimized by line 15 - 20.
/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[4];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo);*/

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
	} else {
  	console.log("Sorry, try again.");
}

}
function flipCard(cardId) {
	checkForMatch();
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
}

// Important note: not call the function within the function itself.
flipCard(1);
flipCard(2);