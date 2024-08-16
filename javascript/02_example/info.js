// 2015 [es5]
// 2015이후 [es6]

// 옛날에는
// var maxlevel = 99;
// var maxlevel = 100; <<만약 맥스레벨이 100이되면
// console.log(maxlevel); << 콘솔로그에도 100으로 변경됨 

// const - 상수, 재할당 불가능한 변수, 고유한 변수, 초기세팅할때 씀 
// const maxlevel = 99;
// const maxlevel = 100; //두번선언하면 오류
// console.log(maxlevel);

// let - 재할당 가능한 변수
// let curr = 1; //현재 레벨 1로 설정, 
// curr = 10; //재할당 
// console.log(curr);

// 선택자
// $('.name') 제이쿼리에서는 모든 name선택될것
// const name = document.querySelector('.name') //js에서 선택자 - 단일선택 (쿼리셀렉터)
// name.style.color = '#f00'; // css=color변경 문법 

// const nameList = document.querySelectorAll('.name'); 
// name.style.color = '#f00'; 자바스크립트에서는 통하지 않음 - 노드리스트들이 선택됨:꾸밀 수 없음
// nameList.forEach(element => {
// console.log(element);
// element.style.color = '#f00'; //세개를 다 꾸밀 수 있다 
// element.classList.add('active'); //active라는 클래스 추가 
// element.classList.remove('active'); //active라는 클래스 삭제
// console.log(element.classList.contains('show')); //show라는 클래스를 포함하고 있습니까?

//name.ineerText = '1';
//name.innerHTML = '<h1>222</h1>';

// 자바스크립트에서는 클래스를 추가/삭제하는 방법으로 구현함, 여러 css트랜지션을 활용해 구현한다. 

// //클릭 이벤트주기
// const name = document.querySelector('.name');
// name.addEventListener('click',()=>{ //arrow-function
//     name.innerText = '111'; 
// })
//     console.log('111');

//클릭이벤트 각각 빨간색으로 주기 
// const nameList = document.querySelectorAll('.name');
// nameList.forEach(element =>{
//     element.addEventListener('click',(e)=>{
//         console.log(e.currentTarget); //currenttarget = this
//         e.currentTarget.style.color = '#f00';
//     })
// });

// 태그넣기 
// const list = document.querySelector('.list');
// document.createElement('li'); //1. 문서에서 li라는 변수에 담고
// li = innerHTML = `<li>111</li>`; 2.
//list.append('<li>111</li>') //append-태그 인식이 안됨 
// html = `<li>111</li>`; 태그로 인식 ㄴ

const list = document.querySelector('.list');
const listAll = document.querySelector('li');
const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', () => {
    li = document.createElement('li');
    li.innerHTML = `<li>111</li>`;
    list.append(li);
})

document.addEventListener('click', function (e) {
    if (e.currentTarget && e.target.id == 'name') {
        e.target.style.color = '#f00';

    }
});

// 전체를 선책 - target
// 부모 - 자식까지 선택하는 것 currentTarget