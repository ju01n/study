/*
  1. 클래스는 객체변수 설계도

  2. 같은 형태의 객체변수를 동적으로 만들 때  사용

  {name : '둘리', usage: '모험', weight : 20}
*/

class Robot {
  name;
  usage;
  weight;

  /* 
    클래스에서의 함수는 function 키워드 생략 

    만약 constructor() 작성을 생략하면 
    컴파일러가 자동으로 아래와 같이 
    비어있는 constructor()을 하나 만들어서 넣어준다. 
  */
  constructor(){} // 자동으로 만들어주긴 함
}

const duly = new Robot(); // { name : undefined, usage : undefined, weight: undefined }

duly.name = '둘리';
duly.usage = '모험';
duly.weight = 20;

console.log('duly = ', duly); // { name: '둘리', usage: '모험', weight: 20 }