/* 
  매개변수를 가진 함수
  
    1. 함수 호출 시 값을 전달 할 수 있다.
    2. 매개변수를 parameter 라고 한다.
    
    function 함수명(매개변수1, 매개변수2, ... 매개변수 n){
        명력문;
    }
    함수명(인자1, 인자2, ... 인자 n)
*/

// 함수의 선언
function makeCoffee(c, p, s) {
  console.log(`커피 ${c}스푼`);
  console.log(`프림 ${p}스푼`);
  console.log(`설탕 ${s}스푼`);
  console.log(`커피 한 잔 완성`);
  console.log(`----------------`);
}
makeCoffee(1, 2, 3);
makeCoffee(2, 4, 10);


//문제1 - 두개의 매개변수 x, y에 값을 전달받아 그 합을 출력하는 addFn 함수를 선언하고, 인자 10, 20을 넣어 호출하는 코드를 작성하시오
function addFn(x, y){
  console.log(x + y);
}

addFn(10, 20);

//문제2 - 세개의 숫자를 매개변수 a, b, c에 전달받아, 그 곱을 출력하는 mulFn 함수를 선언하고, 인자 20,30,40을 넣어 호출하는 코드를 작성하시오.
function mulFn(a, b, c){
  console.log(a * b * c);
}
mulFn(20, 30, 40);