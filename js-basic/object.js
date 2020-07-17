// object는 중괄호 (배열은 대괄호)
//object : key , values
const Me = {
    name: "bonnie",
    firstName: "Ji hye",
    lastName: "Ryu",
    age: 28,
    classes: ["front-end", "back-end", "s/w"],
    address: {
        city: "대구",
        nation: "한국",
        area: "수성구"
    }
}
// object의 키의 값을 변경할때는 object.key = 변경할 값;
Me.name = "한국IT교육원";
console.log(Me.name);

// classes, "s/w"제거
Me.classes.pop();
console.log(Me.classes);

// address에 zip : 4440 추가
Me.address.zip = 4000;
console.log(Me.address);
// console.log(person);
// console.log(person.age);

//city를 출력하고 싶을때
const {
    address: {
        city,
        area
    }
} = Me;
console.log(city);

// concatenation "" + name -
// const person1 = {
//     name: "IT school"
// }

// console.log(person1.name);

//  // 콘솔에 변수넣을때는 역슬러쉬에 중괄호!!!!
// console.log(`이 학원의 이름은 ${person1.name} 입니다.`); 

// const {
//     firstName,
//     lastName
// } = Me;

// console.log(firstName, lastName);

//object만들기
const like = {
    like1: "아기고양이",
    like2: "떡볶이",
    like3: "개발자",
    travel_lover: true,
    fruits: ["복숭아", "딸기", "파인애플"],
    books: {
        social: "a",
        informative: "b",
        technology: "c"
    }
}
console.log(like);

const jsonData = JSON.stringify(like); //like가 JSON형태로 변환

console.log(jasonData, jsonData.name);
console.log(like, jsonData); //like 와 jsonData 둘다 출력