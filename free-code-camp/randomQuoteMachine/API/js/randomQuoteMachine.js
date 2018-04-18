

document.getElementById('button').addEventListener('click', button);


function button() {
    fetch('https://random-quote-generator.herokuapp.com/api/quotes/')
        .then((res) => { return res.json() })
        .then((data) => {
            formatObject(data);
        });
};


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};


function formatObject(object) {

    var chooseRandomQuote = getRandomInt(81);   
    var authorName = document.getElementById("author");
    var quoteMessage = document.getElementById("quote");
    quoteMessage.innerHTML = `quotes ${object[chooseRandomQuote].quote}`;
    authorName.innerHTML = `author ${object[chooseRandomQuote].author}`;

};

















