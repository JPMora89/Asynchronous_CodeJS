// Part 1 Number Facts: 

let favoriteNumber = 22;


//  1 // 

let url = "http://numbersapi.com"
$.getJSON(`${url}/${favoriteNumber}?json`)
.then(data => {console.log(data)})

//  2 // 

min=17
max=21

$.getJSON(`${url}/${min}..${max}`)
.then(data => console.log(data))

//  3 //

Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${url}/${favoriteNumber}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });
  

//   PART 2 Deck of Cards

//  1 // 

$.getJSON("https://deckofcardsapi.com/api/deck/new/draw/")
.then(data => {
    console.log(data)
    let { suit, value} = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
})

//  2 //

$.getJSON("https://deckofcardsapi.com/api/deck/new/draw/?count=2")
.then(data => {
    console.log(data)
    let firstCard = data.cards[0];
    let secondCard = data.cards[1]
    console.log(firstCard.value, firstCard.suit)
    console.log(secondCard.value, secondCard.suit)
})

// 3 //


// Check Deck of Cards folder //

