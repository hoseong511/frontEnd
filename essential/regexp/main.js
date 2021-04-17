const str = ` 
010-1234-1234
thdghtjd115@naver.com
https://www.omdbapi.com/?apikey=12the312312&s=frozen
The quick brown fox jumps over the lazy dog.
abbbbbbbbbccccccccccccddddddddd` // 와우 백틱 쓰면 엔터 입력이 가능하네 \n 이거 안써도 되는구나.

// const reg = new RegExp('the', 'gi') // g: 배열에 넣기, i: 대/소 구별x <- 생성자 방식
const reg = /the/gi // 리터럴 방식
console.log(str.match(reg))