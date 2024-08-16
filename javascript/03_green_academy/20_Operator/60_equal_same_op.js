/*
  1. 동등연산자 : ==, !=
  2. 일치연산자 : ===, !==
  3. 비교연산자 : >, >=, <, <=

  -> 위 연산자들의 공통점은 연산자결과가 t/f 중 하나라는 것  -> 조건식에 많이 쓰임

*/

const score1 = 100; //number
const score2 = '100'; //string

// == 동등연산자 : 값만 비교
console.log(`score1 == score2 결과는 ${score1 == score2}`); //true
console.log(`score1!= score2 결과는 ${score1 != score2}`); //false

// === 일치연산자 : 값과 타입을 비교 (권장)
console.log(`score1 === score2 결과는 ${score1 === score2}`); //false
console.log(`score1 !== score2 결과는 ${score1 !== score2}`); //true

// 비교연산자
const duly = 7;
const micol = 7;

console.log(duly > micol); //f
console.log(duly >= micol); //t
console.log(duly < micol); //f
console.log(duly <= micol); //t

