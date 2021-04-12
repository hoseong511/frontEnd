// 호이스팅(hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

double2();  //호이스팅에 의하여 실행됨.

const double = function () {
  console.log(a*2);
} // 이게 함수 표현임

double()

function double2() {
  console.log(a*3);
} // 이게 함수 선언

// 화살표 함수는 익명함수임!!