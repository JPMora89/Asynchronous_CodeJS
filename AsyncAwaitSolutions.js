let favoriteNumber = 22;
let baseURL = "http://numbersapi.com";

// Part 1 Number Facts //

// 1 //
async function part1() {
  let data = await $.getJSON(`${baseURL}/${favoriteNumber}?json`);
  console.log(data);
}


// 2 //
const favNumbers = [7, 11, 22];
async function part2() {
  let data = await $.getJSON(`${baseURL}/${favoriteNumbers}?json`);
  console.log(data);
}


// 3 //
async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favoriteNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}


// Part 2 Deck of Cards //

// Check Async Await Deck of Cards folder //