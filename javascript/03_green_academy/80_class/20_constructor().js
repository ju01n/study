// {name : ?, gender : ?, age : ?} 형태의 객체를 생성하는 클래스를 디자인

class Player{
  name;
  gender;
  age; // 주석처리 해도 값은 동일하게 나옴

  constructor(name, gender, age){
    this.name = name; // this.name은 위 class player의 name, 오른쪽 name은 가장 가까운 constructor name을 가리킴
    this.gender = gender;
    this.age = age;
  }

  info(){
    console.log(`${this.name}는 ${this.age}세의 ${this.gender}입니다.`);
  }
}

const hani = new Player('하니', '여자', 15);

//console.log('hani = ', hani);

hani.info();

const duly = new Player('둘리', '남자', 7);
duly.info();