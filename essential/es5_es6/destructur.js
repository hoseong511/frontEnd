// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Ho',
  age: 21,
  email: 'thdghtjd115@naver.com'
}

const { name: heropy, age, email, address = 'Korea' } = user // 기본값을 지정 가능!
// E.g, user.age , user['age'] // name : heropy 이런식으로 변수할당가능

console.log(`사용자의 이름은 ${heropy}입니다.`);
console.log(`${heropy}의 나이는 ${age}세 입니다.`);
console.log(`${heropy}의 이메일 주소는 ${user.email} 입니다.`);
console.log(address);

const fruits = ['Apple', "Banana", 'Cherry'] //array는 []로 구조분해함
const [, b] = fruits
console.log(b);