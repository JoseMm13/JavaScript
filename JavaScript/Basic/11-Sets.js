// Sets

// Declaración

let mySet = new Set()

// Inicialización

/*
    Nota: Al declarar el set, es decir, dar valores al set siempre
    se debe incluir los [] -> mySet = new Set( [ "hola", 23.56, false ] )
*/
mySet = new Set(["Clavo", "Tomillo", 26.3, true, false])
console.log(mySet)

// Métodos comunes

// add & delete

mySet.add("Bye")
mySet.add(62)
console.log(mySet)

mySet.delete(62)
mySet.delete("Bye")
console.log(mySet)

console.log(mySet.delete(false))
console.log(mySet.delete(true))
console.log(mySet)


// has

console.log(mySet.has("Clavo"))
console.log(mySet.has("tomillo"))

// size

console.log(mySet.size)

// Convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a un set

let mySet2 = new Set(myArray)
console.log(mySet2)

// No admite valores duplicados, es decir tiene qie ser exactamente igual.
// Si se repite el valor no lo agrega al set.

mySet2.add("Clavo")
mySet2.add("Clavo")
mySet2.add("Clavo")
mySet2.add("ClaVo") // Diferencia entre mayúsculas y minúsculas entonces lo agrega al set.
console.log(mySet2)