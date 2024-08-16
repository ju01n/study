/*
  1. 객체란?
    여러개의 기본 데이터 타입 값들을 하나로 묶어 놓은 것

  2. 리터럴 (literal) - 사람이 이해할 수 있는 문자나 약속된 기호를 사용해서 값을 생성하는 표기법

  3. 객체의 형태
    {key : value}
    {porperty : value}
  
  4. 객체변수에 저장된 데이터 출력 -> 객체변수명.프로퍼티명 
*/

// 저장하고 싶은 데이터 - 'IU', '아이유', '청담동', 30
const userid = 'IU';
const username = '아이유';
const address = '청담동';
const age = 30; 

// 객체변수 : literal 방식 (직접 손으로 쓰는 것)  --> 리터럴방식으로 객체 변수를 선언했다!   
// iu 변수에 저장되는 값은 0x01FF 와 같은 주소값이다. 
const iu = {
  //property or key 
  userid : 'IU',
  username : '아이유',
  address : '청담동',
  age : 30,
  'representative song' : '좋은날'
};

// 보통은 . 찍고 사용하는 표기법을 씀
console.log(iu.userid);
console.log(iu.username);
console.log(iu.address);
console.log(iu.age);
// 대괄호 표기법 
console.log(iu['representative song']);
console.log(iu['userid']);
console.log(iu['username']);
console.log(iu['address']);
console.log(iu['age']);

