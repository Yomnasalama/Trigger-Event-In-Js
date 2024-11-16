var quotes = ["You miss 100% of the shots you don't take.", "It's not what happens to you, but how you react to it that matters.", "The best revenge is massive success.",
    "Resentment is like drinking poison and waiting for your enemies to die.", "Do not take life too seriously. You will not get out alive."
]
var teller = ["--Wayne Gretzy", "--Epictetus", "--Frank Sinatra", "--Nelson Mandela", "--Elbert Hubbard"]

var lastNumber;
function generateRandomNumber() {
    var newNumber;
    do {
        newNumber = Math.floor(Math.random() * 5);
    } while (newNumber === lastNumber);

    lastNumber = newNumber;
    return newNumber;
}


function generateNewQuote() {
    var randomNumber = generateRandomNumber();
    document.getElementById("quote").innerHTML = '"'+quotes[randomNumber]+'"';
    document.getElementById("author").innerHTML = '"'+teller[randomNumber]+'"';
}

