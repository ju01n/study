// const apple = {
//   name : 'apple',
//   display : function(){
//     console.log(`${this.name}: 🍎`);
//   }
// }
// const orange = {
//   name : 'apple',
//   display : function(){
//     console.log(`${this.name}: 🍊`);
//   }
// }

// 생성자 함수
// 반복적으로 작성 할 필요 없이 ! 
function Fruit(name, emoji){ // 대문자로 시작!! 
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; // 생략 가능
}

const apple = new Fruit('apple', '🍎')
const orange = new Fruit('orange', '🍊')

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);