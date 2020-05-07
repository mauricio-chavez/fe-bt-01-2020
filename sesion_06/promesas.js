const peliculas = [
  {
    nombre: 'Django',
    director: 'Tarantino',
  },
  {
    nombre: 'The Dark Night',
    director: 'Nolan',
  },
  {
    nombre: 'Hereditary',
    director: 'Ari Aster',
  }
]

function fetch() {
  return new Promise((resolve, reject) => {
    resolve(peliculas)
  })
}


// console.log('Buscaré las películas...')
// fetch()
//   .then(peliculas => {
//     console.log('PELICULAS:', peliculas)
//   })
//   .catch(error => {
//     console.log('ERROR:', error)
//   })
// console.log('Hola')


function dividir(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('No puedo dividir entre cero...')
    } else {
      resolve(a / b)
    }
  })
}

// dividir(7, 0)
//   .then(resultado => {
//     console.log(resultado)
//   })
//   .catch(error => {
//     console.log('ERROR:', error)
//   })

async function asyncDividir() {
  const resultado = await dividir(3, 2);
  console.log(resultado);
}


const numbers = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]

const promises = numbers.map(number => dividir(10, number))
Promise.all(promises)
  .then(result => {
    console.log(result)
  })



// Resolver múltiples promesas