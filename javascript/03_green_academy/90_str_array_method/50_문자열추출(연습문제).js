/*
    문제1) '          mvcweb@naver.com         '에서 
            아이디(mvcweb)와 도메인(naver.com)을 추출후
            각각 userId, domain 변수에 할당하여 화면에 출력하시오.
*/
let url = '          mvcweb@naver.com         ';
url = url.trim();
const start = url.indexOf('m'); 
const end = url.indexOf('@', start);
const userId = url.substring(start, end);
console.log(`userId = ${userId}`);

const domain = url.slice(end + 1);
console.log(`domain = ${domain}`);

/*
    문제2) 주민번호 '      0507254234567      '에서
            필요한 정보를 추출하여 다음과 같이 출력하시오.

            2005년 7월 25일 - 남자

            or 

            2005년 7월 25일 - 여자
*/

let resiNum = '      0507254234567      ';
resiNum = resiNum.trim();
const year = resiNum.slice()
console.log(num);

