// 어디에선가 '둘리', 7이라는 데이터를 전달받았다.
// 각각의 데이터를 name, age 변수에 할당하였다.

const name = '둘리';
const age = 7;

// 그런데 위 데이터를 프로퍼티 값으로 할당하여 하나의 객체변수 duly로 만들고 싶다.
// const duly = {
//   name : name,
//   age : age
// }

// 객체의 프로퍼티명을 생략한 축약표현
const duly = {
  name,
  age
};

console.log('duly =', duly);

// 객체의 메소드를 정의 할 때 function 키워드를 생략한 축약표현
const robot = {
  name : '태권브이',

  info : function(){
    console.log(`지구를 지키는 로보트 ${this.name}`);
  },
  go(){ //function 키워드 생략 !!! 
    console.log(`${this.name}, 앞으로 가~!`);
  },
  back(){
    console.log(`${this.name}, 뒤로 돌아!`);
  }
};
robot.info();
robot.go();
robot.back();