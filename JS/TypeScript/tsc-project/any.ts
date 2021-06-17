function returnAny(message: any): any {
  console.log(message);  
}

const any1 = returnAny('리턴은 아무거나');

any1.toString();

// 타입 안전성은 typeScript를 사용하는 주요 이유 중 하나이며 필요하지 않은 경우
// any를 사용하지 않도록 해야함.

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;
// 개체를 통해 전파되는 것을 확인

function leakingAny(obj: any) {
  const a = obj.num; // a의 타입을 지정하면 누수를 막는다!
  const b = a + 1;
  return b;
}
const c = leakingAny({num : 0});
c.indexOf('0');