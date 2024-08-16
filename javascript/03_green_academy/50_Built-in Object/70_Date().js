const now = new Date(); // 현재시점의 날짜 시간 정보 추출

// 년월일
console.log(`${now.getFullYear()}년`);
console.log(`${now.getMonth() + 1}월`); // 0 ~ 11사이로 나옴 
console.log(`${now.getDate()}일`);

// 시분초
console.log(`${now.getHours()}시`);
console.log(`${now.getMinutes()}분`);
console.log(`${now.getSeconds()}초`);


const day = now.getDay(); // 0 ~ 6(일 ~ 토)
// 문제) 콘솔창에 일요일 ~ 토요일 중 해당 요일로 출력되는 코드 작성하시오
// const dayName = '';

// 방법 1 - switch문 
switch(day){
  case 0 : days = '일요일'; break;
  case 1 : days = '월요일'; break;
  case 2 : days = '화요일'; break;
  case 3 : days = '수요일'; break;
  case 4 : days = '목요일'; break;
  case 5 : days = '금요일'; break;
  case 6 : days = '토요일'; break;
}
console.log(days);

// 방법2 - 배열
const dayName = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
console.log(`dayName = ${dayName[day]}`);


// 1970-01-01 00:00:00 부터 지금까지 경과한 시간 출력 - 밀리세컨즈(1000분의 1초)
console.log(now.getTime());
console.log(now.valueOf());

/* 
  1s = 1000ms
  1m = 60 * 10000ms 
  1h = 60 * 60 * 10000ms
  1day = 24 * 60 * 10000ms 
  */
// console.log(``);
// console.log(``);
// console.log(``);