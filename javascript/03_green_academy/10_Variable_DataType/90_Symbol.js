/*
  * 유일성을 보장하는 symbol()
*/

const sym1 = Symbol(); // sym1에는 우주에서 유일한 고유값이 저장됨
const sym2 = Symbol();

// 생성된 심벌값 비교
console.log(`sym1 === sym2의 결과는 ${sym1 === sym2}`); // false

// 다른 외계 행성으로부터 전달받은 member 객체
const member = {
  name : '둘리',
  id : 'duly',
  pwd : 1234
}

// member.pwd = '7890'; // 덮어씌워짐 1. 충돌이 날 수 있는 위험부담 소지

// Symbol()를 이용해 충돌을 회피하는 안전한 방법
// 다른 사람이 만든 객체변수를 가지고 와서 사용 할 경우
// 내가 추가한 프로퍼티명과 중복되어 충돌할 수 있는 상황을 피할 수 있음
const pwd = Symbol();

// 기존의 pwd는 그대로 유지하면서, 새로운 pwd 속성이 추가됨
member[pwd] = '7890';

console.log(member);