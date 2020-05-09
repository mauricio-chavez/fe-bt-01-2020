const persona = {
  nombre: 'Mau',
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`)
  }
}

persona.saludar()

// Podemos cambiar el prototipo

class Gato {
  constructor(nombre) {
    this.nombre = nombre
  }

  divertirse() {
    console.log(`${this.nombre} está jugando con estambre`)
  }
}

const garfield = new Gato('Garfield');
garfield.divertirse() // Garfield está jugando con estambre
const miguel = new Gato('Miguel');
miguel.divertirse() // Miguel está jugando con estambre

Gato.__proto__.divertirse = () => {
  console.log('Miawww')
}

garfield.divertirse() // Miawww
miguel.divertirse() // Miawww


