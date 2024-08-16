/* 
  사용자정의 생성자함수

  const hong = {name : '홍길동', age : 20};
  const duly = {name : '둘리', age : 7};
  const hani = {name : '하니', age : 15};

  위와같이 데이터구조가 같은 객체를 동적으로 만들어야 할 때 생성자함수 사용을 고려 해 볼 수 있다.

  -> 생성자함수는 {key:value}의 쌍 형태로 된 객체변수를 생성하는 또다른 방법이다. 

  -> property와 method를 미리 설게도에 디자인 후, new 키워드를 사용해서 객체 변수를 생성한다. 

  -> 생성자함수의 이름은 대문자로 시작하는게 관례 

*/

// 설계도(생성자함수) -> 화살표 함수는 쓰지 않음
function Character(name, age){
  this.name = name;
  this.age = age;

  this.info = function(){
    console.log(`나는 ${this.age}세의 ${this.name}입니다.`);
  }
}

const hong = new Character('홍길동', 20);

console.log('hong = ', hong);
console.log(hong.name);
console.log(hong.age);
hong.info(); //info : 메소드

const duly = new Character('둘리', 7);
console.log('duly = ', duly);
duly.info(); //info : 메소드

const hani = new Character('하니', 15);
console.log('hani = ', hani);
hani.info(); //info : 메소드


    /*
        문제)아래와 같은 객체데이터를 생성하는 생성자함수를 설계하시오.

        const myCar = new Car('제네시스', '블랙'); 하면

        {
            name:'제네시스', 
            color:'블랙', 
            info : function(){~~}                
        }

        myCar.info() 하면 콘솔창에 
        '이번에 새로 뽑은 차는 블랙컬러의 제네시스 입니다.'와
        같이 출력
    */

        function Car(name, color){
          this.name = name;
          this.color = color;

          this.info = function(){
            console.log(`이번에 새로 뽑은 차는 ${this.color}컬러의 ${this.name}입니다.`);
          }
        }

        const myCar = new Car('제네시스', '블랙');
        myCar.info();