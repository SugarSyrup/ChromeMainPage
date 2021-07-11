const quotes = [
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde",
    },
    {
        quote:"Two things ar infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Albert Einstein",
    },
    {
        quote:"So many books, so little time.",
        author:"Frank Zappa",
    },
    {
        quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author:"Dr. Seuss",
    },
    {
        quote:"Be the change that you wish to see in the world.",
        author:"Mahatma Gandhi",
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        author:"Robert Frost",
    },
    {
        quote:"If you tell the truth, you don't have to remember anything.",
        author:"Mark Twain",
    },
    {
        quote:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author:"Maya Angelou",
    },
    {
        quote:"Without music, life would be a mistake.",
        author:"Friedrich Nietzsche, Twilight of the Idols",
    },
    {
        quote:"We accept the love we think we deserve.",
        author:"Stephen Chbosky, The Perks of Being a Wallflower",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;