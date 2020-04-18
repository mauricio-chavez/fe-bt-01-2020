const subtitulo = document.querySelector('#subtitle')
const button = document.querySelector('#button')
const link = document.querySelector('#link')
const emptyDiv = document.querySelector('.empty')
const items = document.querySelectorAll('li.item')

let currentColor = 'black'
let paragraph

function cambiarColor() {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    console.log(item.className)
    if (currentColor === 'tomato') {
      item.style.color = 'black'
      item.classList.add('negro')
      // item.style.cssText = "color: black; background: red"
    } else {
      item.style.color = 'tomato'
      item.classList.remove('negro')
      // item.style.cssText = "color: tomato; background: blue"
    }
  }

  if (currentColor === 'black') {

    const newParagraph = document.createElement('p')
    const text = document.createTextNode('Hola, mundo')

    newParagraph.appendChild(text)
    emptyDiv.appendChild(newParagraph)

    paragraph = newParagraph

    currentColor = 'tomato'
    link.setAttribute('href', 'https://duckduckgo.com')
  } else {

    emptyDiv.removeChild(paragraph)
    currentColor = 'black'
    link.setAttribute('href', 'https://google.com')
  }

}

button.addEventListener('click', cambiarColor)

console.log(button.getAttribute('nuevo'))
