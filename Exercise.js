//Soluzione con spread operator ma non è possibile andarlo a ciclare o al meno sarebbe inutile andarlo a ciclare utilizzando uno spread operator
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));



//Soluzione senza spread operator ma con possibilità di ingrandire l'array 
function sum2(numbers) {
  let sum = 0;
  numbers.forEach(element => {
    sum = element + sum;
  });
  return sum;
}

const numbers2 = [1, 2, 3, 5, 6, 7, 8, 9];
console.log(sum2(numbers2));