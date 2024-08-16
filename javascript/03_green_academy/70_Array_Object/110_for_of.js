/*
  advanced한 for ~ of 반복문

  for(let item of 배열명){

  }

    => 배열의 원소 열거를 쉽게 할 수 있는 반복문
   */

const friends = ['둘리', '또치', '도우너'];
// for(let i = 0; i < friends.length; i++){
//   console.log(friends[i]);
// }

for (let friend of friends) {
  console.log(friend);
}

// 문제 ) str 변수에 문자열로 한 줄로 저장하여 출력하시오.
let str = '';
for (let friend of friends) {
  str += friend;
}
console.log(`str = ${str}`);

// 문제) for~of문을 사용하여 num 배열에서 3의 배수만을 콘솔창에 출력하시오
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let n of num) {
  if (n % 3 === 0) {
    console.log(n);
  }
}
