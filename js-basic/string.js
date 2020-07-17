const greeting = "Hello world";

// length
// console.log(greeting.length);

// 대문자
// console.log(greeting.toUpperCase());

// 소문자
// console.log(greeting.toLowerCase());

// sub string
console.log(greeting.substring(0, 5)); //0~5번째까지 자르기
console.log(greeting.substring(6)); //6에서 끝까지 자르기

// split
console.log(greeting.split(' '));

const study = "HTML, CSS, JavaScript, React, Vue"
console.log(study.split(','));

const sport = "농구|배구|야구|사격|레슬링"
console.log(sport.substring(0, 8).split(','));