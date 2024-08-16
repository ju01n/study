/* 
  return; - 함수의 종료를 의미하며, 그 이후에 나오는 명령문은 실행 X

  return 반환값; - 함수를 호출한 곳으로 '반환값'을 돌려보내면서 종료  
*/

const kobFn = function(a, b){ //7~11 라인 실행 2 
  return a * b; //반환

  // console.log(a * b);
}

const result = kobFn(7, 100); //실행 1,  실행 3 
console.log(`result = ${result}`); //실행 4

//문제1 - 두 수를 매개변수 one, two에 전달받아 그 합을 return 하는 화살표함수 habFn을 선언하시오. 리턴받은 값을 sum 변수에 할당후 화면에 "sum = 100"과 같은 형식으로 출력하시오.

const habFn = (one, two) => {
  return one + two;
}
const sum = habFn(10, 20);
console.log(`sum = ${sum}`);