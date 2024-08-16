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

const $thumbs = document.querySelectorAll('li > a')
const $img = document.getElementById('screen');
console.log($thumbs);

// 전통적인 for문을 활용한 이벤트 구문
for(let i = 0; i <= $thumbs.length; i++){
  $thumbs[i].addEventListener('click',function(evt){
    evt.preventDefault();

    const bigImg = this.getAttribute('href');
    const altImg = this.firstElementChild.getAttribute('alt');
    $img.setAttribute('src', bigImg);
    $img.setAttribute('alt', altImg);
  });

 };





// $thumbs[1].addEventListener('click',function(evt){
//   evt.preventDefault();
//   // alert('두번째 썸네일 클릭');
//   const bigImg = this.getAttribute('href');
//   // document.getElementById('href');
//   $img.setAttribute('src', bigImg);
//   $img.setAttribute('alt', altImg);
// });
// $thumbs[2].addEventListener('click',function(evt){
//   evt.preventDefault();
//   const bigImg = this.getAttribute('href');
//   $img.setAttribute('src', bigImg);
//   $img.setAttribute('alt', altImg);
// });
// $thumbs[3].addEventListener('click',function(evt){
//   evt.preventDefault();
//   const bigImg = this.getAttribute('href');
//   $img.setAttribute('src', bigImg);
//   $img.setAttribute('alt', altImg);
// });
// $thumbs[4].addEventListener('click',function(evt){
//   evt.preventDefault();
//   const bigImg = this.getAttribute('href');
//   $img.setAttribute('src', bigImg);
//   $img.setAttribute('alt', altImg);
// })
// $thumbs[5].addEventListener('click',function(evt){
//   evt.preventDefault();
//   const bigImg = this.getAttribute('href');
//   $img.setAttribute('src', bigImg);
//   $img.setAttribute('alt', altImg);
// });
// $thumbs[6].addEventListener('click',function(evt){
//   evt.preventDefault();
//   const bigImg = this.getAttribute('href');
//   $img.setAttribute('src', bigImg);
//   $img.setAttribute('alt', altImg);
// });
// $thumb[7].addEventListener('click',function(evt){
//   evt.preventDefault();
//   const bigImg = this.getAttribute('href');
//   $img.setAttribute('src', bigImg);
//   $img.setAttribute('alt', altImg);
// })