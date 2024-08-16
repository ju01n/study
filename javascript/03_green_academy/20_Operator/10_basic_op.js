// 산술연산자 : + - * / % 

// '=' 의 명칭은 대입연산자 (할당연산자) -- '등호'의 개념이 아님! 

const a = 100;
const b = 3;

let result = a / b; //64비트 부동소수점으로 출력 33.3333.. 
console.log(`a/b는 ${result.toFixed(2)}`); //toFixed : 두번째 자리까지만 출력

result = a % b; //나머지연산자 
console.log(`a%b는 ${a%b}`); //1

