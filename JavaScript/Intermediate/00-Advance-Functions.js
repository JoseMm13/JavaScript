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
//
