/*
  변수타입 - 원시 (기본, Primitive)타입 - Number, String, Boolean => 값 복사

         - 참조(Reference)타입 - Object, Array, Function => 참조값 복사
*/

// 1. 원시타입의 값 복사 - 깊은 복사 (Deep Copy) : 종이복사, 파일복사와 비슷
let num = 100;
let copyNum = num;

copyNum = 200;

console.log(`num = ${num}`); // 100
console.log(`copyNum = ${copyNum}`); // 200

// 2. 참조타입의 참조값 복사 - 얕은 복사 (Shallow Copy) : 배열, 객체, 함수의 복사
const hong = {
  name : '홍길동',
  age : 30
};

// hani와 hong은 같은 주소값을 가지므로 동일한 객체를 가리키게 됨
const hani = hong; // 참조값 복사

hani.name = '하니';
hani.age = 15;

console.log('hong =', hong);
console.log('hani =', hani);

// 3. 참조변수의 깊은복사
const duly = {};
Object.assign(duly, hani);

// duly의 값을 변경 후 확인
duly.name = '둘리';
duly.age = 7;

console.log('깊은복사 후 duly와 hani 출력');
console.log('duly=', duly);
console.log('hani=', hani);
