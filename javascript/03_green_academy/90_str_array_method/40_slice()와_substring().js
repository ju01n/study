// 문자열의 일부를 추출

/* 
  문자열.subString(시작인덱스, 끝인덱스 + 1)

  문자열.indexOf('/', 7); -> 인덱스 7부터 시작해서 처음으로 발견되는 '/'의 인덱스를 반환

  문자열.slice(시작인덱스, 끝인덱스 + 1)
  문자열.slice(시작인덱스) : 시작인덱스부터 끝까지 추출
*/

let url = '       http://www.auction.co.kr/default.html'       ;


// 문제) url 문자열의 좌우공백을 제거하여 재할당 하시오.
url = url.trim();

// 문제 ) url 문자열에서 'www.auction.co.kr'만 추출하기
const starIdx = url.indexOf('w'); // 7
const endIdx = url.indexOf('/', starIdx);
const domain = url.substring(starIdx, endIdx);
console.log(`1. domain = ${domain}`);

// 문제 ) url 문자열에서 파일명 'default'만 추출하기
startIdx = url.lastIndexOf('/') + 1; // 맨 마지막에 위치한 '/'
ednIdx = url.lastIndexOf('.'); // 맨 마지막에 위치한 . 
const filename = url.slice(startIdx, ednIdx);
console.log(`2. filename = ${filename}`);

// 문제 ) url 문자열에서 확장자 'html'만 추출하기
const extname = url.slice(endIdx + 1);
console.log(`extname = ${extname}`);