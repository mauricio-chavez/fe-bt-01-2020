var jugador1 = 'piedra'
var jugador2 = 'tijera'

if (jugador1 === jugador2) {
  console.log('Empate')
} else if (jugador1 === 'piedra' && jugador2 === 'tijera') {
  console.log('Gana jugador 1')
} else if (jugador1 === 'papel' && jugador2 === 'piedra') {
  console.log('Gana jugador 1')
} else if (jugador1 === 'tijera' && jugador2 === 'papel') {
  console.log('Gana jugador 1')
} else if (jugador1 === 'piedra' && jugador2 === 'papel') {
  console.log('Gana jugador 2')
} else if (jugador1 === 'papel' && jugador2 === 'tijera') {
  console.log('Gana jugador 2')
} else if (jugador1 === 'tijera' && jugador2 === 'piedra') {
  console.log('Gana jugador 2')
}
