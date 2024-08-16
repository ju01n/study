// DOM 셀렉팅 통합함수
const $ = function(query){
  if(query[0]==='#'){
    return document.getElementById(query.slice(1));
  }else{
    return document.querySelectorAll('query')
  }
};

// $('#tit');

// 태그의 속성을 제어하는 함수 attr()
const attr = function(el, attrName, attrVal){}
if(attrVal === undefined){
  return el.getAttribute(attrName)
}else{
  el.setAttribute(attrName, attrVal)
}
// attr (누구의, 무엇을) - getAttribute()
// attr (누구의, 무엇을, 어떻게) - setAttribute()