'use strict'

// 비교 연산자(comparison operator)
const a = 1
const b = 2

console.log(a === b) // 일치 연산자 데이터의 값과 타입을 동시에 확인함.

function isEqual(x, y) {
  return  x === y
}

console.log(isEqual(1,1));
console.log(isEqual(2,'2'));
console.log(isEqual(1,1));


const c = 1
const d = 2

console.log(c !== d);

//논리 연산자(logical operator)

const e = 1 === 1
const f = 'AB' === 'AB'
const g = false
console.log(e);
console.log(f);
console.log(g);

console.log('&&: ', e && f && g);
console.log('||: ', e || f || g);
console.log('!: ', !e);

