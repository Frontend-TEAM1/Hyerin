// ----------------------------------------------------------------------------------------------
//  21.  set은 어떻게 만드나요?
//       다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오
/*      
         1)  var x = {1, 2, 3, 5, 6, 7};
         2)  var x = {};
         3)  var x = new Set('javascript');
         4)  var x = new Set(range(5));
         5)  var x = new Set();

        * 정답 : 3번, 5번
*/

// ----------------------------------------------------------------------------------------------
//  22.  배수인지 고르시오
//       다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?
/*
         1)  i / 6 == 0
         2)  i % 6 == 0
         3)  i & 6 == 0
         4)  i | 6 == 0
         5)  i // 6 == 0

         * 정답 : 2번
*/

// ----------------------------------------------------------------------------------------------
//  23.  OX 문제
//       console.log(10/3)의 출력 결과는 3이다.
         
//       * 정답 : X / 출력결과 3.33333~ 나옴. 소숫점 없는 정수를 출력할 땐 Math.floor()함수 사용

// ----------------------------------------------------------------------------------------------
//  24.  대문자로 변환
//       이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요

const name = prompt("이름 : ");
console.log(name.toUpperCase());

//      * toUpperCase: 모두 대문자로 변환 / toLowerCase: 모두 소문자로 변환

// ----------------------------------------------------------------------------------------------
//  25.  원의 넓이 구하기
//       원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14 로 구할 수 있습니다.
//       함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다
//       입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어주세요

function circle(r) {
    const width = r * r * 3.14;
  
    return width;
  }