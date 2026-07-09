// if/ else if, else


// if(si)

let edad = 26

if (edad == 26) {
    console.log("La edad es 26")
}

// else

if(edad == 27){
    console.log("La edad  es 27")
}else{
    console.log(`La edad es ${edad}`)
}


// if else if
let age = 17
if(age < 12){
    console.log("Niño")
}else if (age > 12 && age < 18){
    console.log("Adolescente")
}else{
    console.log("Adulto")
}


// Operadores ternarios

const message= edad == 26 ? "La edad es 26" : "La edad no es 26"
console.log(message)


// Switch

let day = 1
let dayName

switch(day){
    case 0:
        dayName = "Monday"
        break
    case 1:
        dayName = "Tuesday"
        break
    case 2:
        dayName = "Wednesday"
        break
    case 3:
        dayName = "Thursday"
        break
    case 4:
        dayName = "Friday"
        break
    case 5:
        dayName = "Saturday"
        break
    case 6:
        dayName = "Sunday"
        break
    default:
        dayName = "Incorrect day number."
        break
}

console.log(dayName)
