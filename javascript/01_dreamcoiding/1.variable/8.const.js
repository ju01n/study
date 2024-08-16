// let : 재할당이 가능
let a = 1;
a = 2; 

// const : 재할당 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi';
//console(text); TypeError: Assignment to constant variable.

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name : 'apple',
  color: 'red',
  display: '🍎'
};
// apple = {};
console.log(apple);
apple.name = 'orange';
apple.display = '🍊';
console.log(apple) // apple이 가르키는 데이터 주소를 따라가 그곳의 내용을 바꾼 것이기 때문에 바뀜