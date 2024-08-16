/* 조건연산자 / 삼항연산자 

  1. 간단한 if ~ else 구문의 약식 표현
  2. 소스코드를 간결하게 만들어 줌
*/

const age = 15;

/* if(age >= 18){
  console.log('당신은 성인입니다.');
}else{
  console.log('당신은 미성년자입니다.');
} */


// 활용 1 - 위 코드를 삼항연산자로 변환
(age >= 18) ? console.log('당신은 성인입니다.') : console.log('당신은 미성년자입니다.');

// 활용 2 - 어떤 변수에 값을 대입할 때 사용 :: 더 많이 활용됨 
const identity = (age >= 18) ? '성인' : '미성년자';
console.log(`identity = ${identity}`);