/* 
  1. 함수는 여러 줄의 명령문을 묶은 코드 덩어리
    function 함수명(){
      여러 줄의 명령문
    }

    함수명(); -> 호출 방법 
*/

// 함수의 선언
function makeCoffee() {
  console.log(`커피 1스푼`);
  console.log(`프림 1스푼`);
  console.log(`설탕 1스푼`);
  console.log(`커피 한 잔 완성`);
  console.log(`----------------`);
}

// 함수 호출 => 실행
makeCoffee();
makeCoffee();
makeCoffee();

// n번 호출하고 싶을 때
for (let i = 0; i < 3; i ++){
  makeCoffee();
}