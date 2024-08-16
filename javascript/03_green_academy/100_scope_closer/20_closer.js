/*
  1. 일반적으로 지역변수는 함수가 실행되는 시점에 메모리가 생성되고, 종료 될 때 소멸된다.

  2. 그런데 지역변수를 로직에서 활용하는 함수를 리턴하면 소멸되었어야 할 지연변수가 소멸되지 않고, 리턴된 함수안에서 살아남아 계속 사용 할 수 있게 된다.

  3. 이때 살아남은 변수를 유령변수라고 할 수 있으며, 리턴된 함수를 클로저라고 한다.

 */

const closerFn = function(){

  let score = 88; // 지역변수

  return function(){
      score++;
      console.log(`score = ${score}`);
  };


};//익명함수의 주소값이 저장됨


const printScore = closerFn();

printScore();
printScore();
printScore();
printScore();
printScore();