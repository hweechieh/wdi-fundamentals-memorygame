console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
]

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
  	alert("You found a match!");
	} else {
  	alert("Sorry, try again.");
}

}
function flipCard(cardId) {
	checkForMatch();
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[0].cardImage);
	console.log(cards[0].suit);
}


// Important note: not call the function within the function itself.
flipCard(1);
flipCard(2);

