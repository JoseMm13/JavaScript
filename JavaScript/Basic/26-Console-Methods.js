// console

// log

console.log("Hello, JavaScript")

// error

console.error("This is an error message.")
console.error("Failed to connect to the database:", new Error("Connection failed."))

// warn

console.warn("This is a warning message.")

// info

console.info("This is an additional information message.")

// table

let data = [
    ["Niklaus", 1045],
    ["Elijah", 1048]
]

console.table(data)

data = [
    {name: "Niklaus", age: "1045"},
    {name: "Elijah", age: "1048"}
]

console.table(data)

console.group("User:")
console.log("Name: Niklaus")
console.log("Age: 1045")
console.groupEnd()

// time

console.time("Execution time: 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Execution time:")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Execution time: 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Execution time: 1")

// assert

let age = 17
console.assert(age >= 18, "The user must be of legal age.")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Execution tracking.")
}

funcA()

// clear

// console.clear()