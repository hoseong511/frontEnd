// .length .concat .forEach() .filter()

const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', "Cherry"]

console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);
console.log(numbers.concat(fruits));


fruits.forEach(function (element, index, array) {
  console.log(element, index, array);
})

let a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`);
})
console.log(a);

// const b = fruits.map(function (fruit, index) {
//   return {
//     id: index,
//     name: fruit
//   }
// })
let b = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}))
console.log(b);// 화살표함수를 이용할 때 return 이용법

// ------------ map, filter 새로운 배열을 반환함!
a = numbers.map(number => number < 3);
console.log(a);

b = numbers.filter(number => number < 3);
console.log(b);

// .find() .findIndex()
a = fruits.find(fruit => /^B/.test(fruit)); // 정규표현식
console.log(a);

b = fruits.findIndex(fruit =>/^B/.test(fruit));
console.log(b);

// .includes()

a = numbers.includes(3)
console.log(a);

b = fruits.includes('he')
console.log(b);

// .push() .inshift()

numbers.push(5)
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

// .reverse()

numbers.reverse()
fruits.reverse()

console.log(numbers);
console.log(fruits);

// .splice()

numbers.splice(2,1)
console.log(numbers);

numbers.splice(2, 1, 88);
console.log(numbers);

fruits.splice(2,0,'Orange');
console.log(fruits);