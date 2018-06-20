// Code Starts Here

//Declaration Of Cards
let suits=['Hearts','Spades','Clubs','Daimonds'];
let values=['Ace','Queen','Jack','king','Ten','Nine','Eight',
            'Seven','Six','Five','Four','Three','Two'];
            
//Game Variables
let gameStarted=false,
    gameOver=false;
    playerWon=false;
    playerCards=[];
    dealerCards=[];
    playerScore=0;
    dealerScore=0;
    deck=[];
            

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


//DOM Variables            
let textArea=document.getElementById("text-area");
let newGameButton=document.getElementById('new-game-button');
let hitButton=document.getElementById('hit-button');
let stayButton=document.getElementById('stay-button');
            
hitButton.style.display='none';
stayButton.style.display='none';
showStatus();


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


function checkForEndOfGame(){
  //Todo
}


//Hit Button Event
hitButton.addEventListener('click',function(){
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
  
});

//Stay Event Button
stayButton.addEventListener('click',function(){
  checkForEndOfGame();
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

//Numeric Value
function getNumericValue(card){
  let value=0;
  switch(card.value){
    case 'Ace':
      value=1;
      break;
    case 'Two':
      value=2;
      break;
    case 'Three':
      value=3;
      break;
    case 'Four':
      value=4;
      break;
    case 'Five':
      value=5;
      break;
    case 'Six':
      value=6;
      break;
    case 'Seven':
      value=7;
      break;
    case 'Eight':
      value=8;
      break;
    case 'Nine':
      value=9;
      break;
    default:
    value=10;
    
  }
  
  return value;
}


//calculating score
function getScore(cardArray){
  let hasAce=false;
  let score=0;
  for(let i=0; i<cardArray.length; i++){
    let card=cardArray[i];
    score+=getNumericValue(card);
    
    if(card.value== 'Ace'){
      hasAce=true;
    }
  }
  
  if(hasAce && score+10 <= 21){
    return score + 10;
  }
  
  return score;
  
}


//updating score
function updateScore(){
  dealerScore=getScore(dealerCards);
  playerScore=getScore(playerCards);
}


// show Details + checking gameOver
function showStatus(){
 if(!gameStarted){
   textArea.innerText="Welcome to BlackJack Game";
  return;
 }
  let dealerCardString="";
  for(let i=0;i<dealerCards.length;i++)
  {
    dealerCardString+=getCardString(dealerCards[i])+'\n';
  }
  
  let playerCardString="";
  for(let i=0; i < playerCards.length; i++)
  {
    playerCardString+=getCardString(playerCards[i])+'\n';
  }
  
  updateScore();
  
  textArea.innerText=
  'Dealer has: \n'+
  dealerCardString+'score:'
  +dealerScore+'\n\n'
  
  +'Player has: \n'
  +playerCardString+' score:'
  +playerScore+'\n\n';
  
 
  if(gameOver){
    if(playerWon){
      textArea.innerText="You win";
    }
    else
      textArea.innerText="Dealer wins";
      
  newGameButton.style.display='none';
  hitButton.style.display='inline';
  stayButton.style.display='inline';
  }
 

}
