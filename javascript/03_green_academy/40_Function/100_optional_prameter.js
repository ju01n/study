/*
  함수의 매개변수에 기본값을 할당하는 Optional Parameter
 */

  const infoFn = function(name = '홍길동', age = 5 , address = '주소없음'){
    // 1. 모든 매개변수에 값이 정상적으로 전달되었을 경우 
    //console.log(`${name}, ${age}, ${address}`);

    // 2. address 매개변수 값이 전달되지 않았을 때
    // console.log(`${name}, ${age}, ${address ? address:'주소없음'}`);

    // 3. Optional Parameter 이용한 기본값 설정
    console.log(`${name}, ${age}, ${address}`);
  };

  infoFn('둘리', 7, '쌍문동');
  infoFn('둘리', 7);
  infoFn('둘리');
  infoFn(); // 기본값으로만 나옴