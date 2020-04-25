// Global - local - bloque

// Global
const nombre = "Mauricio"
const edad = 40

function saludar() {
  // Local
  const nombre = "Salvador"
  const apellido = "Chávez"

  if (true) {
    // Bloque
    const nueva = 30

    // Con var, no existe scope de bloque
    var otraNueva = 40
  }

  // No se puede hacer esto porque nueva tiene scope de bloque
  console.log(nueva)
  // Sí podemos hacer lo siguiente
  console.log(otraNueva)
}

