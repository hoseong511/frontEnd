// .length .concat .forEach()

const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', "Cherry"]

console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);
console.log(numbers.concat(fruits));


fruits.forEach(function (element, index, array) {
  console.log(element, index, array);
})

const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`);
})
console.log(a);

// const b = fruits.map(function (fruit, index) {
//   return {
//     id: index,
//     name: fruit
//   }
// })
const b = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}))
console.log(b);// 화살표함수를 이용할 때 return 이용법

