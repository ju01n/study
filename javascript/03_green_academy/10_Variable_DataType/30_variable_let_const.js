/*
변수명을 정하는 좋은 습관

1. 영문소문자, 띄어쓰기 없이

2. 의미있는 짧은 영단어 조합

3. 두 단어 이상일 경우
  1) 언더바 _ 로 연결 => my_home
  2) 낙타표기법 => myHome

4. 숫자로 시작 할 수 없음 ! 
*/

//1. 중간에 값을 변경할 가능성이 있는 변수 let
  let sum; //변수를 선언만하고 값을 할당하지 않으면 자동으로 undefined 값을 넣어줌 
  sum = 10; // 같다가 아니라 할당한다는 뜻 
  // let sum = 10; 을 하면 되지않나? 가능! :선언과 할당 한번에 
  //스크립트에서 '같다'란? '==', '===' 
  console.log(`sum = ${sum}`);

  let username = '둘리';
  username = '또치';
  console.log(`username = ${username}`);


//2. 중간에 값을 변경하면 안되는 변수는 const
  const number = 20; //무조건 선언과 동시에 할당을 해야함 
  //number = 10; 재할당을 시도하면 에러 발생

  console.log(`number = ${number}`);

//문제 - 위의 number 변수에 100을 더한후 result 변수에 할당후 콘솔창에 출력하시오
  const result = number + 100; 
  console.log(`result = ${result}`);
