// Module Exports

// Functions

export function add(a, b){
    return a + b
}

console.log(add(5, 10))

// Propierties

export const PI = 3.1416
export let name = "JMELTY"

// Classes

export class Circle {

    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }

}

// Default export.

export default function substract(a, b) {
    return a - b
}

// export default class MyClass {

//     func() {
//         console.log("Mi clase")
//     }
// }