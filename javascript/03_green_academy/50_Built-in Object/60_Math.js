// 수학과 관련된 기능을 제공하는 Math

let result = 0;

result = Math.floor(3.9) // 무조건 내림(필수)
result = Math.round(4.5) // 반올림
result = Math.ceil(3.1) // 무조건 올림

// 0 < x < 1 사이의 소수점 난수 발생 (필수)

//문제 - 0~10 사이의 정수중 하나를 랜덤으로 추출
result = Math.floor(Math.random() * 11)

console.log(`result = ${result}`);
