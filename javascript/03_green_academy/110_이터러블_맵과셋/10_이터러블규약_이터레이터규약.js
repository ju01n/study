/*
  1. Iterable 규약

    배열처럼 순회가능한 자료구조를 for ~ of 문으로 실행하여 반복할 때 값이 열거되어야 하며,
    내부적으로 @@iterator 메소드가 구현되어 있어야 한다는 규약

  2. Iterator 규약

    next() 메소드를 통해서 하나씩 순차적으로 열거되어야 하며,
    열거된 값은 {value:값, done:불린값} 형태이어야 한다는 규약
*/

const str = '가나다라마바사';

// 배열은 object를 상속받기 때문에 object의 메소드인 for ~ in을 사용 할 수 있음

for (let prop in str) {
  console.log(`${prop} : ${str[prop]}`);

  // console.log(str[0]);
}

// 내장된 @@iterator 함수를 호출하여 iterator 객체를 전달받음
let iterator = str[Symbol.iterator]();

console.log(iterator.next()); // {value : '가', done : false}
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());  // {value : '사', done : false}

// 순차적으로 마지막까지 열거 한 후의 value, done 값
console.log(iterator.next());  // {value : undefined, done : true}