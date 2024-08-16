//1~100까지의 합을 구하는 함수 sumFn
//재귀함수는 내부적으로 자기 자신을 재호출하는 함수를 뜻한다.
function sumFn(n){
  /*
      sumFn 함수의 경우 100부터 순회한 다음
      호출스택(CallStack)에 쌓여 있는 값을 처리해 나가게 되는데
      CallStack은 LIFO(Last In First Out) 방식이기 때문에
      제일 마지막에 호출된 sumFn(1) 부터 sumFn(100)까지 순차적으로 실행되어
      값을 반환하게 된다.

      100 + 99 + 98 + ... + sumFn(1)
      .
      .
      .
      100 + 99 + 98 + sumFn(97)
      100 + 99 + sumFn(98)
      100 + sumFn(99)
  */

  //종료조건
  if(n <= 1) return 1;

  return n + sumFn(n - 1);
}

const result = sumFn(100);//5050

console.log(`result = ${result}`);