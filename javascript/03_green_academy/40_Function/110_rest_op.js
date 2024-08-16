/* 
    함수에서의 rest 연산자

    1. 함수에서 매개변수의 개수가 유동적일 때 유용
    2. 형식 - 무조건 맨 마지막에 ...rest 작성
    3. rest 변수명은 자유롭게 지정 할 수 있음 
    4. 결국 rest는 나머지 모든 인자값을 저장한 배열변수

*/

const habFn = (apple, ...rest) => {
  console.log(`apple = ${apple}`);

  let sum = 0;

  for (let i = 0; i < rest.length; i++ ) {
    sum += rest[i];
  }

  return sum;
};

let result = habFn('사과', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //수가 몇개가 되든 rest안에 배열로 저장됨
//let rest = [1, 2, 3, 4, 5, 6, 6, 7] 과 같은 형태가 됨 
console.log(`result는 ${result}`);
