class Person {
    #firstName;
    #lastName;
    #age;

    constructor(firstName, lastName, age){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age
    }

    set firstName(name){
        if(typeof name === "string"){
            this.#firstName = name;
        }
    }
    get firstName(){
        return this.#firstName;
    }

    set lastName(name){
        if(typeof name === "string"){
            this.#lastName = name;
        }
    }
    get lastName(){
        return this.#lastName;
    }


    set age(age){
        if(typeof age === "number"){
            this.#age = age;
        }
    }
    get age(){
        return this.#age;
    }

    get fullName(){
        return this.#firstName + " " + this.#lastName + " " + this.#age;
    }
}
    
const person = new Person('Mario', 'Rossi', 25);

console.log(person.fullName);
    
person.firstName = 'Maria';
person.lastName = 'Verdi';
person.age = 45;

console.log(person.fullName);   