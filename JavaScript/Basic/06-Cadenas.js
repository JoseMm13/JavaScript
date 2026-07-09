// Strings

// Concatenación de cadenas

let myName = "José Ángel"
let greeting = "Welcome, " + myName + "!"

console.log(greeting)
console.log(typeof greeting)

// Longitud de cadena de texto

console.log("La longitud de la cadena es de " + greeting.length + " letras.")

// Acceso a carácteres de una cadena de texto

console.log("Carácter en la posición 1: " + greeting[0])
console.log("Carácter en la posición 2: " + greeting[1])
console.log("Carácter en la posición 3: " + greeting[2])
console.log("Carácter en la posición 4: " + greeting[3])
console.log("Carácter en la posición 5: " + greeting[4])

// Métodos comúnes

// Imprime por pantalla todo en mayúsculas
console.log(greeting.toUpperCase())

// Imprime por pantalla todo en minúsculas
console.log(greeting.toLowerCase())

// Muestra la posición en la que se encuentra la palabra Welcome
console.log("Se encuentra en la posición: " + greeting.indexOf("Welcome"))

// Muestra la posición en la que se encuentra la palabra José
console.log("Se encuentra en la posición: " + greeting.indexOf("José"))

// Muestra la posición en la que se encuentra la palabra Núria
console.log("Se encuentra en la posición: " + greeting.indexOf("Núria"))

/*
    Nota: En caso de no encontrar la palabra imagina que no existe en la cadena,
    la consola no daría error, te lanzará por pantalla el valor -1.
*/

console.log("La cadena contiene la palabra <<Welcome>>: " + greeting.includes("Welcome"))
console.log("La cadena contiene la palabra <<José>>: " + greeting.includes("José"))
console.log("La cadena contiene la palabra <<Núria>>: " + greeting.includes("Núria"))

/*
    Si solo quieres mostrar un solo pedazo de la cadena de texto debes 
    utilizar la posición inicial y la posición final. Teniendo en cuenta
    que es sabiendo las posiciones de la cadena.
*/

console.log("Esto es el pedazo que quiero mostrar de la cadena de texto: " 
        +  greeting.slice(0, 10))

console.log(greeting.replace("José Ángel", "Núria"))

// Template literals (Plantillas literales)

/*
    Los Template Literals para lo que nos sirve para interporar variables
    por un lado o para crear strings de varias líneas. Con salto de línea.
    Para ello debes recordar escribir en comillas invertidas. ( `Hi` )
*/

let message = `Hello, this 
is my 
course of 
JavaScript!`

console.log(message)

// Interpolación

/*
    La interpolación es mostrar texto más el valor de la variable 
    sin utilizar concatenación, es decir, NO utilizando el signo (+), 
    si no que debéis utilizar el simbolo del dolar y las comillas invertidas. 
*/ 

console.log(`Welcome, ${myName}`)

let email = "example@gmail.com"

console.log(`Welcome, ${myName} your email is: ${email}`)


