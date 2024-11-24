var quote = document.getElementById("quote");
var author = document.getElementById("author");

var Quotes = [
  {
    quotes: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quotes:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quotes:
      "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
  {
    quotes:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "― Mahatma Gandhi",
  },
  {
    quotes: "“Always forgive your enemies; nothing annoys them so much.”",
    author: "― Oscar Wilde",
  },
  {
    quotes: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    quotes: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quotes:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
];
console.log(Quotes);

function randomQuotes() {
  var randomIndex = Math.floor(Math.random() * Quotes.length);
  quote.textContent = `${Quotes[randomIndex].quotes}`;
  author.textContent = `${Quotes[randomIndex].author}`;
}
