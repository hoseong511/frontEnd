'use strict'

// 객체 내 에서 속성(property) 과 메소드. 이 둘을 묶어 멤버라고도 함.

// const ho = {
  //   firstName: 'Ho',
  //   lastName: 'Song',
  //   getFullName : function () {
    //     return `${this.firstName} ${this.lastName}`
    //   }
    // }
    // console.log(ho);
    // console.log("hihihihi");
    
// 리터럴 방식?
const hoho = {} // "A", []

// 생성자 함수 ; 파스칼 케이스를 사용함 
function User(first, last){
  this.firstName = first
  this.lastName = last      
}
// JS: 프로토타입!!! 기반의 언어 
User.prototype.getFullName = function (){
  return `${this.firstName} ${this.lastName}`
}

// 인스턴스 생성!
const ho1 = new User('Ho', 'Song')
const amy = new User('Amy', 'Clarke')
const neo = new User('neo', 'smith')

console.log(ho1.getFullName());
console.log(amy.getFullName());
const user = {
  name: 'HEROPY',
  age: 85,
  emails: [
    'thdghtjd115@naver.com',
    'hoho1212@naver.com'
  ]
}

// localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')));
// localStorage.removeItem('user')

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
console.log(obj);
obj.age = 22
console.log(obj);
localStorage.setItem('user', JSON.stringify(obj))