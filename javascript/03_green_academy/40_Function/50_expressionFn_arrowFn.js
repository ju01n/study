/* 

  1. 기명함수(선언식 함수)
  function sumFn(a, b) {
    console.log(a + b);
  }

  위와 같이 선언식 함수로 작성하면, 자바스크립트 해석기는 아래와같이 '표현식 함수'로 변환

  2. 표현식 함수는 변수에 익명함수를 할당하는 방식 
  const sumFn = function(a, b){
    console.log(a + b);
  };

  3. 화살표함수 - 기존의 함수 선언 방식을 간소화 
  const sumFn = (a, b) => {console.log(a + b);}

*/

//문제1 - 매개변수 a,b에 전달받은 두 값의 차를 출력하는 표현식함수 subFn을 선언하고, 인자로 300, 200을 전달하여 호출하시오
const subFn = function(a, b){
  console.log(a - b);
};
subFn(300, 200)


//문제2 - 전달받은 두 값의 곱을 출력하는 화살표함수 mulFn을 선언하고 호출하시오.
const mulFn = (x, y) => console.log(x * y);

mulFn(15, 2);