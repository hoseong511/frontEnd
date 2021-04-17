let str = ` 
010-1234-1234.
thdghtjd115@naver.com
https://www.omdbapi.com/?apikey=12the312312&s=frozen
The quick brown fox jumps over the lazy dog.
abbbbbbbbbccccccccccccddddddddd` // 와우 백틱 쓰면 엔터 입력이 가능하네 \n 이거 안써도 되는구나.

console.log(str.match(/\.$/gim)); //이스케이프 문자 \을 이용해서 본래의 기능에서 벗어나 상태가 바뀌는 문자를 의미 
// m 한 문장에서 . 으로 끝나는지 확인!