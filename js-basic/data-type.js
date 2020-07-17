//string(문자), numbers(숫자), boolean(true,false), null(empty), undefined, symbol

const name = "IT School";
const age = 38;
const rating = 3.5;
const isGood = true;
const evening = null;
const nextYear = undefined;

console.log(typeof nextYear);
console.log(name);
console.log(age);
console.log(rating);
console.log(isGood);
console.log(evening);
console.log(nextYear);

//concatenation - 변수로도 사용가능
console.log("My name is " + name + "and I am " + age + "years old.");
console.log(`my name is ${name} and I aam ${age} years old.`); //현재는 이렇게 사용

const information = `저는 ${name}이고 지어진지 ${age}년 만큼 되었습니다.`
console.log(information);

const pri = "Developer"
const pri2 = "leave Korea"
const pri3 = "managing my health"