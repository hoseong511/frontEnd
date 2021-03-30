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