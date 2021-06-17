// 전개연산자 (Spread)

const fruits = ['Apple', 'Banana', "Cherry", 'Orange']
console.log(fruits);
console.log(...fruits);

function toObject(a, b, ...c) { // rest parameter! 나머지 것들을 한번에 담아냄.
  return {
    a, //이렇게도 나타낼수 있음
    b: b,
    c: c
  }
}
console.log(toObject(...fruits));