myArray = [1 ,2, 3, 4, 5]

let person = {
    name: "José Ángel",
    age: 27,
    alias: "Jmelty"
}

let myValue =  myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración 

// Sintáxis Array

let [myValue1, myValue2, myValue3, myValue4, myValue5, myValue6] = myArray
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)

// Sintaxis arrays con valores predeterminados

let [myValue7 = 0, myValue8 = 0, myValue9 = 0, myValue10 = 0, myValue11 = 0, myValue12 = 0] = myArray

console.log(myValue7)
console.log(myValue8)
console.log(myValue9)
console.log(myValue10)
console.log(myValue11)
console.log(myValue12)

// Ignnorar elementos array

let [myValue13 = 0, , , , myValue17 = 0] = myArray

console.log(myValue13)
console.log(myValue17)

// Sintaxis Objects {se destructura con las llaves}

let { name, age, alias } = person

console.log(name)
console.log(age)
console.log(alias)

let { name1, age1, alias1 , email = "jose@gmail.com" } = person

console.log(name1) // No existe
console.log(age1) // No existe
console.log(alias1) // No existe
console.log(email)

// Sintaxis Objects con nuevos nombres de variables 


let { name: name2, age: age2, alias: alias2 } = person

console.log(name2) 
console.log(age2) 
console.log(alias2) 

// Objects Anidados 

let person3 = {
    name: "José Ángel",
    age: 27,
    alias: "Jmelty",
    walk: function(){
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function(){
            console.log(`La persona de ${this.age} de experiencia trabaja.`)
        }
    }
}

let { name: name4, job: { name: jobName } } = person3
console.log(name4)
console.log(jobName)

// Propagación ...

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objects

let person4 = { ...person, email: "jose@gmail.com" }

console.log(person4)

// Copia de objects

let person5 = { ...person }

console.log(person5)