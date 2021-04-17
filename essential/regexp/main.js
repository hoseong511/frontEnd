let str = ` 
010-1234-1234.
thdghtjd115@naver.com
https://www.omdbapi.com/?apikey=12the312312&s=frozen
The quick brown fox jumps over the lazy dog.
abbbbbbbbbccccccccccccddddddddd
http://localhost:1234
d` // 와우 백틱 쓰면 엔터 입력이 가능하네 \n 이거 안써도 되는구나.
//이스케이프 문자 \을 이용해서 본래의 기능에서 벗어나 상태가 바뀌는 문자를 의미 
console.log(
  str.match(/fox|dog/g)
);
console.log(
  str.match(/h..p/g)
);
console.log(
  str.match(/https?/g) // a? a가 포함된 문자열 or 포함x 문자열
);
console.log(
  str.match(/d{2,}/g)
);
console.log(
  str.match(/\w{2,3}/g)
); // 숫자/알파벳이 연속되는 문자열을 모두 찾음
console.log(
  str.match(/\b\w{2,3}\b/g) //경계값으로 찾음.
);