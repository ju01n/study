/*

  Set 생성자함수를 이용한 객체
    1. Set은 중복을 허용하지 않으며, value만 저장하는 자료구조

    2. 문법
      const mySet = new Set();
*/

// 비어있는 Set자료구조 생성
const mySet = new Set();

// 데이터저장
mySet.add('둘리');
mySet.add('도우너');
mySet.add('마이콜');

mySet.add('둘리');
mySet.add('도우너');
mySet.add('마이콜');

// 데이터삭제
mySet.delete('도우너');

// 데이터 존재여부 확인
console.log(mySet.has('둘리')); // true
console.log(mySet.has('도우너')); // false

// Set에는 유일무의한 값만 저장된(중복허용X)
console.log(`mySet에 저장된 요소의 개수는 ${mySet.size}`); // 3

// 모든 데이터 삭제(비우기)
mySet.clear();

// for ~ of 반복문을 이용한 출력
for(let user of mySet){
  console.log(user);
}