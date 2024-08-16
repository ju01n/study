// class Tiger {
//   constructor(color){
//     this.color = color;
//   }
//   eat(){
//     console.log('먹자!!');
//   }
//   sleep(){
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color){
//     this.color = color;
//   }
//   eat(){
//     console.log('먹자!!');
//   }
//   sleep(){
//     console.log('잔다');
//   }
//   play(){
//     console.log('놀자~');
//   }
// }

class Animal {
  constructor(color){
    this.color = color;
  }
  eat(){
    console.log('먹자!!');
  }
  sleep(){
    console.log('잔다');
  }
}

class Tiger extends Animal{}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal{
  constructor(color, ownerName){
    super(color); // 부모 클래스 생성자 전달
    this.ownerName = ownerName;
  }
  play(){
    console.log('놀자~!');
  }
  // 오버라이딩 overriding
  // 없다면 부모의 속성 상속
  eat(){
    super.eat(); // 부모에 있는 함수 호출 먼저 함
    console.log('강아지가 먹는다!');
  }
}
const dog = new Dog('빨강이', '엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();