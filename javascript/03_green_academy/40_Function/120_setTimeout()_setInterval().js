/* 
  시간을 고려한 타이머 함수 

  1. setTimeout(콜백함수, 시간);
    - 지정한 시간이 경과한 후에 딱 한번만 함수를 실행 해 달라고 예약 

  2. setInterval(콜백함수, 시간);
    - 지정한 시간 간격으로 반복적으로 함수를 실행 해 달라고 예약 
*/

// 1. setTimeout(콜백함수, 시간);
setTimeout(() => {
  console.log('첫번째 메세지');
}, 5000);

setTimeout(() => {
  console.log('두번째 메세지');
}, 3000);

setTimeout(() => {
  console.log('세번째 메세지');
}, 1000);

// 2. setInterval(콜백함수, 시간);
let i = 1;
setInterval(() => {
  // console.log(`${i}-Hello~`);
  i++;
}, 1000);
