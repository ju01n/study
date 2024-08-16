/*
    문제1) '          mvcweb@naver.com         '에서 
            아이디(mvcweb)와 도메인(naver.com)을 추출후
            각각 userId, domain 변수에 할당하여 화면에 출력하시오.
*/

let email = '          mvcweb@naver.com         ';

//1단계 - 좌우공백제거
email = email.trim();

//2단계 - 아이디추출
// const userId = email.substring(0,5+1);
const pos = email.indexOf('@');
const userId = email.substring(0,pos);
console.log(`userId = ${userId}`);

//3단계 - 도메인추출
const domain = email.slice(pos+1);
console.log(`domain = ${domain}`);

/*

    문제2) 주민번호 '      0507254234567      '에서
            필요한 정보를 추출하여 다음과 같이 출력하시오.

            2005년 7월 25일 - 남자

            or 

            2005년 7월 25일 - 여자
*/
let jumin = '      0507254234567      ';

//1단계 - 좌우공백제거
jumin = jumin.trim();

//2단계 - 년월일 추출
let year = jumin.slice(0,1+1);//05
const month = jumin.slice(2,3+1);//07
const date = jumin.slice(4,5+1);//25

//3단계 - 성별코드
const genderCode = jumin.substring(6,6+1);

//4단계 - 출생년도 변환
if(genderCode===1 || genderCode===2){
    year = '19'+year;
}else{
    year = '20'+year;
}

//5단계 - 성별
let gender = '여자';

if(genderCode===1 || genderCode===3){
    gender = '남자';
}

console.log(`${year}년 ${month}월 ${date}일 - ${gender}`);