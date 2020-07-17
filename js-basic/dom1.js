const button = document.querySelector("#submit-btn");
button.style.background = 'red';

button.addEventListener('click', function (event) {
    event.preventDefault(); //event 기능 고정 

    const name = document.querySelector("#name"); //name불러오기
    console.log(name.value);
    const email = document.querySelector("#email"); //email불러오기
    console.log(email.value);

    const li = document.createElement('li');
    // console.log(li);
    const text = document.createTextNode(`이름:${name.value}, 이메일:${email.value}`);
    li.appendChild(text);
    // console.log(li);

    const ul = document.querySelector("#users");
    ul.appendChild(li);

    name.value = "";
    email.value = "";

})
//밑에 결과값을 클릭했을때 사라지게

const user = document.querySelectorAll('.item');
user.addEventListener('click', function () {
    console.log(this);
})