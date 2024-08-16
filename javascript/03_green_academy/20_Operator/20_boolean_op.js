/* 
  그리고 - and &&


  또는 - or ||  

  부정(아니야~~!) - not ! 
*/

  let result  = null; //비어있다

// and 의 개념  - 조건1 && 조건2 (양쪽 다 참이어야 그 결과도 참)
  result = true && true;
  result = true && false;

// or 의 개념 - 조건1 || 조건2 (양쪽이 거짓이어야 그 결과도 거짓)
  result = true || false;
  result = false || false;

// not 의 개념 - 부정(반대로)
  result = !result;

console.log(`result = ${result}`);