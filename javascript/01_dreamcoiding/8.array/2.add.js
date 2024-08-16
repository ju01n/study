const fruits = ['🍎', '🍌', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); // 배열 안에 몇 개의 아이템이 있는지 ?

// for 반복문으로 나타내기
for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

// const fruits = ['🍎', '🍌', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식 💩
// fruits[3] = '🍒'; 배열에 오버라이딩 됨
// fruits[6] = '🍒'; 배열 중간에 비게 됨
fruits[fruits.length] = '🍒' // 이렇게 추가하기
console.log(fruits);

delete fruits[1]; // 삭제되고 중간에 공간이 남아있음
console.log(fruits);