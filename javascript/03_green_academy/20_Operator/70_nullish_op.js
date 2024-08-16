/*
  ?? = 널(Null) 병합연산자

  왼쪽 피연산자의 값이 null, undefined이면 오른쪽 피연산자를 반환(return)하고, 
  그렇지 않으면 왼쪽 피연산자의 값을 반환하는 논리연산자
  
*/

let dnldData = null;

dnldData = '아기공룡과 친구들';
let result = dnldData ?? '아직 다운로드 받은 데이터가 없습니다.';

console.log(`result = ${result}`);