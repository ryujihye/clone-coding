// array - multiple values
const numbers = new Array(1, 2, 3, 4, 5, 6); // 이렇게 선언하거나
console.log(numbers);
console.log(numbers[4]);

//various
const fruits = ["사과", "오렌지", "복숭아", 10, true]; // 이렇게 하거나 같음
console.log(fruits);
console.log(fruits[1]);
//
fruits[3] = "포도";
console.log(fruits);

// push
fruits.push("망고");
console.log(fruits);

// pop
fruits.pop();
console.log(fruits);

// unshift
fruits.unshift("banana");
console.log(fruits);

//indexOf
console.log(Array.isArray(fruits)); // 이것이 배열인지 아닌지 확인시 
console.log(fruits.indexOf('복숭아'));

// includes
const isExist = fruits.includes("복숭아"); //배열에 복숭아가 있는지 없는지 확인. (없으면 -1출력)
console.log(isExist);