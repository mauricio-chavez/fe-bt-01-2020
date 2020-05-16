// Variables

var nombre = 'Mauricio';

// Var - Let - Const

if (true) {
  const mensaje = 'Hola';
}

// console.log(mensaje) // no se puede

// Primitivos

// Strings o cadenas de texto
var nombreCompleto = 'Mauricio Chávez';

// Numbers
var año = 2020;
var precio = 17.22;

// Booleanos
var encendido = true;
var apagado = false;

// Valores vacíos
var noDefinido = undefined;
var noDefinido;

var nulo = null;
var notANumber = NaN;

// Objetos

// 1. Atributos
// 2. Métodos

// PRINCIPIOS ORIENTACIÓN A OBJETOS
// Abstracción
// Herencia
// Polimorfismo
// Encapsulamiento

// Formas de crear objetos

// 1.
var dato = {
  nombre: 'Batman',
  director: 'Nolan',
  nombreMayusculas: function () {
    return this.nombre.toUpperCase();
  },
};

//2.
class Pelicula {
  constructor(nombre, director) {
    this.nombre = nombre;
    this.director = director;
  }

  nombreMayusculas() {
    return this.nombre.toUpperCase();
  }
}

const pelicula = new Pelicula('Django', 'Quentin Tarantino');
pelicula.nombreMayusculas();

// PROGRAMACIÓN FUNCIONAL

function saludar(nombre) {
  console.log('Hola, ' + nombre);
}

// 1. Puras
// 2. Inmutabilidad

// FUNCIONES PURAS

function suma(a, b) {
  return a + b;
}

// FUNCIÓN IMPURA

function random() {
  return Math.random();
}

// const nombre = 'Mauricio';

function saludo() {
  console.log('Hola, ' + nombre);
}

// INMUTABILIDAD

function inmutabilidad() {
  // Copiar objetos y arreglos
  const numeros = [1, 2, 3, 4, 5];
  const numeros2 = Array.from(numeros);

  const me = {
    nombre: 'Mauricio',
    apellido: 'Chávez',
  };

  const me2 = {};

  Object.assign(me2, me);

  // Congelar objetos y arreglos
  const nombres = Object.freeze(['Mau', 'Alex', 'Edith', 'Marce']);
  const yo = Object.freeze({
    nombre: 'Mauricio',
    apellido: 'Chávez',
  });
}

// Map, filter, reduce, forEach

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const peliculas = ['Django', 'Kill Bill', 'Pulp Fiction'];

const potencias = numeros.map(numero => {
  return Math.pow(numero, 2);
});

const pares = numeros.filter(numero => {
  return numero % 2 === 0;
});

const superPelicula = peliculas.reduce((accumulator, currentValue, index) => {
  if (index !== 0) {
    return accumulator + ' - ' + currentValue;
  } else {
    return accumulator;
  }
}, 'Reservoir Dogs');

console.log(superPelicula);
