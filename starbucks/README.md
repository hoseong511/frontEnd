## Starbucks Coffe 홈페이지 프론트엔드 클론
스타벅스 클론
### 0. 준비
images, favicon.ico, favicon.png 챙기기
### 0.1 오픈그래프 이용
소셜미디어(sns)에서 공유될 떄 우선적으로 이용될 웹사이트의 정보
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="website" />
<meta property="og:url" content="website" />
<meta property="og:title" content="website" />
<meta property="og:image" content="website" />
```
### 0.2 폰트적용
- google font 검색 후 https://fonts.google.com/ 접속!
- nanum 검색 후 나눔고딕체를 이용하자
- 폰트에 라이선스가 있으므로 항상 확인하자!

### 0.3 아이콘 사용
- google material icon 검색 후 https://material.io/resources/icons/?style=baseline 접속
- 해당 url의 메인페이지로 이동 후 get started로 이동
- web > web getting started로 이동
- ```<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">``` 를 이용. cdn 말고 구글 아이콘!
- 다시 https://material.io/resources/icons/?style=baseline 로 가서 원하는 아이콘 검색하기
  ```html
  <span class="material-icons">
    login
  </span>
  ``` 
  이런 형식으로 제공되는 것을 확인

### 1. Header
- header 태그 이용. 다른 기능이 있지는 않다.
- 절대 경로와 상대 경로
- 폰트사이즈는 기본적으로 16px, 줄 간격은 1.4가 좋음
- img는 인라인요소, baseline이 추가되어있다.
  <img src="https://user-images.githubusercontent.com/62678380/112954227-2bfcf300-9179-11eb-8772-b4855d780e58.png" style="margin: 0 auto; display: block; width: 200px; height: 200px;" >   
- 부모요소 기준으로 시작과 끝 위치를 명확히 지정을 해주고 margin: auto를 사용하면 가운데 정렬이 된다.

### 1.1 드롭다운 메뉴
- a 태그 사용시 팁: #을 이용하거나 javascript:void(0)을 이용하자
- 항상 상위 선택자를 넣어주어야 원하는 태그의 값을 명확히 불러올 수 있다.
- 미리 html 구조의 태그들을 css로 옮겨놓자
- position: absolute; 를 하면 display: block; 이 자동적으로 된다.
- font가 없으면 두번째 font를 선택함 
- 

### 1.2 메뉴의 검색 part
- 일치 선택자 ``` .search.focused {}``` 이런식으로 붙여서 사용하게 된다.