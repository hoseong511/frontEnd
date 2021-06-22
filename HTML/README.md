## **CONTENTS**
- <a style="font-size: 13px; " href="https://hoseong511.github.io/frontEnd/HTML/exec"> exec </a>
- Overwatch <a style="font-size: 13px; " href="https://hoseong511.github.io/frontEnd/HTML/overwatch/deploy"> Link </a>
- Starbucks<a style=" font-size: 13px; " href="https://hoseong511.github.io/frontEnd/HTML/starbucks"> Link</a>
  
## 1. HTML/CSS/JS로 만드는 스타벅스 웹사이트_전체 개요
## 2. VS Code
- tip!! Beautify 플러그인 설치하기! 
    - command + shift + p, 바로가기 키 설정 찾기
    - beautify selection 찾기
    - 원하는 단축키 설정 (ex. option + command + /)

      ![ScreenRecorderProject4_2](https://user-images.githubusercontent.com/62678380/110417331-bbfad000-80d8-11eb-99a0-432995bb4ee9.gif)

    - Auto Rename Tag 앞태그와 뒷태그가 같이 수정됨
    - Live Server는 개발을 위해 임시로 로컬서버를 오픈하는 기능
    - 단축키 정리

## 3. 시작!
  - ! + tab
  - ```<!DOCTYPE html>``` HTML5형식에 맞게 실행하도록 명시
  - 시작태그와 종료태그 (**브라우저가 이해할 수 있는 규칙을 학습**)
  - ```<html></html>``` 문서의 전체 범위
  - ```<head></head>``` 문서의 정보를 나타내는 범위
    웹 브라우저가 해석해야 할 웹페이지의 제목, 설명, 사용할 파일 위치, 스타일(css) 같은, 웹페이지의 정보
  - ```<body></body>``` 문서의 구조를 나타내는 범위
  - 태그 살펴보기
  - 이미지 출력하기
  - 상대경로와 절대경로를 통해 이미지를 출력해보자
    ```<img src="" alt="">``` src는 이미지 경로, alt는 이미지가 출력되지 않을 시 출력할 메시지
    ./는 생략가능   
    절대경로 ```/image/logo.png```   
    상대경로 ```../image/logo.png```   
  - css 선택자
  - css 초기화 -> 브라우저별로 적용되는 기본 css를 초기화시켜줌 (+ ex. body{all: unset;})
    ```reset css cdn``` 에서 
    ``` HTML
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">    
    ```    
    reset.min.css가 압축된 버전   
    **항상 초기화 시키려는 코드가 제일 위에 나와야함.**
  - EMMET 에밋: 코드 자동완성

## HTML 개요
### 01. 기본 문법
- 요소(element) : ```<태그>내용</태그>```, 시작태그 닫힌 태그
### 02. 부모와 자식 관계의 이해
```HTML
부모 |--<div>
요소 | <div></div> <-- 자식요소
    |--</div>
```
 코드를 항상 보기 좋은 상태로 관리하자.

### 03. 빈태그
```   <태그>     vs     <태그/>```   
HTML 1/2/3/4/5    XHTML/HTML5   
```<태그 속성="값"> 내용</태그>``` 기능의 확장!   
**빈태그들은 속성과 값을 활용하여 이용함**   
### 04. 글자와 상자
요소가 화면에 출력괴는 특성
- 인라인(inline)요소 : 글자를 만들기 위한 요소들.
- 블록(Block)요소: 상자(레이아웃)를 만들기 위한 요소들.

```HTML
<!-- 인라인요소: 글자처럼 취급됨. 줄 바꿈하면 띄어쓰기가 된다. 글자 요소라서 가로, 세로 크기를 조정할 수 없다-->
<span>Hello</span>
<span>world</span>

<span style="width:100px;">Hello</span>
<span style="height:100px;">world</span> 
적용x

<span style="margin:100px;">Hello</span> 외부 여백
<span style="padding:100px;">world</span> 내부 여백
위아래는 적용 x   
   
인라인 요소 안에 블록요소를 넣을 수 없다.   
```
```HTML
<div>Hello</div> 가로크기는 부모 요소의 크기만큼 자동으로 늘어남!
<div>World</div> 세로크기는 포함한 콘텐츠 크기만큼 자동으로 줄어듦

인라인 요소와 다르게 블럭요소는 영역크기조절이 가능하다.
```

## HTML 핵심정리
### 01. 핵심요소
블록 요소
- div: 특별한 의미가 없는 구분을 위한 요소(Division)
- h1: 제목을 의마하는 요소(Heading)
- p: 문장을 의미하는 요소(Paragraph)
- ul: 순서가 필요없는 목록의 집합을 의미(Unordered List)
- li: 목록 내 각 항목 (List item)
   
인라인(글자) 요소
- img: 이미지 삽입 요소
- a: 다른/같은 페이지로 이동하는 하이퍼링크를 지정하는 요소(Anchor) ```<a href="" target="_blank"></a>```새 탭에 창열기
- span: 특별한 의미가 없는 구분을 위한 요소
- br: 줄바꿈 요소(Break)
   
인라인(글자)요소이면서 블록(상자)요소
- input: 사용자가 데이터를 입력하는 요소
  **text**   
  value, placeholder(사용자가 입력할 값에 대한 힌트), disabled(입력 요소 비활성화, js 이용해서)   
  **checkbox**   
  label과 같이 이용함
  ```HTML
  <label>
    <input type="checkbox" /> Apple
  </label>
  <label>
    <input type="checkbox" checked /> Banana
  </label> 미리 체크함
  ```
  **radio**   
  사용자에게 체크 여부를 그룹에서 1개만 입력 받음
  ```HTML
  <label>
    <input type="radio" name="ho"/> Apple
  </label>
  <label>
    <input type="radio" name="ho" /> Banana
  </label> 미리 체크함
  ```

테이블 요소(하나의 블럭요소)
- table
- tr: 행을 지정하는 요소(Table Row)
- td: 열을 지정하는 요소(Table Data)

### 02. 핵심요소 출력 연습
- css 상속!
- 래핑! ```<span></span>```으로 처리하기
- div는 블럭요소이고 수직으로 쌓이려는 속성
- input에서 disabled속성!
- label안에 넣었을 시
- table을 잡아서 레이아웃을 잡는 것은 예전일.. 지금은 훨씬 더 좋은 방식을 이용한다.
- 주석은 cmd + / 하면 생김 

### 03. 전역 속성
- ```<태그 title="설명"></태그>``` 요소의 정보나 설명을 지정함 -> 커서를 올려놓으면 해당 설명이 나타남
- ```<태그 style=""></태그>``` 요소에 적용할 스타일을 지정
- ```<태그 class="이름"></태그>``` 요소를 지칭하는 중복가능한 이름
- ```<태그 id="이름"></태그>``` 요소를 지칭하는 고유한 이름
- ```<태그 data-이름="데이터"></태그>``` 요소에 데이터를 지정함
- ```<script defer src="./main.js"></script>``` defer를 쓰면 전체 HTML을 읽어들인 후 js를 실행시킨다.



  
  
