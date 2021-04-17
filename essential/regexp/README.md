# RegExpression
정규표현식이란 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어입니다.
   
   1. 문자 검색
   2. 대체
   3. 추출

## 정규표현식 테스트 사이트

## 정규식 할당법
- 생성자 방식
- 리터럴 방식

# 정규표현식(RegExp)

## 역할
- 문자 검색
- 문자 대체
- 문자 추출

## 테스트 사이트
https://regexr.com/

## 정규식 생성
```js
//생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자
```js
const str = ` 
010-1234-1234
thdghtjd115@naver.com
https://www.omdbapi.com/?apikey=12the312312&s=frozen
The quick brown fox jumps over the lazy dog.
abbbbbbbbbccccccccccccddddddddd`
```

## 메소드

메소드 | 문번 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치여부(boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자 Array 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자 구분 안하고 일치(ignore case)
m | 여러 줄 일치(multi line)