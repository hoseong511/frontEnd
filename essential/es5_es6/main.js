// 화살표 함수
// () => {}

const double = function (x) {
  return x * 2
}

console.log(double(7));

const doubleArrow = (x, y) => {
  if (x > 2) {
    return 'x > 2'
  } 
  return x * y
}

// 객체데이터를 표현 할 떄에는 ({})
const doubleArrow2 = x => ({ name: 'ho'})

console.log(doubleArrow2(3));