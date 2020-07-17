//lv.1 (함수만들기)
// 함수를 만들어서 좋아하는 과일 2개를 인자로 입력받아 return을 `좋아하는 과일은 000,000입니다.`

function fruits(fruit1, fruit2) {

    return `좋아하는 과일은 ${fruit1 + fruit2}입니다.`;
}
const favorite = fruits("strawberry", " mango");
console.log(favorite);
// console.log(`좋아하는 과일은 ${favorite}입니다.`); 이렇게 쓸 필요 없다. 함수를 쓰는 목적에 맞지 않음.


//lv.2 (평균구하기)
//값은 3개만 받도록, 숫자만 3개

function avg(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
const myNum = avg(14, 15, 16);
console.log(myNum);

//lv.3
//인자를 하나만 숫자로 받습니다. 받은 숫자만큼 함수안에서 for loop문으로 돌려주기. 
//전통for문 사용, return없음, console.log(i)

function Number1(num) {
    for (let i = 0; i < num; i++) {
        console.log(i);
    }
}
Number1(10);