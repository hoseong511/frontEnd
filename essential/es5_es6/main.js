// 변수 유효범위(variable scope)
// var, let, const 최신 트렌드는 블록 레벨의 유효 범위인 let과 const만 이용함.

const scope = () =>{
  if (true) {
    const a = 123 
    var b = 1231231
    console.log(a);
  } // const와 let은 블록 레벨의 유효 범위를 갖는다.
  console.log(b); // var은 함수 레벨의 유효 범위
}

scope()
