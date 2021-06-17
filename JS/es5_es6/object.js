const userAge = {
  name: 'Ho',
  age: 20 
}
const userEmail = {
  name: 'HO',
  email: 'thdghtjd115@naver.com'
}
// Object.prototype.assign 이 아닌 static으로 선언된 메소드임.
//                           대상객체, 출처객체
const target = Object.assign({},userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);
// 참조형 데이터!! 객체,배열, 함수.. 메모리의 주소가 같다는 의미임

const a = { k: 123}
const b = { k: 123}
console.log(a === b);

const user = {
  name: 'Ho',
  age: 21,
  email: 'thdghtjd115@naver.com'
}

const keys = Object.keys(user)
console.log(keys);

console.log(user['email']);

const values = keys.map(key => user[key])
console.log(values);