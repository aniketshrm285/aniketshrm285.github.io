const cards = document.querySelectorAll(".card")
//console.log(cards);

let isFlipped = false;
let firstCard;
let secondCard;
let winNum = 0;
var indices = [];

cards.forEach((card) => (
  card.addEventListener('click',flip)
))

function shuffler(){
  for(let i=0;i<16;i++) indices.push(i);
  shuffle(indices);
  let i=0;
  cards.forEach((card) => {
    card.style.order =indices[i];
    i++; 
  })
}

var checkIt = ()=>{
  if(firstCard.dataset.image === secondCard.dataset.image)success(); else fail();
}

shuffler();


function flip(){
  this.classList.add("flip")
  this.removeEventListener("click",flip);

  if(!isFlipped){
    isFlipped = true;
    firstCard = this;

  }
  else{
    secondCard = this;
    checkIt();
    isFlipped = false;
  }

}



function success(){
  winNum++;
  if(winNum == 8)
    console.log("Won");
}

function fail(){
  //console.log("fail");
  
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    firstCard.addEventListener('click',flip);
    secondCard.addEventListener('click',flip);
  },600)

  
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
