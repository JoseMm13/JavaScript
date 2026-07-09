// Excepcitions

// Produce una excepción
let myObject
// console.log(myObject.email)

// Captura de errores

// try-catch

try {
    // Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error")
}

// Captura del error

try{
    console.log(myObject.email)
}catch(error){
    console.log("Error ", error.message)
}

// Finally

try{
    console.log(myObject.email)
}catch(error){
    console.log("Error ", error.message)
}finally{
    console.log("This code always runs.")
}

// No está soportado
// try {
//     console.log(myObject.email)
// } finally {
//     console.log("Este código se ejecuta siempre")
// }

// Lanzamiento de errores

// throw

// throw new Error("Error")

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("These properties cannot be summed.")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("This operation only sums integers.")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("An attempt is being made to add zero.", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Error:", error.message)
}

// Capturar varios tipos de errores

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("TypeError:", error.message)
    } else if (error instanceof Error) {
        console.log("Error:", error.message)
    }
}

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Custom Error:", error.message)
    error.printNumbers()
}