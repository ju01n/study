/* 
    1. 캡슐화 - 클래스 안에 서로 연관있는 속성과 기능들을 하나의 캡슐로 만들어 
              데이터를 외부로부터 보호하는 것 => Class를 만들면 됨! 

    2. 정보은닉 - 프로퍼티에 담긴 값을 직접적으로 노출시키지 않는 작업 
      1) private 프로퍼티는 '#(샵)'으로 표현
      2) private 프로퍼티는 인스턴스의 이름으로 직접 접근 할 수 없음 
*/

// {username: ?, money : ?}

class Bank{
  #username; // # : private 정보은닉 
  #money;

  constructor(username, money){
    this.#username = username;
    this.#money = money;
  }
  // 최신 자바스크립트 문법 - 좀 더 명확
  get username(){
    return this.#username; // kb.usename으로 호출
  }

  set username(username){
    this.#username = username;
  }
  // 전통적인 게터/세터 메소드 
  getMoney(){
    return this.#money;
  }
  setMoney(money){
    this.#money = money;
  }

}

const kb =  new Bank('도우너', 70000);
kb.username = '하니'; // 하니로 변경  setter

console.log(`kb.username = ${kb.username}`); // 도우너 getter

kb.setMoney(50000);
console.log(`kb의 money값은 ${kb.getMoney()}`);
// console.log('kb = ', kb); // 정보은닉을 했기 때문에 직접 접근 X
// console.log(kb.username, kb.money); // 정보은닉을 했기 때문에 직접 접근 X

