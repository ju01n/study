/*
  Map 생성자함수를 이용한 객체

  const myMap = new Map()'

*/

// 비어있는 Map 자료구조 생성
const myMap = new Map();

// 데이터 저장
myMap.set('name', '둘리');
myMap.set(100, '아기공룡');
myMap.set(true, '빙하타고 어쩌고');

// 메소드 체인을 이용한 데이터 저장 지원
myMap.set('weight', 25).set('height', 150);
// 데이터 인출
console.log(myMap.get('name')); // 둘리
console.log(myMap.get(100)); // 아기공룡
console.log(myMap.get(true)); // 빙하타고 어쩌고

// 하나의 데이터 삭제 (메소드 체인 불가)
myMap.delete(100);

// 데이터존재여부를 확인
console.log(myMap.has('name')); // true
console.log(myMap.has(100)); // false

// 저장된 요소의 개수
console.log(`myMap에 저장된 요소의 개수는 ${myMap.size}`);

// 모든 데이터 삭제(비우기) -> 아래 콘솔창은 안나옴
myMap.clear();

// Map 은 이터러블 규약을 따르므로 for ~ of 문으로 출력 가능
for(let item of myMap){
  console.log(item); // [100, '아기공룡' ] 형태로 출력
}