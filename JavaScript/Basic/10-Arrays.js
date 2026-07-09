// array

// Declaraciones

let myArray = []
let myArray1 = new Array()

console.log(myArray)
console.log(myArray1)

// Inicialización

myArray = [3]
myArray1 = new Array(3)

console.log(myArray)
console.log(myArray1)

myArray = [ 1 , 2 , 3 , 4 ]
myArray1 = new Array( 1 , 2 , 3 , 4 )

console.log(myArray)
console.log(myArray1)

myArray = [ "José Ángel" , "Núria" , "Juan" , "Cristina", 27 , 26 , 26 , 19 , true , false ]
myArray1 = new Array( "José Ángel" , "Núria" , "Juan" , "Cristina" , 27 , 26 , 26 , 19 , true , false )

console.log(myArray)
console.log(myArray1)

// Métodos comunes

myArray = []

// Push & Pop

// push(): agrega uno o más elementos al final del array y devuelve la nueva longitud.
// pop(): elimina el último elemento del array y lo devuelve; si está vacío, devuelve undefined.

myArray.push("José Ángel")
myArray.push("Núria")
myArray.push("Juan")
myArray.push("26")

console.log(myArray)

console.log(myArray.pop())
console.log(myArray.pop())

console.log(myArray)


// shift & unshift

// shift(): elimina el primer elemento del array y lo devuelve; si está vacío, devuelve undefined.
// unshift(): agrega uno o más elementos al inicio del array y devuelve la nueva longitud.

myArray = [ "Juan", "Núria", "José Ángel"]

console.log(myArray.shift())    // elimina "Juan" y muestra el valor eliminado
console.log(myArray)             

console.log(myArray.unshift("Cristina")) // agrega "Cristina" al inicio y muestra la nueva longitud
console.log(myArray)                      


// length 

console.log(myArray.length)

// clear

/*
    Esto no funciona -> myArray1.clear(), se debe inicializar, 
    ya que al ejecutar dará error de compilación
*/
myArray1 = []
myArray1.length = 0 // Alternativa para inicializarlo
console.log(myArray1)

// Slice

myArray = [ "José Ángel" , "Núria" , "Juan" , "Cristina", 27 , 26 , 26 , 19 , true , false ]
let myNewArray = myArray.slice( 0, 2 )

console.log(myArray)
console.log(myNewArray)

// Splice

myArray1.splice(1, 3)
console.log(myArray1)

myArray1 = ["José Ángel" , "Núria" , "Juan" , "Cristina" , 27 , 26 , 26 , 19 , true , false ]

myArray1.splice(3,4, "Nueva entrada")
console.log(myArray1)


