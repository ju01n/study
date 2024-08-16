/*
  데이터타입(자료형) - 프로그램에서 처리할 데이터의 형태

  1. 기본데이터 타입 
    number (숫자)
    string (문자)
    boolean (논리형) - t/f

    undefined (변수 선언 시 초기 값을 할당하지 않았을 때 자동을 대입되는 값이면서 동시에 타입)

  2. 참조타입
    객체변수 - Object
    배열변수 - Array
    함수변수 - Function
    

  3. 데이터 타입을 확인하는 방법
    1) typeof (변수명)
    2) typeof 변수명
*/

let age = 25;
console.log(`1. age 변수의 데이터타입은 ${typeof(age)}`);

console.log(typeof 10); //number
console.log(typeof '10'); //string
console.log(typeof 3.141592); //number

//논리현 boolean
console.log(typeof true); //boolean
console.log(typeof false); //boolean

console.log(typeof (10>2)); //boolean
console.log(typeof (age<30)); //boolean