const characters = document.querySelector('#characters')
const error = document.querySelector('#error')

function _getCharacters() {
  fetch('https://rickandmortyaapi.com/api/character/')
  .then(response => response.json())
  .then(data => {
    let list = ''
    for (const character of data.results) {
      list += `<li>${character.name} - ${character.status}</li>\n`
    }
    characters.innerHTML = list
  })
  .catch(err  => {
    error.textContent = 'Ha ocurrido un error'
  })
}

async function getCharacters() {
  try {
    const response = await fetch('https://ricaskandmortyapi.com/api/character/')
    const data = await response.json()
    let list = ''
    for (const character of data.results) {
      list += `<li>${character.name} - ${character.status}</li>\n`
    }
    characters.innerHTML = list
  } catch(err) {
    error.textContent = 'Ha ocurrido un error'
  }
}
