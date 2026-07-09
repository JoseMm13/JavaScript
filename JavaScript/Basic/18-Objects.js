// Objects 

// Los objetos en JavaScript son estructuras que agrupan propiedades y métodos bajo un mismo nombre. 

// Sintaxis

let person = {
    name: "José",
    age: 27,
    alias: "JMELTY"
}

// Acceso a propiedades

// Notación punto

console.log(person.name)

//  Notación corchetes

console.log(person["name"])

// Modificación  de propiedades

person.name = "José Ángel"
console.log(person.name)

console.log(typeof person.age)
person.age = "28"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age
console.log(person)


// Nueva propiedad

person.email = "jose@gmail.com"
console.log(person)

person["age"] = 27
console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Núria",
    age: 26,
    alias: "Nuni",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk()

// Anidación de objetos

let person3 = {
    name: "José",
    myAge: 27,
    alias: "JMELTY",
    walk: function(){
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function(){
            console.log(`La persona de ${this.age} años de experiencia de trabajo.`)
        }
    }
}

console.log(person3)

console.log(person3.name)
//console.log(person3.job.name)

// person3.job.work()


// Igualdad de objects

let person4 = {
    name: "José",
    age: 27,
    alias: "JMELTY"
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

// Iteración

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// Funciones como objetos

function Person(name, age) { // Debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("José", 27)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)

// Funciones como objeto 

function Person(name, age){
    this.name = name    
    this.age = age    
}

let person5 = new Person("Joan", 22)
console.log(person5)
console.log(person5.name)
