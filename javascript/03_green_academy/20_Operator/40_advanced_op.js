/*
  누적은 저축의 개념이다. 
  복합대입연산자 
    +=
    -=
    /=
    %=
*/

  let account = 1000; //계좌 잔액 

  //2만원을 저축하면 얼마가 될까? -> 21000원 
  
  account = account + 20000;
  account += 20000;

  account = account - 6000;
  account -= 6000;

  console.log(`account = ${account}`);
