// String
//다른 언어에서와 마찬가지로 텍스트 형식을 참조하기위해 'string' 형식을 사용함.
let myName: string = 'Ho';

myName = 'Anna';
// ES6부터 추가 기능인 template string!! 
// backtick(`) 과 ${} 를 활용해서 이용가능
let fullName: string = 'Ho';
let age: number =39;

let sentence: string = `Hello ${fullName}!!.

you'll be ${age+1} years old next year!`;
console.log(sentence);

// 개행 까지 인식하는구나