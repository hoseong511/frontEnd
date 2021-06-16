// any 대신 unknown!
declare const maybe: unknown;

const aNumber: number = maybe; // 타입가드 적용 전

if (maybe === true) {
  const aBoolean: boolean = maybe; // 타입가드!

  // const aString: string = maybe;
}

if (typeof maybe === 'string') {
  const aString: string = maybe;  
} /////// 이런식으로 타입을 가드해서 누수를 방지함!

// api의 동적데이터를 다루는데 용이할 듯?