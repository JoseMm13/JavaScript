//First-class citizens.

const greet = function(name) {
    console.log(`Hello, ${name}`)
}

greet("JMELTY")

function processGreeting(greetfunction, name){
    greetfunction(name)
}

function returnGreeting(){
    return greet
}

processGreeting(greet,"JMELTY")
const greet2 = returnGreeting()
greet2("Jmelty (LEARN IT)")

// Advanced arrow functions.

// -Implicit return.

const multiply = (a, b) => a * b
console.log(multiply(13,21))

// this Lexical / Tokens

const handler = {
    name: "Jmelty",
    greeting: function () {
        console.log(`Hello, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hello, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();
// ▲ ▲ ▲ Here, you must use a ; if you want it to execute only IIFE.  

// IIFE (Immediately Invoked Function Expression)

// -- IIFE classic

(function(){
    console.log("IIFE Classic")
})();

(() =>{
    console.log("IIFE with arrow function")
})();

// Parameters Rest (...)

// Parameters Rest (...) allows a function to accept an indefinite number of arguments as an array.

function sum(... numbers){
    let result = 0
    for(let number of numbers){
        result += number
    }
    return result
}

console.log(sum(1 ,2, 3, 4, 5))
console.log(sum(13, 21))

// Operator Spread (...)

// The spread operator (...) allows an iterable (like an array or string) 
// to be expanded in places where zero or more elements are expected.

const numbers =  [13, 21, 34]
function sumWithSpread(a, b, c){
    return a + b + c
}

console.log(sumWithSpread(13,21,34)) // Without Spread
console.log(sumWithSpread(...numbers))


