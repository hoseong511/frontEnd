## CSS 개요
### 1. 기본 문법, 주석
```css
/* div는 선택자임. */
div {
  font-size: 50px;
  color: blue;
  text=decoration: underline;
}
```
- ```선택자 {속성: 값;}``` 스타일을 적용할 요소를 선택(선택자), 스타일의 종류(속성)
-  
### 2. 선언 방식
- 내장 방식, 링크 방식, 인라인 방식, @import 방식
```html
<!-- html안에 직접 작성하는 방식, 내장방식 -->
<style>
  div {
    color: red;
    margin; 20px;
  }
</style>
```
**인라인 방식**
```html
<!-- 인라인 방식, 요소의 style속성에 스티일을 직접작성하는 방식, 유지보수에 최악.. -->
<div style="color: red; margin:20px;"></div>
```
**링크방식**
```html
<!-- 병렬방식이다. 직렬보다 빠름. -->
<link rel="stylesheet" href="./css/main.css" />
```
**@import방식** 
```css
/* 직렬방식이다보니 실제로 css적용이 지연될 수 있음. */
/* main.css(다른 css를 가져오는 방식)*/
@import url("./box.css");

div {
  color: red;
  margin: 20px;
}

/* box.css */
.box {
  background-color: red;
  padding: 20px;
}
```

### 3. 선택자 
#### 3.1 기본
- 전체 선택자(*): 모든 요소를 선택하는 기본 선택자   
- 태그 선택자(xx): 태그의 이름이 xx인 요소를 선택하는 선택자.   
- 클래스 선택자(.xx): class 속성의 값이 xx인 요소를 선택   
- 아이디 선택자(#xx): id 속성의 값이 xx인 요소를 선택

#### 3.2 복합
- 일치 선택자(xxyy): 선택자 xx와 yy를 동시에 만족하는 요소 선택
- 자식 선택자(xx > yy): 선택자 xx의 자식 요소 yy를 선택(잘 사용안함.. 주로 하위 선택자)
- 하위 선택자(xx yy): 선택자 xx의 하위 요소 yy를 선택
- 인접 형제 선택자(xx + yy): 선택자 xx의 다음 형제 요소 yy하나를 선택.
  ```html
  <ul>
    <li>딸기</li>
    <li>딸기</li>
    <li class="orange">오렌지</li>
    <li>딸기2</li>
    <li>딸기</li>
  </ul>
  ```
  ```css
    ul + .orange {
      color: red;
    }
    <!-- 딸기2가 선택이 된다. -->
  ```
- 일반 형제 선택자(xx ~ yy): 선택자 xx의 다음 형제 요소 yy 모두를 선택.
#### 3.3 가상 클래스
동작을 제어하는 클래스.
- hover(xx:hover): 선택자 xx요소에 마우스 커서가 올라가 있는 동안 선택.
- active(xx:active): 선택자 xx요소에 마우스를 클릭하고 있는 동안 선택.
#### 3.4 가장 요소
#### 3.5 속성