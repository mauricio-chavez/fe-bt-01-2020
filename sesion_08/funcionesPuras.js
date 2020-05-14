// Función pura
function add(a, b) {
  return a + b;
}

// Funciones impuras (no funcionales)
function randomInt(number) {
  return Math.random() * number;
}

// Ejemplo 2: función impura

const name = 'Miguel';

function greet(language) {
  switch (language) {
    case 'English':
      return `Hi, ${name}!`;
    case 'Chinesse':
      return `Ni hao, ${name}!`;
    case 'Spanish':
      return `¡Hola, ${name}!`;
  }
}

const message = greet('English');
console.log(message);
