/*
  1. 여러 객체가 공통으로 사용할 함수를 가져다 쓰는 개념

  2. 함수.bind(this에 바인딩할 객체 명)

  3. bind()가 apply(), call()과 다른 점은 새로운 함수를 반환한다는 것이다.
*/


function weather(){
  console.log(this);
  console.log(`${this.when} 날씨는 ${this.state}`);
}
weather();

// 예제 1
const today = {
  when : '오늘',
  state : '맑음'
};

// today 객체를 this에 바인딩한 새로운 함수
const weatherToday = weather.bind(today);

weatherToday(); // 새로 만들어진 함수 호출

// 예제 2
const tomorrow = {
  when : '내일',
  state : '흐림'
}
// tomorrow 객체를 this에 바인딩한 새로운 함수
const weatherTomorrow = weather.bind(tomorrow);
weatherTomorrow();