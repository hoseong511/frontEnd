// this
// 일반(Normal) 함수는 호출 위치 따라서 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

const ho = {
  name: 'Ho',
  normal: function (){
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
}

ho.normal()
ho.arrow()

const amy = {
  name: 'Amy',
  normal: ho.normal, // 함수 호출이 아닌 할당!
  arrow: ho.arrow
}
amy.normal()
amy.arrow()


function User(name) {
  this.name = name
}
User.prototype.normal2 = function(){
  console.log(this.name);
}
User.prototype.arrow2 = () => {
  console.log(this.name);
}
const ho2 = new User('Ho')

ho2.normal2()
ho2.arrow2()

const timer = {
  name: 'Ho!!',
  timeout: function(){
    setTimeout(function () {
      console.log(this.name); // 호출위치에서 this를 찾음!!
    }, 2000)
  }
}
timer.timeout()

const timer2 = {
  name: 'Ho!!',
  timeout2: function(){
    setTimeout(() => {
      console.log(this.name); // 자신이 위치한 함수 범위에서 this를 찾음
    }, 2000)
  }
}
timer.timeout2()