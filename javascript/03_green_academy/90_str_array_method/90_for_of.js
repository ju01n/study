/*
  advanced한 for ~ of 반복문

  형태 :
    for(let item for 배열명){

    }

    배열의 원소 열거를 쉽게 할 수 있는 반복문
*/

const friends = ['둘리', '또치', '도우너'];

for(let friend of friends){
  console.log(friend);
}

// 문제) for ~ of문을 사용하여 num 배열에서 3의 배수만을 콘솔창에 출력하시오.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let num of nums){
  if(num % 3 === 0){
    console.log(num);
  }
}