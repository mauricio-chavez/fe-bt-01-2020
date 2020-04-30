import addController from './controllers/add'

const calculatorForm = document.querySelector('#calculator-form')
const addButton = document.querySelector('#add')

calculatorForm.addEventListener('submit', (e) => e.preventDefault())
addButton.addEventListener('click', addController)
