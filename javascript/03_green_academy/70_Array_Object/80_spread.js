// 배열과 객체의 데이터만을 가져와서 깊은 복사를 하는 spread 연산자

// 1. 배열에서의 spread 연산자
const friends = ['둘리', '또치'];

  // 얕은복사
  // const newFriends = friends;
  // newFriends.push('도우너');

  // console.log('friends = ', friends); // -> 원본도 영향을 받음
  // console.log('newFriends = ', newFriends);

  // 깊은복사
  const newFriends = [...friends, '희동이'];
  newFriends.push('마이콜');

  const bestFriends = [...friends, '철수', '영희', ...friends];

  console.log('friends = ', friends);
  console.log('newFriends = ', newFriends);
  console.log('bestFriends = ', bestFriends);


// 2. 객체에서의 spread 연산자
const eBoy = {
  kor : '국어',
  other : '체육, 음악, 미술',
};

const mBoy = {
  ...eBoy,
  eng : '영어'
};

const hBoy = {
  ...mBoy,
  math : '수학'
};

// 출력확인
console.log('eBoy =', eBoy);
console.log('mBoy =', mBoy);
console.log('hBoy =', hBoy);