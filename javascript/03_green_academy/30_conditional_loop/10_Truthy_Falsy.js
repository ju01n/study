/* 
  1. false 로 인식되는 값 -> falsy  알고있기 
    null 
    undefined
    0
    '' (빈문자열)
    ""
    NaN (Not a Number)
  
  2. 그 외의 모든 값은 true로 인식됨 -> truthy
  
  3. !! 연산자는 해당값을 boolean type으로 변환 

 */

  console.log(`!!null은 ${!!null}`);
  console.log(`!!undefined는 ${!!undefined}`);
  console.log(`!!0 ${!!0}`);
  console.log(`!!''은 ${!!''}`);
  console.log(`!!NaN은 ${!!NaN}`);