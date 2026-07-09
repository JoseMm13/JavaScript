// Functions

function myFunction() {
    console.log("Hello World!")
}

for (let i = 0; i < 5; i++) {
    myFunction()
}

function myFunctionWithParams(name) {
    console.log(`Hello ${name}!`)
}

myFunctionWithParams("Alice")
myFunctionWithParams("Nick klaus")
myFunctionWithParams("Charlie")
myFunctionWithParams("Nuni")


// Anonymous function 

const myFunction2 = function(name) {
    console.log(`Hello ${name}!`)
}

myFunction2("I'm an Anonymous function")

// Arrow function

const myFunction3 = (name) => {
    console.log(`Hello ${name}!`)
}
myFunction3("I'm an Arrow function")

const myFunction4 = name => console.log(`Hello ${name}!`)
myFunction4("I'm an Arrow function with one parameter and no brackets")

// Parámetros 

function sum(a,b){
    console.log(`La suma de ${a} + ${b} = ${a + b}`)
}

sum(5, 10)

// Por defecto 

function defaultSum(a = 0, b = 0){
    console.log(`La suma de ${a} + ${b} = ${a + b}`)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)


// con retorno
function mul(a,b){
    return a * b
}

let result = mul(5, 10)
console.log(result)

// funciones anidadas

function extern(){
    console.log("Función externa")
    function intern(){
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: Fuera del scope.(No se puede llamar a la función interna desde fuera de la función externa)

// Funciones de nivel superior

function applyFunct(func, param){
    func(param)
}

applyFunct(myFunction4,"Nick Klaus: Esto es una función de orden superior!")

// foreach 

myArray = [1,2,3,4,5]
mySet = new Set([1,2,3,4,5])
myMap = new Map([["a",1],["b","dos"],["c",3],["d","cuatro"],["e",5]])


myArray.forEach(function (value){
    console.log(value)
})

myArray.forEach((value) => console.log(value))
mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))


