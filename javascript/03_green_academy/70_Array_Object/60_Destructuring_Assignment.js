/* 비구조할당(구조분해할당) */

// 1. 배열의 구분 할당
// 문제) 문자열로 5개의 문자열 원소 '강아지, 고양이, 거북이, 달팽이, 토끼'를 갖는 배열변수 pet을 선언하시오.
const pet = ['강아지', '고양이', '거북이', '달팽이', '토끼'];

// pet 배열의 원소를 꺼내서 별개의 변수에 저장해야 할 일이 발생
// const puppy = pet[0];
// const cat = pet[1];
// const turtle = pet[2];
// const snail = pet[3];
// const rabbit = pet[4];

// 위 과정을 간소화하는 새로운 문법이 등장
const [puppy, cat, turtle, snail, rabbit] = pet;

// 출력확인
console.log(puppy, cat, turtle, snail, rabbit);

// 2. 객체의 구조분해 할당
const duly = {
  username: '둘리',
  age: 7,
  hobby: '초능력호이~~!',
};

// duly객체에 담긴 데이터를 꺼내서 별개의 변수에 저장해야 할 일이 발생
// const username = duly.username;
// const age = duly.age;
// const hobby = duly.hobby;

/* 위 과정을 간소화하는 새로운 문법이 등장

  객체 비구조할당에서는 프로퍼티명과 같도록 변수명을 설정
  변수명의 순서가 바뀌어도 결과는 똑같다.
*/

const [snake, dog] = pet;
const {username, age, hobby} = { // {}안은 property 이름과 같아야함
  username: '둘리',
  age: 7,
  hobby: '초능력호이~~!',
};

// 출력확인
console.log(username, age, hobby);

// 활용예제 - 함수에 배열이나 객체를 전달
const myFn = ([puppy, cat, turtle, snail, rabbit], {username, hobby, age}) => {
  console.log('myFn 함수 호출');
  console.log(puppy, cat, turtle, snail, rabbit);
  console.log(username, hobby, age);
};

myFn(pet, duly);

// 활용예제 - 두 값의 맞교환
let a = 3;
let b = 5;

[a, b] = [b, a]; // 오른쪽 배열에 5, 3 순서로 들어가고 왼쪽 배열에 다시 3, 5 순서로 할당됨

console.log(`a = ${a}, b = ${b}`); // a = 5, b = 3