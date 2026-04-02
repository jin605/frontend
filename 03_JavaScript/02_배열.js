window.onload = function () {
    // 1. 배열의 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    // btn1.onclick = function () {
    //     alert('버튼 클릭');
    // };

    btn1.addEventListener('click', function() {
        let array1 = [];
        let array2 = new Array();
        let array3 = new Array(3);
        let array4 = ['빨강', '파랑', '초록', '노랑'];
        let div1 = document.getElementById('div1');

        console.log(array1, array2, array3);
        

        div1.innerHTML = '<h4>배열 생성</h4>';
    });



    


};