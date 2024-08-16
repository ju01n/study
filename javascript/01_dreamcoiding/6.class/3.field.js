
// 접근제어자 - 캡슐화 (수정할 수 없도록..)
// private(#), public(기본), protected
class Fruit{
  // name; 생략 가능
  // emoji;
  // type = '과일';

  #name;
  #emoji;
  #type = '과일';

  constructor(name, emoji){
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
    };
  }

  const apple = new Fruit('apple', '🍎');
  apple.#name = '오렌지'; // #field는 외부에서 접근 불가능!!!! 
  console.log(apple);