const ho = {
  name: 'Ho',
  normal() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
}// 기본함수를 축약형으로 사용가능함.

// class 같은 문법

class User {
  constructor(first, last) {  //하나의 함수라고 보면 됨!    
    this.firstName = first
    this.lastName = last
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}