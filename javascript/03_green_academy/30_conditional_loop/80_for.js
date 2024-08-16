/* 
  for 반복문
    1. 횟수를 정해놓고 반복처리 할 때 유리 
    2. 변수초기화는 딱 한번만 실행 

    for(변수초기화; 조건식; 증감식){
      명령문;
    }

*/

// 문제1 - 0~9까지 콘솔창에 출력하시오.
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

// for 반복문을 이용해서 0~9까지 출력
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 문제2. for반복문을 이용해서 1 ~ 100 합 구하기
let sum = 0;
// sum = sum + 1;
// sum = sum + 2;
// sum = sum + 3; ..... 패턴찾기!!!!!변하는 것과 변하지 않는 것 구분하기

for (let j = 1; j <= 100; j++) {
  sum = sum + j;
}
console.log(`sum은 ${sum}`); //5050

// 문제3 - 1 ~ 100 사이의 홀수의 합, 짝수의 합 출력 
let oddSum = 0;
let evenSum = 0;


for (let o = 1; o <= 100; o += 2){
  oddSum += o;
}
for (let e = 0; e <= 100; e += 2){
  evenSum += e;
}

console.log(`1~100 사이의 홀수의 합은 ${oddSum}`); //2500
console.log(`1~100 사이의 짝수의 합은 ${evenSum}`); //2550