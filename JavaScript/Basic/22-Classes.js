// Class

class Person {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis

let person = new Person("Niklaus Mikaelson", 1045, "Klaus")
let person1 = new Person("Elijah Mikaelson", 1048, "Lijah")
console.log(person)
console.log(person1)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {
    constructor(name = "Sin nombre", age =  0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person2 = new DefaultPerson("Niklaus",1045)
console.log(person2)

// Acceso a propiedades

console.log(person2.alias)
console.log(person2["alias"])

person2.alias = "Klaus"

console.log(person2.alias)


// Functions in class

class PersonWithMethod {
     constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person3 =  new PersonWithMethod("Niklaus",1045,"El híbrido")
person3.walk()

// Propiedades privadas

class PrivatePerson {
    #bank
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}

let person4 = new PrivatePerson("Niklaus",1045,"nik","IBAN123456789")
// console.log(person4.bank) No podemos acceder a la propiedad ni para imprimirla ni editarla

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

let person5 = new GetSetPerson("Niklaus",1045,"nik","IBAN123456789")
console.log(person5)
console.log(person5.name)

person5.bank = "new IBAN123456789"
console.log(person5)


// Heréncia de clases

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("NikDog")
myDog.run()
myDog.sound()

let myFish = new Fish("NikFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))