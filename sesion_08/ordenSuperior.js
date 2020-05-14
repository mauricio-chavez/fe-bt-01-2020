// Map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubles = numbers.map(number => {
  return number * 2;
});

// Filter

const even = numbers.filter(number => {
  return number % 2 === 0; // true 2, 4, 6 - false 5, 7, 11
});

// Reduce

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);
