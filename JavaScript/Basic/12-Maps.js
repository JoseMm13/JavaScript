// Map

// Declare a new Map

let myMap = new Map()

// Initialize 

myMap = new Map([
    ["name:", "José Ángel"],
    ["email:","jose.angel@example.com"],
    ["age:", 27]
])

console.log(myMap)


// Methods and properties

// set

myMap.set("alias:", "JMELTY")
myMap.set("name:", "José")

console.log(myMap)

// get

console.log(myMap.get("name:"))
console.log(myMap.get("surname:"))

// has

console.log(myMap.has("name:"))
console.log(myMap.has("surname:"))

// delete

myMap.delete("alias:")

console.log(myMap)

// keys

console.log(myMap.keys())

// values

console.log(myMap.values())

// entries

console.log(myMap.entries()) // returns an iterator key/value pairs 

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)

