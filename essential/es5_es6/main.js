'use strict'
import getType from './getType'

// 데이터의 타입을 알아내는 방법
console.log(typeof "hello!");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

// typeof와 아래방식의 차이를 확인하기

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))