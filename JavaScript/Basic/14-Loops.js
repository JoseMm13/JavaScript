// Bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`El valor de i es: ${i+1}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

for (let i = 0; i < numbers.length; i++) {
    console.log(`El valor de i es ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log(`El valor de i es: ${i+1}`)
    i++
}

// Bucle infinito

// wile (true) {
    // codigo
// }

// do while

let j = 0

do {
    console.log(`El valor de j es: ${j+1}`)
    j++
}while (j < 5)


// for of

// Pues básicamente el for of nos vale para recorrer valores 
// de algo que sea iterable (una estructura de datos o algún
// tipo de dato)

myArray = [1, 2, 3, 4, 5]
mySet = new Set(["José", "Núria", "Juan"])
myMap = new Map([
    ["name", "José"],
    ["email","jose@example.com"],
    ["age", 27]
])
myString = "Hola JavaScript!"

for(let valor of myArray) {
    console.log(valor)
}
for(let valor of mySet) {
    console.log(valor)
}
for(let valor of myMap) {
    console.log(valor)
}
for(let valor of myString) {
    console.log(valor)
}

// break y continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    }else if (i == 7) {
        break
    }
    console.log(`Hola: ${i}`)
}
