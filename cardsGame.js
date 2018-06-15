// Code Starts Here

//Declaration Of Cards
let suits=['Hearts','Spades','Clubs','Daimonds'];
let values=['Ace','Queen','Jack','king','Ten','Nine','Eight',
            'Seven','Six','Five','Four','Three','Two'];
            
//Creating Deck of Cards
function createDeck(){
  let deck=[];
for(let suitsIdx=0;suitsIdx<suits.length;suitsIdx++)
{
  for(let valuesIdx=0;valuesIdx<values.length;valuesIdx++)
  {
    deck.push(values[valuesIdx]+' of '+suits[suitsIdx]);
  }
}
return deck;
}

//Getting the cards from Deck from front Sides
function getNextCard(){
  return deck.shift();
}

//Calling createDeck
let deck=createDeck();

//Players getting cards from Top of Deck
let players=[getNextCard(),getNextCard()];

function printDeckCards() {
for(let i=0;i<deck.length;i++)
{
  console.log(deck[i]);
}
}
