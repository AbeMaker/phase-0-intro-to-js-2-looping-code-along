// Code your solutions in this file
//for (let age = 30; age < 40; age++){
//console.log(`I\'m ${age} years old.Happy birthday to me!`);
//}

//const gifts = ["teddy bear", "drone", "doll"];


//function wrapGifts(gifts) {
//for (let i = 0; i < gifts.length; i++) {
//console.log(`Wrapped ${gifts[i]} and added a bow!`);
//}

//return gifts;
//}
//wrapGifts(gifts);
function writeCards(newArray, event) {
    let thankYouCards = [];
    for (let i = 0; i < newArray.length; i++) {
      thankYouCards.push(
        `Thank you, ${newArray[i]}, for the wonderful ${event} gift!`
      );
    }
    return thankYouCards;
  }
  function countDown(Number) {
    while (Number > 0) {
      console.log(Number);
      Number -= 1;
    }
    console.log(Number);
  }