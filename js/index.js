const quotes = [
  {
    quote: '"Be yourself; everyone else is already taken."',
    author: "-- Oscar Wilde",
  },
  {
    quote:
      '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."',
    author: "-- Albert Einstein",
  },
  {
    quote: '"So many books, so little time."',
    author: "-- Frank Zappa",
  },
  {
    quote: '"A room without books is like a body without a soul."',
    author: "-- Marcus Tullius Cicero",
  },
  {
    quote: '"You only live once, but if you do it right, once is enough."',
    author: "-- Mae West",
  },
  {
    quote: '"Be the change that you wish to see in the world."',
    author: "-- Mahatma Gandhi",
  },
  {
    quote: '"If you tell the truth, you don\'t have to remember anything."',
    author: "-- Mark Twain",
  },
];

let lastIndex = -1; // متغير لحفظ آخر رقم

function generateQuote() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex && quotes.length > 1);

  lastIndex = randomIndex; // تحديث آخر رقم

  const currentQuote = quotes[randomIndex];

  document.getElementById("quote").innerHTML = currentQuote.quote;
  document.getElementById("author").textContent = currentQuote.author;
}
