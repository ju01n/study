'use strict';

const user = {
  name : '둘리',
  // login : {id : 'duly', pwd : 1234}
}

// 1. 존재하지 않는 변수를 사용하려고 하면 에러 발생
// console.log(micol);

// 2. 존재하는 변수의 없는 속성을 출력하려고 하면 undefined
console.log(user.login);

// 3. user.login 자체가 없기 떄문에 에러 발생
// console.log(user.login.id);

// 문제) user.login 이 존재하면 id 속성을 출력하시오

// 전통적인 옵셔널 체이닝
if(user.login){
  console.log(user.login.id);
}

// 새로운 옵셔널 체이닝 문법
console.log(user.login?.id);

/*
  * ? (옵셔널 체이닝)

  * 물음표 왼쪽에 있는 값이 null, undefined 이면
  * 오른쪽의 .id를 더이상 실행하지 않고 undefined를 남겨준다.
  * 
  * 결과적으로 에러가 발생하지 않아 실행이 멈추지 않음
*/