const puppy = {
  name : '구름이',
  color : 'white',
  age : 3, 
  'head-size' : 'small'
}

// 객체의 프로퍼티
console.log(puppy['head-size']);

// 동적으로 프로퍼티 추가
puppy.hobby = '터그놀이';
puppy['eng-name'] = 'gurumi';

// 동적으로 프로퍼티 삭제
delete puppy.color;
delete puppy['head-size'];

//문제1) for~in 반복문을 이용하여 puppy 객체의 프로퍼티 값을 출력하시오.
for(let prop in puppy){
  console.log(`${prop} : ${puppy[prop]}`);
}