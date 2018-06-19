// Code Starts Here

//Declaration Of Cards
let suits=['Hearts','Spades','Clubs','Daimonds'];
let values=['Ace','Queen','Jack','king','Ten','Nine','Eight',
            'Seven','Six','Five','Four','Three','Two'];

//DOM Variables            
let textArea=document.getElementById("text-area");
let newGameButton=document.getElementById('new-game-button');
let hitButton=document.getElementById('hit-button');
let stayButton=document.getElementById('stay-button');
            
hitButton.style.display='none';
stayButton.style.display='none';
showStatus();

//Game Variables
let gameStarted=false,
    gameOver=false;
    playerWon=false;
    playerCards=[];
    dealerCards=[];
    playerScore=0;
    dealerScore=0;
    deck=[];

//New game button Event
newGameButton.addEventListener('click',function(){
  
  gameStarted=true;
  gameOver=false;
  playerWon=false;
  
  deck=createDeck();
  shuffleDeck();
  playerCards=[getNextCard(),getNextCard()];
  dealerCards=[getNextCard(),getNextCard()];
  
  newGameButton.style.display='none';
  hitButton.style.display='inline';
  stayButton.style.display='inline';
  showStatus();
  
});

//Shuffle the deck of cards
function shuffleDeck(){
  for(let i=0;i<deck.length;i++ ){
    swapIdx=Math.trunc( Math.random() * deck.length);
    let temp =deck[swapIdx];
    deck[swapIdx]=deck[i];
    deck[i]=temp;
  }
}

function showStatus(){
 if(gameStarted===true){
   textArea.innerText="Welcome to BlackJack Game......";
 }
 
 for(let deckIdx=0;deckIdx<deck.length;deckIdx++)
 {
   textArea.innerText+="\n "+ getCardString(deck[deckIdx]);
 }

  textArea.innerText+="\n Number of Cards Now="+deck.length;
}


            
//Creating Deck of Cards
function createDeck(){
  let deck=[];
for(let suitsIdx=0;suitsIdx<suits.length;suitsIdx++)
{
  for(let valuesIdx=0;valuesIdx<values.length;valuesIdx++)
  {
    let card={
      suit:suits[suitsIdx],
      value:values[valuesIdx]
      };
      
    deck.push(card);
  }
}
return deck;
}

//making Card String
function getCardString(card)
{
  return card.value+ ' of '+ card.suit;
}

//Getting the cards from Deck from front Sides
function getNextCard(){
  return deck.shift();
}


//Players getting cards from Top of Deck
let players=[getNextCard(),getNextCard()];

function printDeckCards() {
for(let i=0;i<deck.length;i++)
{
  console.log(deck[i]);
}
}

