/* 
  콜백함수

  1. 어떤 함수의 매개변수로 다른 함수를 전달 할 수 있다. 
  2. 이처럼 매개변수로 전달하여 실행시키는 함수의 형태

  3. 콜백함수는 주로 예약을 걸 때 전달하는 함수 
  4. 즉, '어떤 조건이 성립되면 이 함수를 실행시켜줘'라고 하면서 전달하는 함수를 의미 

*/


const myFn = name => console.log(`${name}께서 myFn 함수를 호출함`);
myFn('선생님');

//어떤 함수
const addEventListner = (event, callback) => {
  if(event === 'click') callback('선생님');
};
addEventListner('click', myFn)