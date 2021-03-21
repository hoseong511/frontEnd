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
#### 3.2 복합
#### 3.3 가상 클래스
#### 3.4 가장 요소
#### 3.5 속성