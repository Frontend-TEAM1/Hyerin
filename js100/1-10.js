// ----------------------------------------------------------------------------------------------
//  1.  배열의 삭제
//      다음 배열에서 400, 500을 삭제하는 코드를 입력하세요

var nums = [100, 200, 300, 400, 500];
// * 첫번째 풀이
nums.splice(3,2);
console.log(nums);

// * 두번째 풀이
// nums.pop();
// nums.pop();
// console.log(nums);

// ----------------------------------------------------------------------------------------------
//  2.  배열의 내장함수
//      <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요
//      출력 : [200, 100, 10000, 300]

var arr = [200, 100, 300];
//pass
arr.splice(2,0,10000);
console.log(arr);

// ----------------------------------------------------------------------------------------------
//  3.  변수의 타입
//      다음 출력값으로 올바른 것은?

var arr = [100, 200, 300];
console.log(typeof(arr));
/*      
        1) undefined
        2) string
        3) number
        4) object
        
        * 정답 : 4 / undefined, string, number은 모두 기본 자료형       
*/
// ----------------------------------------------------------------------------------------------
//  4.  변수의 타입2
//      다음 변수 a를 type(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
/*
        1)  입력 : a = 1,   출력 : number
        2)  입력 : a = 2.22,   출력 : boolean
        3)  입력 : a = 'p',   출력 : string
        4)  입력 : a = [1, 2, 3],   출력 : object

        * 정답 : 2 / boolean (X) -> number (O)
*/
// ----------------------------------------------------------------------------------------------
//  5.  for문 계산
//      다음 코드의 출력값으로 알맞은 것은?

var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;     // a = (10 + 1 + 3) = 14
}

console.log(a+b);   // 14 + 2 = 16
/*
        1)  10
        2)  12
        3)  14
        4)  16
        
        * 정답 : 4
*/
// ----------------------------------------------------------------------------------------------
//  6.  False
//      다음은 자바스크립트 문법 중에서 False로 취급하지 않고 True가 나오는 것은?
/*
        1)  NaN
        2)  1
        3)  ""
        4)  0
        5)  undefined

        * 정답 : 2 / js에서는 null, undefined, 0, 빈 문자열, NaN, false만을 False로 취급
*/
// ----------------------------------------------------------------------------------------------
//  7.  변수명
//      다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오
/*
        1)  age
        2)  Age
        3)  let
        4)  _age
        5)  1age

        * 정답 : 3,5 / js에서 식별자는 문자, _ 혹은 $로 시작해야하며 let은 이미 js 문법에 존재하는 예약어라 사용 불가
*/

// ----------------------------------------------------------------------------------------------
//  8.  concat을 활용한 출력 방법
//      다음 소스 코드를 완성하여 날짜와 시간을 출력하시오

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = //빈칸을 채워주세요

console.log(result);












