function sum(...rest) {
  let sum = 0;
  rest.forEach(element =>  sum = sum + element);
  return sum;
}

console.log(sum(1, 2, 3, 4, 5));