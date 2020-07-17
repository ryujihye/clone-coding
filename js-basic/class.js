// class (constructor과 기능은 같은데 모양이 다르다.)
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getFullName() {
        return this.firstName + this.lastName;
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
}
const Person1 = new Person('bonnie', ' ryu', '1993-03-03');
const Person2 = new Person('lilly ', 'yan', '2000-01-01');



console.log(Person1.getFullName());
console.log(Person2.getBirthYear());