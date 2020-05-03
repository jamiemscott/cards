// Card Suits
var suits = ["spades", "clubs", "hearts", "diamonds"];
//Card Values
var cardValues = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King" ];

// Create the deck of cards
function createDeck() { // think about how this might be written in ES6
  
  var deck = new Array();
  
  // Loops through the suits
  for (var i = 0; i < suits.length; i++) {
    
    // Loops through the card values
    for (var x = 0; x < cardValues.length; x++) {
      var cards = {
        suit: suits[i],
        value: cardValues[x]
      }
      deck.push(cards);
            
    }
    
  }
  
  console.log(deck);
    
} //createDeck

createDeck();