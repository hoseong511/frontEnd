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
- focus(xx:focus): 선택자 xx요소가 포커스되면 선택. 포커스가 가능한 요소에만 주로 동작(input, select, ) 단, 이외의 태그에서는 ```tabindex="-1"``을 추가하면 동작됨.
- first-child(xx:first-child): 선택자 xx가 형제 요소 중 첫째라면 선택.
- last-child(xx:last-child): 선택자 xx가 형제 요소 중 막내라면 선택.
```html
<div class="fruits">
  <span>딸기</span>
  <span>딸기</span>
  <div>오렌지</div>
  <p>망고</p>
  <h3>사과</h3>  
</div>
  ```
- nth-child(xx:nth-child(n)): 선택자 xx가 형제 요소 중 (n)째라면 선택.
```css
.fruits *:nth-child(2n) {
  color: red;
}
/* 제로베이스드 넘버링으로 n은 0부터 시작함. 짝수 번째에 css적용 구조 */
/* 2n, 2n+1, n+3, -n+3, ... */
```
- not(xx:not(yy)): 선택자 yy가 아닌 xx요소 선택.

#### 3.4 가상 요소
- before(xx::before): 선택자 xx요소의 내부 앞에 내용을 삽입.(가상의 인라인 요소.. )
- after(xx::after): 선택자 xx요소의 내부 뒤에 내용을 삽입. 
- ```display: block;```을 추가하면 해당 요소가 인라인 요소에서 블럭 요소로 변경이 된다.(width, height요소가 적용될 수  있다.)
#### 3.5 속성
- attr([xx]): 속성 xx을 포함한 요소 선택(ex. disabled를 활용가능.)
- attr=val([type="password"]): 속성 type의 값이 password인 요소 선택.
