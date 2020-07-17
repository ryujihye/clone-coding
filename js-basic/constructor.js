// constructor function 
function Person(firstName, lastName, dob) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //시스템에서 사용되는 날짜로 반영
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    //이사람의 getFullName = function, return 이름, 성
    this.getFullName = function () {
        return this.firstName + this.lastName;
    }
    //이사람의 생년월일의 요일구하기
    this.Birthday = function () {
        return this.dob.getDay();
    }
    //이사람의 생년월일의 달구하기
    this.Month = function () {
        return this.dob.getMonth();
    }
}

const today = new Date('2020-06-28'); //일요일부터 [0] ~
console.log(today.getFullYear());
console.log(today.getDay());
console.log(today.getMonth()); //[0]부터~

if (today.getDay() === 4) {
    console.log('오늘은 목요일입니다');
} else if (today.getDay() === 5) {
    console.log('오늘은 금요일입니다');
}


//prototype (효용성 다시 숙지)
// Person.prototype.getFullName = function () {
//     return this.firstName + this.lastName;
// }
// Person.prototype.getBirthYear = function () {
//     return this.dob.getBirthYear();
// }

// console.log(new Person);




//인스턴스화 instantiate
const Person1 = new Person('bonnie', ' ryu', '1993-03-03');
// console.log(Person1);
const Person2 = new Person('lilly ', 'yan', '2000-01-01');
// console.log(Person2);

// console.log(Person1.dob);

console.log(Person2.firstName + Person2.dob);

console.log(Person1.getBirthYear());

console.log(Person1.getFullName());

console.log(Person2.Birthday());

console.log(Person2.Month());