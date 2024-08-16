/*
  entries(), keys(), values()

  1. Object.entries(객체변수) - 객체의 키와 값의 쌍의 배열을 배열에 담아 리턴

  2. Object.keys(객체변수) - 객체의 프로퍼티만 모아서 배열로 리턴

  3. Object.values(객체변수) - 객체의 값만 모아서 배열로 리턴
*/

const duly = {
  name : '둘리',
  age : 7,
  address : '쌍문동'
};


const dulyEntries = Object.entries(duly);
console.log(`dulyEntries =`, dulyEntries);

// 객체의 프로퍼티만 모아 배열로 리턴
const dulyKeys = Object.entries(duly);
console.log(`dulyKeys =`, dulyKeys);

// 객체의 값만 모아 배열로 리턴
const dulyValues = Object.values(duly);
console.log(`dulyValues =`, dulyValues);
