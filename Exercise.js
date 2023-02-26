let numberStore = [0, 1, 2];
let newNumber = 3;

function insert(newNumber, rest){
  let arr;
  return arr = [...rest, newNumber];
}

console.log(insert(newNumber, numberStore));
numberStore.push(newNumber);
console.log(numberStore);