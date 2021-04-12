// 즉시실행함수
// IIFE, Immediately-invoked Function

const a = 8
function double(){
  console.log(a * 2);
}

(function () {
  console.log(a*2);
}());

(function () {
  console.log(a*2);
})();