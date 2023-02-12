const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
const person2 = person1;
  
person1.firstName = "Simon";

console.log(person1);
console.log(person2);


//perché in questo caso non vengono assegnati i valori dell'oggetto ma l'indirizzo della cella di memoria.
//Quindi tutti e due gli oggetti fanno riferimento allo stesso indirizzo di conseguenza modificare un oggetto vuol dire modificare il valore nella cella di memoria