// console.log(window);

// window.location.href = "http://naver.com";
// console.log(window.location);

//single element

// console.log(document.getElementById("my-form"));
const form = document.getElementById("#my-form");
// const form = document.querySelector("#my-form");
const message = document.querySelector(".message");
const formwrap = document.getElementsByClassName(".form-wrap");
// console.log(message);


const button = document.querySelector("#submit-btn");
button.style.background = 'red';

button.addEventListener('click', function (event) {
    event.preventDefault(); //event 기능 고정 
    console.log(event);
    const ul = document.querySelector("#users");
    //마지막 글자 바꿔보기(마우스 좌표값 넣기)
    ul.children[3].innerHTML = "+_+...............";
    ul.children[3].innerHTML = event.pageX;
    document.querySelectorAll('.item')[3].classList.add('active');

    document.querySelector('h2').innerHTML = "Javascript"; //클릭하면 h2변경하기
    const h2 = document.querySelector('h2').innerHTML;
    //topperCase()로 변경 
    document.querySelector('h2').innerHTML = h2.toUpperCase();
})

// $('btn').addClass('active');
// $('btn').removeClass('active'); //제이쿼리
// $("#submit-btn").click(function(){

// }) 제이쿼리

//Multiple element

// const ul = document.querySelector("#users");
// // ul.remove()
// ul.children[1].innerText = "Hello"
// ul.children[3].innerText = "World"
// ul.firstElementChild.innerText = "frontend"
// ul.lastElementChild.innerText = "Javascript";

// const myform = document.querySelector(".form-wrap");
// // myform.remove()


// const items = document.querySelectorAll(".item");
// items[0].innerHTMl = "Hello";
// console.log(items);

//items 2번째거는 3번째 4번째 다른걸로
// const items = document.querySelectorAll(".item");
// items[1].innerHTMl = "Bye";
// console.log(items);

//하드코딩 : 한줄한줄 직접 작업


//배열의 인덱스2 요소만 콘솔에 찍히게

//forEach -> items 반복문 돌리고, 배열.forEach()
// items.forEach(function (item) {})
// console.log(item)