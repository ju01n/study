const greeting = '         Hello World        ';

console.log(`greeting = ${greeting}`);

// 1. 문자열 .trim() : 좌우의 공백 제거
console.log(`공백제거 후 greeting = ${greeting.trim()}`);

// 2. 문자열 .replace(무엇을, 어떻게) : 맨 처음 발견된 문자열 하나만 치환
const fruites = 'apple watermelon mango pineapple banana mangoFashion';
const newFruites = fruites.replace('apple', 'orange');

// 3. 문자열 .replaceAll(무엇을, 어떻게) : 발견된 문자열을 모두 치환 
const AllChangeFruites = fruites.replaceAll('apple', 'orange');

console.log(`fruites = ${fruites}`);
console.log(`newFruites = ${newFruites}`);
console.log(`AllChangeFruites = ${AllChangeFruites}`);
