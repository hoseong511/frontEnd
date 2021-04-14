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


