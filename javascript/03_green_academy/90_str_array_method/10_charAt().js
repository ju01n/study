const title = '바닐라 자바스크립트 주말반';

// 문자열.charAt(dix)
console.log(`title.charAt(4) = ${title.charAt(4)}`); // 자

// 자바스크립트에서 문자열은 읽기전용 배열
title[4] = '하' // 재할당 시도 시 오류는 나지 않지만 값이 변경되지는 않음! 
console.log(`title[4] = ${title[4]}`); // 하(X) 자(O) 