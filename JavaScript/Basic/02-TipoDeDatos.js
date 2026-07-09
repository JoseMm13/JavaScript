//Hay 7 tipos de datos primitivos en JavaScript

//Cadena de texto (string)

let name = "José Ángel"
let alias = 'JMELTY'
let email = `Correoelectrónico@gmail.com`

// Números (number)

let age = 27 //número enteros
let altura = 1.70 // número decimal 

// Booleanos (boolean)

let isStudent = true
let isTeacher = false

// Undefined

// Son variables que no han sido inicializadas, es decir, no se les ha asignado un valor. 
// Pero no dan error simplemente se les asigna el valor de undefined.

let undefinedVariable
console.log(undefinedVariable) 

// Null

// Es un valor que representa la ausencia de valor.

let nullValue = null

// Symbol

let mySSymbol = Symbol("mySymbol")

// BigInt

//Podemos utilizar la memoria de nuestro ordenador para almacenar números enteros muy grandes,
// que superen el límite de los números enteros en JavaScript, que es de 2^53 - 1.

//No es como el number que llega a 64 


let myBigInt =  BigInt(998796853284358907655849089537689349873743468793473857924879375246887374367829570)
let myBigInt2 = 998796853284358907655849089537689349873743468793473857924879375246887374367829570n


/* 
    --------------------------------------------------------
    ------- MOSTRAMOS LOS TIPOS DE DATOS EN CONSOLA --------
    --------------------------------------------------------
*/

console.log(typeof name)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof altura)
console.log(typeof isStudent)
console.log(typeof isTeacher)
console.log(typeof undefinedVariable)
console.log(typeof nullValue)
console.log(typeof mySSymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)

