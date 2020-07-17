// const fruits = ["apple", "banana", "pine apple", "mango", "strawberry", "lemon", "melon", "water melon", "kiwi", "tomato"];
// const fruits = [{
//         name: "apple",
//         color: "red"
//     },
//     {
//         name: "grape",
//         color: "purple"
//     },
//     {
//         name: "watermelon",
//         color: "green"
//     },
//     {
//         name: "mango",
//         color: "mango"
//     },
//     {
//         name: "strawberry",
//         color: "red"
//     },
//     {
//         name: "tomato",
//         color: "red"
//     },
//     {
//         name: "banana",
//         color: "yellow"
//     },
//     {
//         name: "kiwi",
//         color: "green"
//     },
//     {
//         name: "papaya",
//         color: "green"
//     },
//     {
//         name: "orange",
//         color: "orange"
//     },
//     {
//         name: "peach",
//         color: "peach"
//     }
// ];
// //전통 for문
// for (let i = 0; i < 10; i++) {
//     console.log(fruits[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// for (let sweets of fruits) {
//     console.log(sweets);
// }

// //직전세대 for문
// for (let sweets of fruits) {
//     console.log(sweets);
// }
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i].name);
//     console.log(`${fruits[i].name}은 ${fruits[i].color}색입니다.`);
// }



// const sports = ["농구", "야구", "축구", "배구", "당구"];

// //forEach

// sports.forEach(function (sports) {
//     console.log(sports);
// })

// const movies = [{
//         id: 1,
//         name: "부산행"
//     },
//     {
//         id: 2,
//         name: "살인의 추억"
//     },
//     {
//         id: 3,
//         name: "스타워즈"
//     },
//     {
//         id: 4,
//         name: "미션임파서블"
//     },
//     {
//         id: 5,
//         name: "분노의질주"
//     },
//     {
//         id: 6,
//         name: "해리포터"
//     },
//     {
//         id: 7,
//         name: "반지의제왕"
//     },
// ]

// //forEach
// //1번 영화는 부산행입니다.

// movies.forEach(function (item) {
//     // console.log(item);
//     console.log(`${item.id}번 영화는 ${item.name}입니다.`);
// })
// //actor의 명을 출력
// const movie = {
//     name: "부산행",
//     actors: ["공유", "마동석", "김의성"]
// }

// movie.actors.forEach(function (actor) {
//     console.log(actor);
// })

// map

// const fruits = [{
//         name: "apple",
//         color: "red"
//     },
//     {
//         name: "orange",
//         color: "orange"
//     },
//     {
//         name: "banana",
//         color: "yellow"
//     },
//     {
//         name: "grape",
//         color: "purple"
//     },
// ];

// //map => name만 모여있는 배열 만들기

// const names = fruits.map(function (item) {
//     return item.name;
// })
// console.log(names);

// const animals = [{
//         name: "monkey",
//         size: "small"
//     },
//     {
//         name: "gorilla",
//         size: "big"
//     },
//     {
//         name: "tiger",
//         size: "big"
//     },
//     {
//         name: "lion",
//         size: "big"
//     },
//     {
//         name: "cat",
//         size: "big"
//     },
//     {
//         name: "hippo",
//         size: "small"
//     },
// ];

// const info = animals.map(function (animal) {
//     return `${animal.name}은 ${animal.size}입니다.`;
// })
// console.log(info);


// console.log(info.name);
// console.log(`${info.}은 {size}입니다.`);

// const fruits = ["apple", "orange", "banana,", "tomato", "mango"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// fruits.forEach(function (fruit) {
//     console.log(fruit);
// })

const fruits = [{
        name: "apple",
        color: "red"
    },
    {
        name: "banana",
        color: "yellow"
    },
    {
        name: "tomato",
        color: "red"
    },
    {
        name: "cherry",
        color: "cherry"
    },
    {
        name: "mango",
        color: "mango"
    },
]

fruits.forEach(function (fruit) {
    console.log(fruit);
})

const names = fruits.map(function (fruit) {
    return fruit.name;
})
console.log(names);