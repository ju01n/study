/* 
  switch()문은 특정 변수에 담긴 값에 따라서 실행할 코드가 여러개 일때 사용
    -- 다중 if문과 비슷한 면이 있다. 
*/

const hakjum = 'A'; //B,C,D

switch (hakjum) {
  case 'A':
    console.log('당신의 점수는 90점 이상입니다');
    break; //break 꼭 쓰기! 쓰지 않으면 다음 케이스까지 검사함

  case 'B':
    console.log('당신의 점수는 80점 이상입니다.');
    break;

  default: //if문의 else와 같은 기능
    console.log('해당사항 없음');
}
