/*

  썸네일을 누른다.
    1. 해당 썸네일에 매칭되는 DOM 선택
    2. 이벤트 구문 작성

  큰 이미지가 변한다.
    어디에선가 큰 이미지의 src정보를 가져온다.
    가져온 정보를 img의 src에 넣어준다.
*/
const $thumbs1 = document.querySelector('#thumbs > li:nth-child(1) > a');
const $thumbs2 = document.querySelector('#thumbs > li:nth-child(2) > a');
const $thumbs3 = document.querySelector('#thumbs > li:nth-child(3) > a');
const $thumbs4 = document.querySelector('#thumbs > li:nth-child(4) > a');
const $thumbs5 = document.querySelector('#thumbs > li:nth-child(5) > a');
const $thumbs6 = document.querySelector('#thumbs > li:nth-child(6) > a');
const $thumbs7 = document.querySelector('#thumbs > li:nth-child(7) > a');
const $thumbs8 = document.querySelector('#thumbs > li:nth-child(8) > a');

const $thumbs = document.querySelectorAll('li > a');
const $img = document.getElementById('screen');
const $li = document.querySelector('li')

let nowIdx = 0; // 현재 보여지고 있는 썸네일 인덱스
let oldIdx = nowIdx; // 직전에 보여졌던 썸네일의 인덱스

console.log($thumbs);
// forEach()를 활용한 이벤트 구문
$thumbs.forEach(function ($thumbs, idx) {
  $thumbs.addEventListener('click', function (evt) {
    evt.preventDefault();

    const bigImg = this.getAttribute('href');
    const altImg = this.firstElementChild.getAttribute('alt');
    $img.setAttribute('src', bigImg);
    $img.setAttribute('alt', altImg);

    // 썸네일 활성화
    oldIdx = nowIdx;
    nowIdx = idx;

    // on 클래스를 추가
    this.parentElement.classList.add('on');

    // on 클래스를 제거
    $thumbs[oldIdx].parentElement.classList.remove('on');


    console.log(`oldIdx = ${oldIdx}`);
    console.log(`nowIdx = ${nowIdx}`);
  });
});
