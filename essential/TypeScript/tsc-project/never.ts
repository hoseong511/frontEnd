// 리턴에 사용되는 never 어떠한 경우에도 리턴되지 않는 never를 사용함. 
function error(message: string): never {
  throw new Error(message); 
}

function fail() {
  return error('failed');
} 

function infiniteLoop(): never {
  while (true){

  }
}

let a: string = 'hello';
declare const b: string | number;

if (typeof a !== 'string') {
  a;
}

if (typeof b !== 'string') {
  b;
}

type Indexable<T> = T extends string ? T & { [index: string]: any} : never;

const b: Indexable<string> = '';
// 잘못된 타입을 넣는 실수를 막는 역할을 한다.

// ?아직 잘 모르겠는데 분명한 정보인데 굉장히 뭔가 있어보이게 작성하는것 같음..