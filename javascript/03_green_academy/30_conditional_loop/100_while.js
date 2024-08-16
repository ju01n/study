/* 
  while 반복문
    조건식이 true인 동안에 명령문 반복
*/

//문제1 - 콘솔창에 "아기공룡둘리" 문자열을 10번 출력하고 싶다.
// for (let i = 0; i < 10; i++) {
//   console.log('아기공룡둘리');
// }

let i = 0;
while (i < 10) {
  console.log('아기공룡둘리');
  i++;
}

//문제2 - j값이 현재 0인데, 3보다 작은동안 반복해서 콘솔창에 j값을 출력

let j = 0;
while (j < 3) {
  console.log(j);
  j++;
}

//문제3 - 1~100까지의 합을 출력하시오. (바가지역할의 변수 n, 합을 저장할 변수 sum)
let sum = 0;
let n = 1;

while (true) {
  sum += n;
  n++;

  if (n > 100) {
    break;
  }
}

console.log(`sum은 ${sum}`);
