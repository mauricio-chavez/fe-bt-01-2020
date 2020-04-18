// Variables
var nombre = 'Mauricio'

// Camel Case (Javascript)
var nombreCompleto = 'Mauricio Chávez Olea'

// Snake Case
var nombre_completo = 'Mauricio Chávez Olea'

// PascalCase
var NombreCompleto = 'Mauricio Chávez Olea'

// Tipos de Dato

// Primitivos

// String
var nombre = 'Mauricio'
var apellido = 'Chávez'
var mensaje = `Hola, mundo. Soy ${nombre}`

// Number
var edad = 21
var pi = 3.1416

// Boolean
var desayuno = true
var completado = false

// Undefined
var noDefinida
var noDefinida = undefined

// Null
var genteFueraDeCasa = null

// Objetos

// Objeto
var objetoVacio = {}
var fecha = {
  dia: 18,
  mes: 'Abril'
}
var dia = fecha.dia

// Array - Arreglo
var arregloVacio = []
var edades = [21, 17, 34, 40]
var nombres = ['Mauricio', 'Marcela', 'Alejandro']
var informacion = ['Mauricio', 21, ['Otro', 'arreglo'], {}]
var edadMauricio = edades[0]

// Date
var hoy = new Date()
var mes = hoy.getMonth()

// RegExp
var expresionRegular = /.*/g

// Function
function saludar() {
  var nombre = "Mauricio"
  console.log("Hola, " + nombre)
}


// Operadores básicos
var suma = 1 + 2
var resta = 3 - 2
var multiplicacion = 5 * 6
var division = 7 / 3
var residuo = 7 % 3

var incremento = 7
incremento++

var decremento = 9
decremento--