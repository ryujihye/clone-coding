//function을 사용할때 사용목적을 항상 기억하자

function addNumbers(num1, num2) { //num1=0으로 초기값 설정 가능, array, object, string도 가능 
    console.log(num1 + num2);
    return num1 + num2
}
const sum = addNumbers(2345, 5);
console.log(sum);

function greeting(name, age) {
    return `안녕하세요? 제이름은 ${name}이고, 나이는 ${age}입니다.`;
}
const hello = greeting("bonnie", 28);
console.log(hello);



//함수를 만들고, 인자를 3개를 받는다. 이름, 학년, 학번순으로 리턴
//return -> object로. 이름,학번,학년 들어가도록 
//console.log 값출력

function abc(name, grade, idNum) {
    const info = {
        name: name,
        grade: grade,
        idNum: idNum
    }

    return info;

}
const student = abc("bonnie", "4학년", "12102601");