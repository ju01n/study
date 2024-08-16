/*
  배열(Array)

    1. 하나의 변수에 여러개의 값을 저장할 수 있다. 
    2. 배열에 저장된 값을 item(원소)라고 한다. 
    3. 각 아이템을 가리키는 index(위치값)를 이용해서 값을 추출한다. 
      단, index는 0부터 시작

      배열명[index]
    
    4. 배열의 길이 측정
      배열명.length

*/
const blank = []; //빈배열
const colors = ['red', 'blue', 'green']; //문자열 배열
const mixArr = [10, true, 'apple']; //여러 자료형으로 구성된 배열

// 문제 - '사과', '바나나', '포도'라는 값을 가진 fruits 배열을 만드시오.
// fruits 변수에 저장되는 값은 0x002F 와 같은 주소값이다. 

const fruits = ['사과', '바나나', '포도']; //배열의 길이 length : 3 

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 특정원소의 값 변경
fruits[1] = '귤';

//새로운 원소 추가
fruits[3] = '오렌지';

console.log(fruits);

// 배열의 길이를 알려주는 배열명.length 
console.log(`fruits 배열의 길이는 ${fruits.length}`);