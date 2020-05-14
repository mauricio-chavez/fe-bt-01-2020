// Convertir a una función pura

function greet(language, name) {
  switch (language) {
    case 'English':
      return `Hi, ${name}!`;
    case 'Chinesse':
      return `Ni hao, ${name}!`;
    case 'Spanish':
      return `¡Hola, ${name}!`;
  }
}
