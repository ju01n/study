// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨 
// 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a = 1, b = 1){
  console.log(a);
  console.log(b);
  console.log(arguments); // 전달된 인자 값 확인 가능
  console.log(arguments[1]); // 전달된 인자 값 확인 가능
  return a + b
}
add();

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers){ // 몇개의 인자를 받을 지 모를 때
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8)