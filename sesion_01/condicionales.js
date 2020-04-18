// Operadores lógicos

// AND

var andVerdadero = true && true
var andFalso = true && false

// OR
var orVerdadero = true || false
var orFalso = false || false

// NOT
var notTrue = !true
var notFalse = !false


// Condicionales

var edad = 17
var nombre = 'Mauricio'

// If - Else

if (edad >= 18 || nombre === 'Mauricio') {
  console.log("Puedes pasar")
} else {
  console.log("No pasas")
}

// If - else if - else

var edad = 17

if (edad < 12) {
  console.log('Eres un niño')
} else if (edad >= 12 && edad < 18) {
  console.log('Eres un adolescente')
} else if (edad >= 18 && edad < 65) {
  console.log('Eres adulto')
} else {
  console.log('Eres de la tercera edad')
}


if (edad < 12) {
  console.log('Eres un niño')
} else if (edad < 18) {
  console.log('Eres un adolescente')
} else if (edad < 65) {
  console.log('Eres adulto')
} else {
  console.log('Eres de la tercera edad')
}


// Ejecutar varios ifs

var edad = 17
var nombre = 'Mauricio'

if (edad < 18) {
  console.log('No tienes INE')
} 

if (nombre === 'Mauricio') {
  console.log('Hola, Mauricio')
}