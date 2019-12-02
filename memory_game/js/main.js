console.log("Up and running!");

//array of cards
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

//declaration of cards in play in its own array
var cardsInPlay = [];

//Code has been shortened and optimized by line 15 - 20.
/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[4];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo);*/

// check the two cards that are in play
function checkForMatch() {
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
	} else {
  	alert("Sorry, try again.");
}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	checkForMatch();
	//console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].cardImage);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
}

// Important note: not call the function within the function declaration.
//flipCard(1);
//flipCard(2);

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener("click", flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();
