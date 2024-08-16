// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName(){
    return `${this.lastName} ${this.firstName}`
  }

  set fullName(value){
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
// console.log(student.fullName());
console.log(student.fullName); // get ~ 속성에 접근하듯이 만들 수 있음 
student.fullName = '김철수';