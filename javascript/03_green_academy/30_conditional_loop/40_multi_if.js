/* 
  다중 if문
  
  if(조건식1){

  }
  else if(조건식2){

  }
  else if(조건식3){

  }
  */

/*   문제) 수학점수를 score 변수에 저장후,
    90<=score<=100 이면 "1등급",
    80<=score<90 이면 "2등급",
    70<=score<80 이면 "3등급",
    60<=score<70 이면 "4등급",
    60점 미만이면 "재평가 대상입니다." 라고 출력하는 코드를 작성   
*/

const score = 100;

if(score >= 90 && score <= 100){
  console.log('1등급');
}else if(score < 90 && score >= 80){
  console.log('2등급');
}else if(score < 90 && score >= 70){
  console.log('3등급');
}else if(score < 70 && score >= 60){
  console.log('4등급');
}else{
  console.log('재평가 대상입니다.');
}