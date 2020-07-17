const todos = [{
        id: 1,
        text: "숙제하기",
        isCompleted: true
    },
    {
        id: 2,
        text: "쓰레기 버리기",
        isCompleted: true
    },
    {
        id: 3,
        text: "병원가기",
        isCompleted: false
    },
];



// filter 조건에 맞는 값만 검색
const notDone = todos.filter(function (todo) { //실시간 검색 원리
    return todo.isCompleted === false;
})
console.log(notDone);

const thanOne = todos.filter(function (num) {
    return num.id > 1
})
console.log(thanOne);



















//while
// let i = 0;
// while (i < 10) {
//     console.log(`for loop number :: ${i}`);
//     i++;
// }

// forEach

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i]);
// }

// todos.forEach(function (todo) {
//     console.log(todo);
// })


// todos.forEach(function (todos, index) {
//     console.log(index);
// })

// //배열의 각 텍스트를 출력
// todos.forEach(function (todo, index) { //todo는 임의설정값
//     console.log(todo.text);
//     console.log(todo);
// })

//map 배열을 다른형태로 변경할때
// const ids = todos.map(function (todo) {
//     return todo.id;
// })
// console.log(ids);