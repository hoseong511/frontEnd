// new Symbol이 아닌 Symbol() 이렇게 함수식으로 symbol을 이용함.

console.log(Symbol('Ho') === Symbol('Ho'));

// 프리미티브 타입의 값을 담아서 사용
// 고유하고 수정불가능한 값으로 만듦
// 주로 접근을 제어하는데 많이 사용
const sym = Symbol();

const obj = {
  [sym] : 'value'
};

obj['sym'] // x
obj[sym] // o