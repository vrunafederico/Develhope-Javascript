function sum(numbers) {
  let sum = 0;
  console.log(numbers)
  numbers.forEach(element => console.log(element));
  console.log(sum)
  return sum;
}

const numbers = [1, 2, 3];
console.log(sum(numbers));