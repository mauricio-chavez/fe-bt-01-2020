const logger = require('./logger')
const _ = require('underscore') 

logger('Hola mundo')

_.forEach(['naranjas', 'manzanas', 'duraznos'], (fruit) => {
  console.log(fruit.toUpperCase())
})
