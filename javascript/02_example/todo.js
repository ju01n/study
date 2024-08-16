$(function () {
    // @append
    // @보간
    // @val()



    // char = '안녕하세요';

    // -백틱 : 문자 보간 처리가 쉬움 
    //     html = `<li>
    //     <span class="text">${char}</span>
    //     <button class="btn-complete">완료</button>
    //     <button class="btn-del">제거</button>
    // </li>`



    // $('.list1').append(html)


    $('.btn-submit').click(function () {
        text = $('.input-text').val();

        //문제1. 만약 텍스트값이 없다면 클릭이 안되게하라 -> '빈칸이 아니라면, 클릭이되게' 라고 바꾸어생각
        //if(text != ''){      //!= - 부정 
        //    console.log('1111'); //빈칸이 아니라면 ,1111이 도출 
        //}

        if (text) {
            html = `<li>
        <span class="text" >${text}</span>
        <button class="btn-complete">완료</button>
        <button class="btn-del">제거</button>
        </li>`;

            $('.list1').append(html); //값 넣고
            $('.input-text').val(''); //초기화

        } else {
            console.log('입력해주세요');
        }

    })
    /* 추후에 추가되었기 때문에 실행되지않음 
    $('.btn-complete').click(function(){
        console.log(111)
    })

    $('.btn-del').click(function(){
    console.log(222)
    })
    */

    //$(document)->문서꼭대로가서 다시 읽는 것 
    $(document).on('click', '.btn-complete', function () {
        text = $(this).siblings('.text').text(); //형제중에 이름이 text인 것 
        html = `<li>
        <span class="text">${text}</span>
        </li>`
        $('.list2').append(html);
        $(this).parent().remove();
        //실행순서 - 나의 형제텍스트값 가져와서 넣고, 그 다음에 (마지막에) 삭제해라 ! 
    })


    $(document).on('click', '.btn-del', function () {
        //누가?
        //$(this) - 자기자신
        $(this).parent().remove(); //한칸부모 선택 - 삭제

    })
})