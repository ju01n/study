/*

  썸네일을 누른다.
    1. 해당 썸네일에 매칭되는 DOM 선택
    2. 이벤트 구문 작성

  큰 이미지가 변한다.
    어디에선가 큰 이미지의 src정보를 가져온다.
    가져온 정보를 img의 src에 넣어준다.
*/
const $thumbs1 = document.querySelector('#thumbs > li:nth-child(1) > span');
const $thumbs2 = document.querySelector('#thumbs > li:nth-child(2) > span');
const $thumbs3 = document.querySelector('#thumbs > li:nth-child(3) > span');
const $thumbs4 = document.querySelector('#thumbs > li:nth-child(4) > span');
const $thumbs5 = document.querySelector('#thumbs > li:nth-child(5) > span');
const $thumbs6 = document.querySelector('#thumbs > li:nth-child(6) > span')
const $thumbs7 = document.querySelector('#thumbs > li:nth-child(7) > span')
const $thumbs8 = document.querySelector('#thumbs > li:nth-child(8) > span')

$thumbs1.addEventListener('click',function(){
  const bigImg = $thumbs1.getAttribute('data-href');
  document.getElementById('screen').setAttribute('src', bigImg);
});
$thumbs2.addEventListener('click',function(){
  // alert('두번째 썸네일 클릭');
  const bigImg = $thumbs2.getAttribute('data-href');
  // document.getElementById('data-href');
  document.getElementById('screen').setAttribute('src', bigImg);
});
$thumbs3.addEventListener('click',function(){
  const bigImg = $thumbs3.getAttribute('data-href');
  document.getElementById('screen').setAttribute('src', bigImg);
});
$thumbs4.addEventListener('click',function(){
  const bigImg = $thumbs4.getAttribute('data-href');
  document.getElementById('screen').setAttribute('src', bigImg);
});
$thumbs5.addEventListener('click',function(){
  const bigImg = $thumbs5.getAttribute('data-href');
  document.getElementById('screen').setAttribute('src', bigImg);
})
$thumbs6.addEventListener('click',function(){
  const bigImg = $thumbs6.getAttribute('data-href');
  document.getElementById('screen').setAttribute('src', bigImg)
});
$thumbs7.addEventListener('click',function(){
  const bigImg = $thumbs7.getAttribute('data-href');
  document.getElementById('screen').setAttribute('src', bigImg)
});
$thumbs8.addEventListener('click',function(){
  const bigImg = $thumbs8.getAttribute('data-href');
  document.getElementById('screen').setAttribute('src', bigImg)
})