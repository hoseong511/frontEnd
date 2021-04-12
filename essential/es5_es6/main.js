// 형 변환(Type conversion)

const a = 2
const b = '2'

console.log(a == b); // '==' 는 동등연산자
                    // 자동으로 형변환 시킨다.

// 참 같은 값 (Truthy)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...
// 거짓 같은 값 (Falsy)
// false, '', null, undefined, 0, -0, Nan

// javaScript에서 사용되는 기능
if (0) {
  console.log('hoho')
}