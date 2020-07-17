const country = {
    name: "Korea",
    cities: ["서울", "인천", "대전", "대구"],
    population: 5000
}

//전통의 for문 사용헤서 cities를 하나씩 콘솔에 출력하기

for (let i = 0; i < country.cities.length; i++) {
    console.log(country.cities[i]);
    // console.log(cities);
}



const sports = ["야구", "축구", "농구", "당구", "수구", "족구"]

for (let i = 0; i < sports.length; i++) {
    console.log(sports[i], i);
}

const animals = [{
        name: "원숭이",
        size: "작음"
    },
    {
        name: "사자",
        size: "큼"
    },
    {
        name: "호랑이",
        size: "큼"
    },
    {
        name: "치타",
        size: "큼"
    },
    {
        name: "고릴라",
        size: "중간"
    },
    {
        name: "하마",
        size: "큼"
    },

    {
        name: "코뿔소",
        size: "큼"
    },

];

//전통for문
//name은 크기가 size

for (let i = 0; i < animals.length; i++) { //animal 배열의 길이보다 작을때
    // console.log(animals[i].name); //animal 각 배열의 name.
    console.log(`${animals[i].name}이고 크기는 ${animals[i].size}`);
}

const subjects = ["html", "css", "js", "vue", "react"];

//for 서브젝트의 값 구하기
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}


const fruits = [{
        name: "apple",
        color: "red"
    },
    {
        name: "tomato",
        color: "tomato"
    },
    {
        name: "bababa",
        color: "yellow"
    },
    {
        name: "kiwi",
        color: "red"
    },
    {
        name: "watermelon",
        color: "red"
    },
    {
        name: "mango",
        color: "orange"
    },
    {
        name: "orange",
        color: "orange"
    },
    {
        name: "strawberry",
        color: "red"
    },
    {
        name: "blueberry",
        color: "purple"
    },
    {
        name: "peach",
        color: "peach"
    }
]

//${name}dms {}색깔입니다.

for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i].name);
    console.log(`${fruits[i].name}은 ${fruits[i].color}색깔입니다.`);
}

const movie = {
    name: "부산행",
    country: "한국",
    actors: ["공유", "김의성", "연상호", "마동석", "정유미", "김수인"]
}

// ${movie.name}은 ${actors.length}번째 출연자는 ${actor[값]}입니다.$

for (let i = 0; i < movie.actors.length; i++) {
    // console.log(movie.actors[i]);
    console.log(`${movie.name}의 ${i+1}번째 출연자는 ${movie.actors[i]}입니다.`);
}