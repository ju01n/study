// 문제 - for문을 사용하여 1~10 출력중 5이면 건너뛰고, 8이 되는 순간 반복문을 탈출시키시오

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; //증감식 부분으로 바로 이동
  }
  else if (i === 8) {
    break; //제어문 탈출 
  }
  console.log(`i는 ${i}`);
}
