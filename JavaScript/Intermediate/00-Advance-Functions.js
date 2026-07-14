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

// Closures

function createCounter(){
    let counter = 0
    return function(){
        counter++
        console.log(`Counter: ${counter}`) 
    }

}
/*
    · What are we looking at here?
    - Something very important is that the inner function, this function, 
      the one inside, accesses the context of the outer function, 
      but even maintaining the state of the variable after executing.
*/

const counter = createCounter()
counter()
counter()
counter()
counter()

// Recursion

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

// Partial functions

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(34)
console.log(sumWith(21, 13))
console.log(sumWith(13, 21))

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`My result is: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`My result in the arrow function is: ${result}`)
})
