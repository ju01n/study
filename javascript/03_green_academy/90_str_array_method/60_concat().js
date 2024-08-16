/*
    1. 문자열 합쳐서 새로운 문자열을 리턴
      문자열.concat();
    2. 배열 합치기 새로운 배열을 리턴
      배열.concat();
*/

let friends = '둘리';
const newFriends = friends.concat('하니', '또치', '도우너');

console.log(`friends = ${friends}`);
console.log(`newFriends = ${newFriends}`);


const hobby = ['노래', '영화'];
const fruits = ['사과', '바나나', '오렌지'];
const newArr = hobby.concat(fruits); // 2개의 배열을 합쳐서 새로운 배열을 반환

console.log('hobby = ', hobby);
console.log('fruits = ', fruits);
console.log('newArr = ', newArr);