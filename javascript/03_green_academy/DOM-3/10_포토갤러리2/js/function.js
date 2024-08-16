/*
    썸네일을 누른다.
        1. 해당 썸네일에 매칭되는 DOM 선택
        2. 이벤트구문작성

    큰 이미지가 변한다.
        어디에선가 큰 이미지의 src 정보를 가져온다.
        가져온 정보를 img의 src에 넣어준다.
*/


const $thmbs = $('li > a');
const $img = $('#screen');

let nowIdx = 0;//현재 보여지고 있는 썸네일의 인덱스
let oldIdx = nowIdx;//직전에 보여졌던 썸네일의 인덱스

//forEach()를 활용한 이벤트 구문
$thmbs.forEach(function($thmb,idx){

    $thmb.addEventListener('click', function(evt){
        evt.preventDefault();

        const bigImg = attr(evt.currentTarget, 'href');
        const altImg = attr(evt.currentTarget.firstElementChild, 'alt');

        attr($img, 'src', bigImg);
        attr($img, 'alt', altImg);

        //썸네일 활성화
        oldIdx = nowIdx;
        nowIdx = idx;

        //on 클래스를 추가
        this.parentElement.classList.add('on');

        //on 클래스를 제거
        $thmbs[oldIdx].parentElement.classList.remove('on');

        console.log(`oldIdx = ${oldIdx}`);
        console.log(`nowIdx = ${nowIdx}`);

    });

});


//이전다음
const $navigator = $('section>.nav>a');
$navigator.forEach(function($btn,idx){
    $btn.addEventListener('click', function(evt){
        evt.preventDefault();

        if(idx===0){//이전
            // alert('이전버튼 클릭~!');
            $('#thmbs').style.marginLeft = 0;
            $thmbs[7].click();
        }else{//다음
            // alert('다음버튼 클릭~!');
            $('#thmbs').style.marginLeft = -(74*8)+'px';
            $thmbs[8].click();
        }
    });
});