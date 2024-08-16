const boy = {username : '홍길동'};

// heap 메모리 영역의 값을 바꾸는 것이기 때문에 const여도 재할당 가능
boy.username = '하니';

if(false){
  // Assignment to constant variable.
  boy = 100;
}
// freeze 메소드는 객체를 얼려서 속성을 추가하거나, 속성값을 변경하지 못하게 한다.
Object.freeze(boy); // 일단 얼리면 해동하는 방법 없음!!!!

// freeze 후 속성값 변경과 속성 추가를 시도
boy.username = '둘리';  // ---> 안바뀜
boy.age = 7;

console.log('boy =', boy); // error - const 재할당 X
// 하니