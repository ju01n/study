/* 
  화살표함수의 특징 () => {} 
  
  1. 매개변수가 한 개면 ()괄호를 생략할 수 있다.
  const sumFn = (a) => {};
  const sumFn = a => {}' 
  
  2. 매개변수가 없거나 2개 이상이면 괄호를 생략 할 수 없다.
  const sumFn = () => {};
  const sumFn = (a, b) => {};

  3. 실행 할 명령문이 한 줄이면 중괄호{} 생략 할 수 있다. 
  
  4. return 이 바로 표현 가능하면 return 키워드를 생략 할 수 있다. 

*/

// 1. 화살표 함수의 기본형 
const breakfast = () => {
  return '아침식사는 김치찌개';
};
console.log(breakfast());

// 2. return 키워드 생략
const lunch = () => '점심엔 비빔밥';
console.log(lunch());

// 3. 매개변수가 1개 일 때 
const dinner = menu => `저녁은 ${menu}`;
console.log(dinner('스테이크'));