const numbers = [5, 70, 3, 10, 85, 1, 7];

const mayor = numbers.reduce((accumulator, currentValue) => {
  if (accumulator < currentValue) {
    return currentValue;
  } else {
    return accumulator;
  }
});

console.log(mayor);

// 1 (acumulador: 5, currentValue: 5)
// 2 (acumulador: 5, currentValue: 70)
// 3 (acumulador: 70, currentValue: 3)
// 4 (acumulador: 70, currentValue: 10)
// 5 (acumulador: 70, currentValue: 85)
// 6 (acumulador: 85, currentValue: 1)
// 7 (acumulador: 85, currentValue: 7)

// returns 85
