class Persona {
  constructor(nombre, hobbie) {
    this.nombre = nombre
    this.hobbie = hobbie
  }

  divertirse() {
    console.log(`A ${this.nombre} le gusta ${this.hobbie.toLowerCase()}`)
  }
}

class Corredor extends Persona {
  constructor(nombre, horasDeEntrenamiento) {
    super(nombre, 'Correr')
    this.horasDeEntrenamiento = horasDeEntrenamiento
  }

  obtenerHorasDeEntrenamiento() {
    console.log(`He entrenado ${this.horasDeEntrenamiento} horas`)
  }

  correr(horas) {
    this.horasDeEntrenamiento += horas
    console.log(`Corriendo ${horas} horas...`)
  }
}

// const persona = new Persona('Mauricio', 'Programar')
// persona.divertirse()

// const corredor = new Corredor('Roberto', 10)
// corredor.correr(5)
// corredor.obtenerHorasDeEntrenamiento()
