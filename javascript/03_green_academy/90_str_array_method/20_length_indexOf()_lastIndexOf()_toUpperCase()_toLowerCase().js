const url = 'WWW.NAVER.COM/index.html NAVER';
const msg = 'Hello Thank you good luck to you';

// 문자열 length
console.log(`url 문자열의 길이는 ${url.length}`); // 30
console.log(`msg 문자열의 길이는 ${msg.length}`);

// 문자열 .indexOf(찾을문자) - 찾을 문자가 처음으로 나타난 위치값 반환, 없으면 -1
console.log(`url에서 'NAVER' 문자열이 처음으로 나타난 위치는 ${url.indexOf('NAVER')}`);

// 문자열 .lastIndexOf(찾을문자) - 마지막으로 나차난 위치값 반환, 없으면 -1
console.log(`url에서 'NAVER' 문자열이 마지막으로 나타난 위치는 ${url.lastIndexOf('NAVER')}`);

// 대문자로 변환 - 문자열 .toUpperCase()
console.log(url.toUpperCase());

// 소문자로 변환 - 문자열 .toLowerCase()
console.log(url.toLowerCase());