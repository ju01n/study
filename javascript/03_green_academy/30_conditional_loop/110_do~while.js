/* 
  do ~ while 문

    1. 조건식을 뒤쪽에 작성
    2. 따라서 무조건 한번은 실행됨 

    do{
      명령문
    }while(조건식)
*/

let i = 6;
do {
  console.log(`i = ${i}`);
  i++;
} while (i < 5);

// 문제 - 1 ~ 100 까지의 합 출력

let sum = 0;
let n = 1;

do {
  sum += n;
  n++;
} while (n <= 100);

console.log(sum);
