/* 
  어드밴스드한 for문

  for(let 변수 in 객체명){


  }
*/

const computer = {
  monitor : '삼성',
  keyboard : '엘지',
  mouse : '로지텍',
  speakr : '브리츠',
};

for(let prop in computer){
  console.log(computer[prop]); // 반드시 대괄호 표기법 사용
}