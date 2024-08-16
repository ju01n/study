// Iterable 하다는 건..! 순회가 가능하다는 것
// [Symbol.iterator]() : Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iteratorf를 리턴한다는 것은
// 순회 가능한 객체이다 ㄹ나ㅡㄴ 것을 알수 있음
// 순회가 가능하면 무엇을 할 수 있나? for .. of, spread

const array = [1, 2, 3];
for(const item of array){
  console.log(item);
}

const obj = [1, 2, 3];
for(const item in obj){ // key를 출력
  console.log(item);
}