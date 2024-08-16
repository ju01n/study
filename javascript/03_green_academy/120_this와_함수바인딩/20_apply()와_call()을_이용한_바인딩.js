/*
  1. 호출할 함수.apply(this에 바인딩시킬 객체명, 배열데이터)

  2. 호출할 함수.call(this에 바인딩시킬 객체명, 데이터를 나열)

  3. apply(), call() 함수가 bind()와 다른점은 즉시 호출 한다는 점
*/

function weather(when, state){
  this.when = when;
  this.state = state;
}

// 예제1 - 생성자함수의 this에 객체를 바인딩 - apply()
const today = {}; // 빈 객체
weather.apply(today, ['오늘', '맑음']);

console.log(today.when);
console.log(today.state);

// 위 코드를 for ~ in을 이용하여 출력하시오.
for (let prop in today) {
  console.log(today[prop]);
}

// 예제 2 - 생성자함수의 this에 객체를 바인딩 - call()
const tomorrow = {}; // 빈 객체
weather.call(tomorrow, '내일', '흐림');

console.log(tomorrow.when);
console.log(tomorrow.state);

// 예제 3 - 표준배열 메소드 push()의 this에 연동
const hani = {name : '하니', length:1};
Array.prototype.push.apply(hani, [15]);
Array.prototype.push.apply(hani, [30]);

console.log('hani = ', hani);

// 예제 4 - 사용자 정의 함수 내부에 있는 this에 연동
const say = function(city){
  console.log(`안녕, 난 ${city}에 사는 ${this.name}라고 해`);
}
say.apply(hani, ['서울'])
say.call(hani, ['인천'])