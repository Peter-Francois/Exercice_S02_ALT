class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, 
                lastName: string,
                age: number,)
                {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age
                }
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

}
// Méthodes : getFullName(): string, isAdult(): boolean

// Tests à faire fonctionner :
const person = new Person("John", "Doe", 25);
console.log(person.getFullName()); // "John Doe"
//console.log(person.isAdult()); // true