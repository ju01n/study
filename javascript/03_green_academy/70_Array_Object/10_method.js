/* 
  객체의 프로퍼티에 할당된 함수를 메소드라고 부른다.
  
  1. 호출 할 때 앞에 .(점) 찍고 호출하면 메소드 
  
  2. 호출 할 때 앞에 .(점) 없이 호출하면 함수
  
  3. 객체의 메소드는 보통 다른 프로퍼티를 이용하여 어떤 처리를 할 때 사용됨
  
*/

  const duly = {
    name : '아기공룡둘리',
    age : 7,
    address : '쌍문동',

    // 아래의 sum()메소드는 부적절
    sum : function(){
      console.log(3 + 4);
    },
    // 이 객체와 관련없는 함수 쓰면 안됨!!! -> 별도의 함수로 만들어라

    info(){
      console.log(`이름 : ${this.name}, 나이 : ${this.age}, 주소 : ${this.address}`);
    }
  }

  duly.sum();
  duly.info();