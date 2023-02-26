function sum(numbers) {
  let [num1, num2, num3] = [...numbers]; 
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];
console.log(sum(numbers));