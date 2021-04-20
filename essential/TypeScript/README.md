# TypeScript
- Typed JavaScript
- compiles to plain JavaScript
- Transpile

## Transpile
```sh
# global install!
  npm install typescript -g 
  # transpile on File
    tsc test.ts # transpile -> test.js
  # transpile on Project
    tsc --init # tsconfig.json
    tsc # transpile -> test.js
    
# project install
  cd project
  npm init
  npm install typescript
  npx tsc --init
  npx tsc
  npx tsc -w # watch Mode 
```

## Primitive Type
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- 프리미티브 형의 내장 함수를 사용 가능한것은 자바스크립트 처리 방식 덕분
- ES6 기준 - 6가지
  + boolean
  + number
  + string
  + symbol
  + null
  + undefined

- Type Casing
  wrapper 객체를 사용하듯이 대문자로 표현해서는 안된다.
  프리미티브를 나타내지 않는 형태들이다.

## 작성자와 사용자의 관점으로 코드 바라보기
- 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
- 컴파일러가 자동으로 타입을 추론하는 시스템
- 타입추론: 컴파일시 자동으로 타입을 추론함.
- noimplicitAny 에 의한 타입방어
- number 타입으로 추론된 리턴 타입
  ```ts
  function f4(a: number) {
    if (a > 0 ) P
    return a * 38;
  }
  // number 안에 undefined가 들어있음을 알수 있는 대목 ; 모든 타입에 포함된 null과 undefined
  console.log(f4(-5) + 5);
  strctNullChecks 옵션으로 타입방어
  ```
  - noimplicitReturns 옵션을 키자
  - object literal type
  - 나만의 타입을 만드는 방법
    ```ts
    interface personInterface {
      name: string;
      age: number;
    }

    type PersonTypeAlias = {
      name: string;
      age: number;
    }

    function f8(a: PersonInterface): string {
      return `이름은 ${a.name} 이고, 연령대는 ${Math.floor(a.age / 10 ) * 10 }대 입니다.`;
    }

    function f9(a: PersonTypeAlias): string {
      return `이름은 ${a.name} 이고, 연령대는 ${Math.floor(a.age / 10 ) * 10 }대 입니다.`;
    }
    ```
## structural type vs nominal type
### structural type system - 구조가 같으면, 같은 타입이다.
+ 구조가 같으면 같은 타입
  ```ts
    interface personInterface {
        name: string;
        age: number;
      }

    type PersonTypeAlias = {
      name: string;
      age: number;
    };

    let personInter: personInterface = {} as any;
    let persontype: PersonTypeAlias = {} as any;

    personInter = persontype;
    persontype = personInter
    ```
### nominal type system - 구조가 같아도 이름이 다르면, 다른 타입
(c언어, 자바): ts는 따르지 않음
```ts
type PersonId = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
  return id as PersonID;
}
function getPersonById(id: PersonID) {}
```
### duck typing - 설명을 좀더 찾아보기
(python)

