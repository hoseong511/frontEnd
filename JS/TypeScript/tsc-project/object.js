"use strict";
// create by object literal 
var person1 = { name: 'Mark', age: 39 };
// create by Object.create
var person2 = Object.create({ name: 'Mark', age: 33 }); //union 형태네.
// primitive type 이 아닌 것
// ex string, number 같이 단일로 사용하는것
Object.create(42); //error!!!
