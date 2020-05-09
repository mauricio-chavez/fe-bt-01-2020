class Persona {
  constructor(nombre, hobbie) {
    this.nombre = nombre
    this.hobbie = hobbie
  }


  saludar() {
    console.log(`Hola, soy ${this.nombre}`)
  }

  divertirse() {
    let hobbie = this.hobbie
    console.log(`${this.nombre} está ${hobbie.slice(0, hobbie.length - 1)}ndo`)
  }
}

class Gato {
  constructor(nombre) {
    this.nombre = nombre
  }

  divertirse() {
    console.log(`${this.nombre} está jugando con estambre`)
  }
}

const entidades = [
  new Persona('Pancho', 'bailar'), // 0 - persona
  new Gato('Garfield'), // 1 - gato
  new Gato('Bola de Nieve'), // 2 - gato
  new Persona('Roberto', 'saltar'), // 3 - persona
]


for (const entidad of entidades) {
  entidad.divertirse()
}
