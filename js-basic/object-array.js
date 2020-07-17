const todos = [{
        id: 1,
        text: "숙제",
        isCompleted: true
    },
    {
        id: 2,
        text: "쓰레기버리기",
        isCompleted: true
    },
    {
        id: 3,
        text: "병원",
        isCompleted: false
    },
];

console.log(todos.length);

//2번째 배열의 2번째 요소 출력하기
console.log(todos[1].text);

//id 3번 요소에 time : "2020-07-01"추가
todos[2].time = "2020-07-01"
console.log(todos);


const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//object로 다시변환
const todoObject = JSON.parse(todoJSON)

//clg
console.log(todoObject);