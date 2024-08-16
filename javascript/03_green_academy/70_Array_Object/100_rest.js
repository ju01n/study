// 1. 배열에서의 rest
const numbers = [10, 20, 30, 40, 50];

  // 배열 비구조 할당을 통해 첫번째 값을 꺼내고, 나머지를 num에 저장
    const [first, ...num] = numbers;

    console.log('frist =', first);
    console.log('num =', num);
    console.log('----------------------');


// 2. 객체에서의 rest
const car = {
  carname : '그랜저',
  color : 'silver',
  door : 5
};
// 객체 비구조할당을 통해 door값을 꺼내고, 나머지를 rest에 저장
const {door:cardoor, ...rest} = car;
console.log('cardoor =', cardoor);
console.log('rest =', rest);
console.log('----------------------');

// 3. 함수에서의 rest
// 함수에 전달되는 인자의 개수가 몇 개가 될 지 모르는 상황에서 그것을 다 받아야 할 때 ...rest 파라미터를 사용
const hab = function(...rest){
  console.log(`rest = ${rest}`); // 배열

  let tot = 0;
  // rest 배열에 저장된 값의 총 합
  for(let i = 0; i < rest.length; i++){
    tot += rest[i];
  }
  return tot;
};
const sum = hab(1, 2, 3);
console.log(`sum = ${sum}`);