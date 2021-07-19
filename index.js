// const gifts=["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }
//   return gifts;
// }
// wrapGifts(gifts);

function writeCards(arrayOfNames, eventName) {
    let newArray = []
    for (let i = 0 ; i<arrayOfNames.length ; i++){
    newArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray;
}

function countDown(num) {
    while ( num <= 10 && num >=0){
        console.log(num--);
    }
}
