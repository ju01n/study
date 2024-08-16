/*
    문제) 현재 나의 통장잔액은 3만원이다.
        저금할 금액을 전달받아 합산해서 총액을 알려주는 함수를
        선언 및 호출하고 싶다.

        화면에 출력 => "현재 통장잔액은 35000원 입니다."

        => 코딩시 필요한 변수는?
            1. 함수명 : saveFn
            2. 통장잔액변수 : totMoney
            3. 매개변수 : money
*/

let totMoney = 30000; //전역변수 

function saveFn(money) { //매개변수는 지역변수 개념!! 
  // let totMoney = 30000; : 함수 안에서 선언  -> 누적이 되지 않음
  let bonus = 100; //지역변수 : {}안에서만 인식 
  totMoney += money;
  console.log(`현재 통장잔액은 ${totMoney}원 입니다.`);
}
//console.log(bonus); //error 지역변수는 밖에서 사용 할 수 없음 
saveFn(5000);
saveFn(5000);
saveFn(5000);
