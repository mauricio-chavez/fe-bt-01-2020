import add from '../models/add'
import { setResult } from '../views/add'

function addController(e) {
  e.preventDefault()
  const first = document.querySelector('#first')
  const second = document.querySelector('#second')
  const result = add(first, second)
  setResult(result)
}

export default addController