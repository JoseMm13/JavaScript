// OPERADORES

// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo, se refiere al Resto de la división.
console.log(a ** b) // Exponente, se refiere a la potencia de un número, es decir, número a elevado al número b.

a++ // Incremento, aumenta el valor de a en 1.
console.log(a)

b-- // Decremento, disminuye el valor de b en 1.
console.log(b)

// Operadores de Asignación

let myVariable = 13
console.log(myVariable)

myVariable += 8 // Suma y asigna el resultado a la variable.
console.log(myVariable)


myVariable -= 5 // Resta y asigna el resultado a la variable.
myVariable *= 2 // Multiplica y asigna el resultado a la variable.
myVariable /= 4 // Divide y asigna el resultado a la variable.
myVariable %= 3 // Módulo y asigna el resultado a la variable.
myVariable **= 2 // Exponente y asigna el resultado a la variable.


// Operadores de Comparación

console.log(a > b)
console.log(a < b)
console.log(a <= b)
console.log(a >= b)
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor
console.log(a == a) 
console.log(a === a) // Igualdad por identidad ( por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Diferente por valor
console.log(a !== 6) // Diferente por identidad (por tipo y valor)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)


// Truthy values (valores verdaderos)

    /*
        Todos los números positivos y negativos menos el cero.
        Todas las cadenas de texto menos las vacías.
        Todos los boolean true
    */

//Falsy values (valores falsos)

    /*
        0
        0n
        null
        undefined
        NaN (NOT A NUMBER)
        boolean false
        cadenas de texto vacias.
    */

//Operadores lógicos.

// and (&&)

// Si cinco es mayor que diez y sí quince es mayor que veinte
// En este caso cinco mayor que cinco es falso y quince mayor que veinte es falso

console.log(5 > 10 && 15 > 20) // El resultado de esto será false && false -> dará false
console.log(5 < 10 && 15 < 20) // El resultado dará (true)
console.log(5 < 10 && 15 > 20) // El resultado dará (false)

/*
    Nota: 
        Si es todo false -> El resultado será false.
        Si es todo true -> El resultado será true.
        Si uno es false y el otro true -> El resultado será false.
    En cuanto una de las expresiones es false el resultado será false.
*/

// or  ||

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

/*
    Nota: 
    Si se cumple mínimo una de las comparaciones que estamos realizando 
    el cómputo general sera true. Si no se cumple ninguna, es decir, cinco
    es mayor que diez (false) o quince es mayor que veinte (fasle), por tanto
    el resultado será FALSE.
*/


// not (!)

console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 < 10 || 15 < 20))

// Operadores Ternarios

const isRaining  = true
// const isRaining = false

isRaining ? console.log('Está lloviendo.') : console.log('No está lloviendo.')



