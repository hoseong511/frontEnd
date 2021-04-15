const pi = 3.141592
console.log(pi);

const str = pi.toFixed(2) // 내장함수, 숫자 prototype에 들어있는 함수중하나!
console.log(str);
console.log(typeof str);

const integer = parseInt(str) // 전역함수!! setInterval같은거~
const float = parseFloat(str)
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);

console.log(`abs: ${Math.abs(-12)}`);

console.log(`min: ${Math.min(2, 8)}`);

console.log(`max: ${Math.max(2, 8)}`);

console.log(`ceil: ${Math.ceil(3.14)}`);

console.log(`floor: ${Math.floor(3.14)}`);

console.log(`round: ${Math.round(3.14)}`);

console.log(`random: ${Math.random()}`);

