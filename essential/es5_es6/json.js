const myData = require('./myData.json')
// import myData from './myData.json'
// json ""만 이용가능
const user = {
  name : 'Ho',
  age : 33,
  emails : [
    'thdghtjd115@naver.com',
    'hoho12@naver.com'
  ],
  'comapny-name!' : 'hocompany'
}
console.log(myData);
console.log(typeof myData);
console.log('user', user);

const str =JSON.stringify(user)
console.log(str);
console.log(typeof str);

const obj = JSON.parse(str)
console.log('obj', obj);