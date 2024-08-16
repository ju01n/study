/*
  1. 자동형변환

  2. 직접형변환
*/

// 지금 시점에서 이 변수에 할당 할 값이 없다는 것을 명시적으로 표현 
let result = null;  //'비어있다'라는 의미를 가진 아주 특별한 값! 

// 1. 자동형변환
result = 5 + '10'; //510 : 순간적으로 5를 문자열 5로 형변환 후 연결연산을 시도
result = 5 * '10'; //50 : 순간적으로 10을 숫자 10으로 형변환 후 산술연산을 시도


console.log(`result = ${result}`);

// 2. 직접형변환 - 문자열 숫자를 연산 가능한 숫자로 변환 !!!! 중요 
const age = parseInt('40');
console.log(`age변수의 타입은 ${typeof age}다`);

const year = Number('2023');
console.log(`year변수의 타입은 ${typeof year}다`);

// 3. 문자열로 전환 - 많이 쓰이진않는다 
const height = (175).toString(); 
console.log(`height변수의 타입은 ${typeof height}다`); //string