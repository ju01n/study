const msg = 'Welcome to JavaScript~!';

// 한칸 공백을 기준으로 하여 새로운 배열 생성
const keywords = msg.split(' ');
console.log(keywords);

// 배열의 원소를 ,(콤마)를 기준으로 하나의 문자열로 생성
const cars = ['그랜저', '제네시스', 'K7', '프라이드'];
const strCar = cars.join(',');
console.log(strCar);