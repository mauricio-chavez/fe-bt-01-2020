const result = document.querySelector('#resultado')
const first = document.querySelector('#first')
const second = document.querySelector('#second')
const addButton = document.querySelector('#sumar')
const minusButton = document.querySelector('#restar')
const multButton = document.querySelector('#multiplicar')
const divButton = document.querySelector('#dividir')

function sumar() {
  const primero = parseInt(first.value)
  const segundo = parseInt(second.value)
  const resultado = primero + segundo
  result.textContent = 'El resultado es: ' + resultado
}

function restar() {
  const primero = parseInt(first.value)
  const segundo = parseInt(second.value)
  const resultado = primero - segundo
  result.textContent = 'El resultado es: ' + resultado
}

function multiplicar() {
  const primero = parseInt(first.value)
  const segundo = parseInt(second.value)
  const resultado = primero * segundo
  result.textContent = 'El resultado es: ' + resultado
}

function dividir() {
  const primero = parseInt(first.value)
  const segundo = parseInt(second.value)
  const resultado = primero / segundo
  result.textContent = 'El resultado es: ' + resultado
}

addButton.addEventListener('click', sumar)
minusButton.addEventListener('click', restar)
multButton.addEventListener('click', multiplicar)
divButton.addEventListener('click', dividir)
