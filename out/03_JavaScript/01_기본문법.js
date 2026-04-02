// HTML 태그에 접근(아이디로 접근)
// window.document.getElementById('heading').style.color = 'red';

// 1. 변수
// 1) 변수 선언
// 전역 변수
var str1 = 'var 전역변수';
let str2 = 'let 전역변수';
const str3 = 'const 전역변수';

// 자바스크립트에서 페이지가 모두 로드되면 실행될 함수를 구현할 때 사용한다.
window.onload = function () {
    // window.document.getElementById('heading').style.color = 'green';
    // 지역변수
    
    var str4 = 'var 지역변수';
    let str5 = 'let 지역변수';
    const str6 = 'const 지역변수';
    // 전역 변수와 동일한 이름의 지역 변수 선언
    let str2 = 'let 지역변수';

    console.log(str1);
    // 함수 내부에서 지역 변수가 우선권을 갖는다.
    console.log(str2);
    console.log(str3);
    console.log(str4);
    console.log(str5);
    console.log(str6);
    console.log('==============================');

    // var, let, const 차이점
    // 1) 중복 선언
    //  - var 키워드로 선언된 변수는 중복 선언이 가능하다.
    //  - let, const 키워드로 선언된 변수는 중복 선언이 불가능하다.

    var num1 = 10;
    console.log(num1);

    var num1 = 20;
    console.log(num1);

    let num2 = 10;
    console.log(num2);

    // let num2 = 20;
    // console.log(num2);

    // 선언과 동시에 초기화 해야된다.
    const num3 = 20;
    // 상수는 값의 재할당이 불가능하다.
    // const num3 = 20;

    console.log(num3);
    
    // const num3 = 20;
    // console.log(num3);
    console.log('==============================');


    // 2) 유효 범위 (스코프)
    //  - 함수에서 var 키워드로 선언된 변수는 함수 유효범위를 가진다.
    //  - 함수에서 let, const 키워드로 선언된 변수는 블록 유효 범위를 갖는다.
    if (true) {

        var num4 = 40;
        let num5 = 50;
        const num6 = 60;

        console.log(num4);
        console.log(num5);
        console.log(num6);
    }

    console.log(num4);
    // console.log(num5);
    // console.log(num6);
    console.log('==============================');

    // 3) 호이스팅 동작 방식
    console.log(num7);
    var num7 = 70;
    console.log(num7);


    // 4) 전역 변수 동작 방식
    //  - var 키워드로 선언한 전역 변수는 window 객체 내부에 포함된다.
    //  - let, const 키워드로 선언한 전역변수는 window 객체 내부에 포함되지 않는다.

    


}; 

// 2) 자료형
function typeTest() {

    let name = '홍길동'; // String
    let age = 34;
    let height = 175.6;
    let check = false;
    let hobbies = ['축구', '농구', '야구'];
    // function
    let addFunc = function(a , b) {
        return a + b;
    }
    let user = {
        id: 'hong123',
        name: '홍길동',
        age: 34,
        height: 175.6,
        hobbies: ['축구', '농구', '야구'],
        // 메소드 
        info: function() {

            return `id: ${this.id}, age: ${this.age}, height ${this.height}`;
        }

    };
    let div1 = document.getElementById('div1');

    console.log(addFunc(10,20))
    console.log(user.info())    

    // div1.innerText += '<h4>안녕하세요.</h4>'; 
    div1.innerHTML = `<h4>안녕하세요.</h4>`; 

    // typeof는 값의 자료형을 확인하는 연산자이다.
    // div1.innerHTML += 'name: ' + name + ', type: ' + typeof(name) + '<br>'
    div1.innerHTML += `name: ${name}, type: ${typeof(name)}<br>`;
    div1.innerHTML += `age: ${age}, type: ${typeof(age)}<br>`;
    div1.innerHTML += `height: ${height}, type: ${typeof(height)}<br>`;
    div1.innerHTML += `hobbies: ${hobbies}, type: ${typeof(hobbies)}<br>`;
    div1.innerHTML += `check: ${check}, type: ${typeof(check)}<br>`;
    div1.innerHTML += `addFunc: ${addFunc}, type: ${typeof(addFunc)}<br>`;
    div1.innerHTML += `user: ${user}, type: ${typeof(user)}<br>`;


}

// 3) 데이터 형 변환
function castingTest() {

    let div2 = document.getElementById('div2');

    div2.innerHTML = '<h4>데이터 형 변환</h4>';

    // 1) 문자열과 숫자의 산술 연산
    div2.innerHTML += `7 + 7 = ${7 + 7}<br>`;
    div2.innerHTML += `'7' + 7 = ${'7' + 7}<br>`;
    div2.innerHTML += `'7' - 7 = ${'7' - 7}<br>`;
    div2.innerHTML += `'7' * 7 = ${'7' * 7}<br>`;
    div2.innerHTML += `'7' / 3 = ${'7' / 3}<br>`;
    div2.innerHTML += `'7' % 3 = ${'7' % '3'}<br>`;
    div2.innerHTML += `'7' % a = ${'7' % 'a'}<br><br>`;

    // 2) 문자열 -> 숫자
    div2.innerHTML += `${Number('5')}, type: ${typeof(Number('5'))}<br>`;
    div2.innerHTML += `${parseInt('5')}, type: ${typeof(parseInt('5'))}<br>`;
    div2.innerHTML += `${parseFloat('3.14')}, type: ${typeof(parseFloat('3.14'))}<br>`;


    // 3) 숫자 -> 문자열
    div2.innerHTML += `${String(10)}, type: ${typeof(String(10))}<br>`;
    div2.innerHTML += `${10 + ''}, type: ${typeof(String(10))}<br>`;


}

// 2. 연산자
function opTest() {
    let div3 = document.getElementById('div3');

    div3.innerHTML = '<h4>== 연산자 테스트</h4>'
    div3.innerHTML += `5 == 5 : ${5 == 5}<br>`;
    div3.innerHTML += `'5' == 5 : ${'5' == 5}<br>`;

    div3.innerHTML += '<h4>=== 연산자 테스트</h4>'
    div3.innerHTML += `5 === 5 : ${5 === 5}<br>`;
    div3.innerHTML += `'5' === 5 : ${'5' === 5}<br>`;

    div3.innerHTML += '<h4>!= 연산자 테스트</h4>'
    div3.innerHTML += `5 != 5 : ${5 != 6}<br>`;
    div3.innerHTML += `'5' != 5 : ${'5' != 5}<br>`;

    div3.innerHTML += '<h4>!== 연산자 테스트</h4>'
    div3.innerHTML += `5 !== 5 : ${5 !== 6}<br>`;
    div3.innerHTML += `'5' !== 5 : ${'5' !== 5}<br>`;

}

// 3. 제어문
function forTest() {
    let array = [10,9,8,7,6,5,4,3,2,1];
    let user = {
        name: '홍길동',
        age : 34,
        height: 175.6
    };
    let div4 = document.getElementById('div4');

    div4.innerHTML = '<h4>베열 출력</h4>';

    // for 구문
    // for (let i = 0 ; i < array.length; i++) {
    //     div4.innerHTML += `${array[i]} `;
    // }

    // for in 구문
    //   - 배열을 반복하는 경우 i 변수에 array의 index 값을 순서대로 담아서 반복한다.
    // for (const i in array) {
    //    div4.innerHTML += `${array[i]} `;
    // }

    // for of 구문
    //  - 배열을 반복하는 경우 value 변수에 array의 value 값을 순서대로 담아서 반복한다.
    for (const value of array) {
        div4.innerHTML += `${value} `;
    }

    div4.innerHTML = '<h4>객체 출력</h4>';

    

}

