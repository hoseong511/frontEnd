const _ = require('lodash')
// import _ from 'lodash'
// 얕은 복사(Shallow copy), 깊은 복사 
const user = {
  name: 'Ho',
  age: 20,
  emails: ['thdghtjd115@naver.com']
}
const copyUser = user
console.log(copyUser === user);

user.age = 22
console.log('user', user);
console.log('copyUser', copyUser);

console.log('---------');

const copyUser2 = Object.assign({}, user)
console.log(copyUser2 === user);
user.age = 23
console.log(copyUser2);
console.log(user);

const copyUser3 = {...user}
console.log(copyUser3 === user);
user.age = 25
console.log(copyUser3);
console.log(user)

user.emails.push('hoho@naver.com')
console.log(copyUser3);
console.log(user)
console.log(user.emails === copyUser3.emails); // 얕은 복사는 배열로 담겨있는 데이터까지는 복사하지 못한다.

// ------------------------ 깊은복사
const copyUser4 = _.cloneDeep(user) // lodash를 이용해서 깊은 복사를 함.
console.log(copyUser4);
console.log(user)

user.emails.push('ho12@naver.com');
console.log(copyUser4);
console.log(user)