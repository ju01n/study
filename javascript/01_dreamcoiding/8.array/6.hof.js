const fruits = ['🍌', '🍓', '🍇', '🍓'];
// for(let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
// }

// 더쉽게 하기~!

// 배열을 빙글 빙글 돌면서 원하는 것(콜백함수)을 할 때
fruits.forEach(function(value, index, array){
  // 이 때, 사용하지 않는 인자에 대해서는 생략이 가능
  console.log('------------------------');
  console.log(value);
  console.log(index);
  console.log(array);
})

// 간단하게 화살표 함수로 나타내기
fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을 때
const item1 = {name: '🥛', price: 2};
const item2 = {name: '🍪', price: 3};
const item3 = {name: '🍙', price: 1};
const products = [item1, item2, item3, item2];
let result = products.find((value) => {
  return value.name === '🍪'; // 쿠키를 찾아줘!
});

console.log(result);
 
// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === '🍪'); // return 생략하여 이렇게 작성 가능
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍪');
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍪');
console.log(result);

// 조건에 맞는 모든 아이템들으 새로운 배열로! 
result = products.filter((item) => item.name === '🍪');
console.log(result);
