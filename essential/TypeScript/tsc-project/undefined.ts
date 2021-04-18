// 이 변수들에 할당할 수 있는 것들은 거의 없다.
let u: undefined = undefined; // 값을 할당하지 않은 변수를 undefined, object의 property가 없을 때도 undefinde입니다.
let n: null = null; // null 이라는 값으로 할당된 것 
// tsconfig 옵션에서 --strictNullChecks를 사용해야함.
// 사용안하면 subtype이 됨..

// let myName1: string = null;
let v: void = undefined;

let union: string | null= null; // string과 null의 합집합 식으로 표현가능!
// 이를 타입가드라함

union = 'Mark';

let n1: null = null; //값이 들어갈 준비가 된 상태
console.log(typeof n1); // object

let u1: undefined = undefined; // 값을 할당하지 않은 변수를 undefined, object의 property가 없을 때도 undefinde입니다.
console.log(typeof u1); // undefined!!!!!!!

console.log(n);
