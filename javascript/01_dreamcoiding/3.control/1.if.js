// 조건문 Conditional Statement
// if(조건){ }
// if(조건){ } else{ } 
// if(조건1){ } else if(조건2){} else {}

let fruit = 'apple';
if(fruit === 'apple') {
  console.log('🍎');
} else if(fruit === 'orange'){
  console.log('🍊');
} else{
  console.log('😄');
}

if(false){ // false 값일 때
  console.log('출력되면 안됨!'); // 안나옴
}

if(2 > 1){ // true
  console.log('출력!');
}