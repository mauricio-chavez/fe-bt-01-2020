class Persona {
  constructor(nombre, hobbie) {
    this.nombre = nombre
    this.hobbie = hobbie
  }

  cambiarNombre(nombre) {
    this.nombre  = nombre
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`)
  }

  divertirse() {
    const hobbie = this.hobbie.slice(0, this.hobbie.length - 1).toLowerCase()
    console.log(`${this.nombre} está ${hobbie}ndo`)
  }
}

const persona1 = new Persona('Mauricio', 'Programar')
const persona2 = new Persona('Ricardo', 'Bailar')
persona1.cambiarNombre('Miguel')
persona1.saludar()
persona2.saludar()
