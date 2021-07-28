/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the Project Resources section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: '- Nelson Mandela'
  },
  {
    quote: 'If you look at what you have in life, you will always have more. If you look at what you dont have in life, you will never have enough. ',
    source: '- Oprah Winfrey'
  },
  {
    quote: 'Dont judge each day by the harvest you reap but by the seeds that you plant.',
    source: '- Robert Louis Stevenson'
  },
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source: '- Benjamin Franklin'
  },
  {
    quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. ',
    source: '- Dr. Seuss'
  },
];

/***
 * `getRandomQuote` function
***/

// const quoteElementClass = document.querySelectorAll('p');
// const sourceElementClass = document.getElementsByClassName('source');

function getRandomQuote () {
  let random = Math.floor(Math.random() * quotes.length)
  return quotes[random].quote
  
};
console.log(getRandomQuote());

// for (i = 0; i < quotes.length; i++) {
//   let message = quotes[i].quote;
  
//   console.log(message);
// }

/***
 * `printQuote` function
***/
function printQuote () {

  // let random = Math.floor(Math.random() * quotes.length)
  let randomQuote = getRandomQuote();
  let quoteHtml = document.querySelector('.quote');
  let source = document.querySelector('.source');
  let html = `<p>${randomQuote}</p></div>
  `;
  // let html2 = `<p>${quotes[randomQuote].source}</p>`;
  // for (i = 0; i < quotes.length; i++) {
  //   let message = quotes[i].quote;
  
  // } 
  quoteHtml.innerHTML = html;
  // source.innerHTML = html2;
}

// } 
// console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);