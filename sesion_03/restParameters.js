// function sumar(...numbers) {
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     sum = numbers[i] + sum
//   }
//   return sum
// }

function sumar(...numbers) {
  let sum = 0
  
  for (const number of numbers) {
    sum += number
  }

  return sum
}
