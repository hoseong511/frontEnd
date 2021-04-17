let str = ` 
010-1234-1234._
thdghtjd115@naver.com
https://www.omdbapi.com/?apikey=12the312312&s=frozen
The quick brown fox jumps over the lazy dog.
abbbbbbbbbccccccccccccddddddddd
http://localhost:1234
d_
동해물과 백두산이 마르고 닳도록` // 와우 백틱 쓰면 엔터 입력이 가능하네 \n 이거 안써도 되는구나.
//이스케이프 문자 \을 이용해서 본래의 기능에서 벗어나 상태가 바뀌는 문자를 의미 
console.log(
  str.match(/[가-힣]{1,}/g)
);
// console.log(
//   str.match(/\w/g)
// );
console.log(
  str.match(/\bf\w{1,}\b/g) // 소문자 f로 시작하는 영단어 찾기
);
console.log(
  str.match(/\d{1,}/g) //숫자 덩어리!
);


console.log(
  str.match(/\s/g)
);

const h = `   the hello world   !
  
  `

console.log(
  h.replace(/\s/g, '')
);

///////// 일치

console.log(
  str.match(/.{1,}(?=@)/g)
);  
console.log(
  str.match(/(?<=@).{1,}/g)
);  