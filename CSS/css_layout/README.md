  <strong><h1 align="center">CSS Layout Master</h1></strong>
  <div align="center">
    <img src="https://nomadcoders.co/logos/html5.png" width= 20%; alt="html5" />
    &nbsp;
    <img src="https://nomadcoders.co/logos/css3.png" width= 20%; alt="css3" />
    &nbsp;
    <img src="https://nomadcoders.co/logos/sass.png" width= 20%; alt="sass" />
  </div>
  <br>

## **INTRODUCTION**
- 아래의 웹사이트들을 클론코딩하면서 CSS Layout을 학습한다.
  - (영화 웹) [https://besthorrorscenes.com](https://besthorrorscenes.com)
  - (쇼핑몰) [https://paint-box.com](https://paint-box.com)
  - (포트폴리오) [http://10x19.co/](http://10x19.co/)
  - (포트폴리오. 프랑스) [http://www.z-o-o.fr/](http://www.z-o-o.fr/)
  - (쇼핑+포트폴리오. 호주) [https://schwartzmedia.com.au](https://schwartzmedia.com.au)
  - (쇼핑몰. 덴마크) [https://tolv.dk](https://tolv.dk)
  - (포트폴리오) [https://rodicdavidson.co.uk](https://rodicdavidson.co.uk)
  - (포트폴리오. 독일) [https://beige.de](https://beige.de)
  - (개인. 이력서) [https://donicaida.com](https://donicaida.com)
  - (단체 소개 웹) [https://canalstreet.market](https://canalstreet.market)
  - (쇼핑몰) [https://wonhundred.com/](https://wonhundred.com/)
- 준비물
  - VScode
  - Chrome 브라우저
  - Node.js(SCSS를 CSS로 변환 시 필요)
---
## **CONTENTS**
### 1. Flexbox

- flex-direction
- order
- justify-content
- align-items
- align-self
- flex-wrap
- align-content
- flex-grow
- flex-shrink
- flex-basis

### 2. Grid

- grid-template-columns / grid-template-rows
- column-gap / row-gap => gap
- grid-template-areas
- grid-column-start / grid-column-end => grid-column
- grid-row-start / grid-row-end => grid-row
- grid-template
- justify-items / align-items => place-items
- justify-content / align-content => place-content
- justify-self / align-self => place-self
- grid-auto-rows
- grid-auto-columns
- grid-auto-flow

### 3. Keywords & Functions

- repeat
- fr
- minmax
- auto-fit
- auto-fill
- min-content
- max-content

## 4. SCSS

- Variables
- Nesting
- Mixins
- Extend
- Responsive Mixins

-----
## **1. FLEXBOX**
### 1.0 FLEXBOX 이전에 사용되었던 기술
- inline-block 이다 보니 상자 옆 여백이 있다.   
 여백은 부모 요소에 font-size를 0 으로 만들면 사라진다.   

- :nth-child()를 이용해서 개별적으로 조작해야 한다.
  <p class="codepen" data-height="264" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="rNyoJVY" style="height: 264px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rNyoJVY">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/rNyoJVY">
  Click!</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

- 화면 크기에 따라서 형식이 보존되지 않는다.

### 1.1 First Rule of Flexbox
- flex를 이용하기 위해서는 container>item 기억!
- 부모요소에 display: flex;
- 부모요소를 통해서 배치를 조작한다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="mdWaNVx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="mdWaNVx">
    <span>See the Pen <a href="https://codepen.io/hoseong511/pen/mdWaNVx">
    Click!</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
  </p>

### 1.2 Main Axis and Cross Axis
- flex-direction: row; 이면 main-axis는 horizontal, cross-axis는 vertical
- main-axis의 item들을 배치하는 속성은 justify-content,
cross-axis는 align-items
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="RwpEXKM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="RwpEXKM">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/RwpEXKM">
  Click!</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 1.3 Column and Row
- flex-direction: column; 으로 바꾸면 main-axis가 vertical로 바뀐다.
- main-axis의 item 배치하는 속성은 justify-content, vertical 방향으로 justify-content
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="RwpEXKM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="RwpEXKM">
    <span>See the Pen <a href="https://codepen.io/hoseong511/pen/RwpEXKM">
    Click!</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
     
### 1.4 align-self and order
- align-self와 order는 container가 아닌 item이 이용하는 속성이다.
- align-self는 item의 배치를 개별적으로 할 수 있게 조작한다.
- order는 배치되는 우선순위를 조작한다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="jOBXgKE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="align-self, order">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/jOBXgKE">
  align-self, order</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 1.5 wrap, nowrap, reverse, align-content
- flex-wrap
- row-reverse, column-reverse, wrap-reverse
- align-content: cross-axis(line)을 조작한다. flexbox가 2줄 이상일 때 속성이 적용된다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="MWpZNze" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="MWpZNze">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/MWpZNze">
  Click!</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 1.6 flex-grow, flex-shrink
- flex-grow: 2; 커지는 비율을 2배
- flex-shrink: 2; 작아지는 비율을 2배
- 반응형 웹 페이지에 꼭 필요한 속성(property)! -> 화면크기가 커지면 요소들도 같이 커진다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="LYWqPGJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="flex-shrink, flex-grow">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/LYWqPGJ">
  flex-shrink, flex-grow</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 1.7 flex-basis
- item들에 이용하는 속성
- main-axis를 따라간다.
- 늘거나 줄기 전 초기 크기를 지정한다.
- flex-grow 값이 우선 적용된다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="vYxbBmw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="vYxbBmw">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/vYxbBmw">
  Click</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 1.8 Flexbox Froggy
- flex-flow 는 flex-wrap, flex-direction의 단축속성이다.
- 이런것도 있네.. 신기하다
  ![image](https://user-images.githubusercontent.com/62678380/122174746-ecaf8a00-cebd-11eb-90ae-fa18cb39ed8a.png)

## **2. GRID**
### 2.1 Life Before Grid
- flexbox에서 gird를 만들기 어렵다.
- space-between 때문에 4와 5가 띄어져있다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="MWpLWmz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="flex-&amp;gt;grid">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/MWpLWmz">
  flex-&gt;grid</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.2 CSS Grid Basic Concepts 
- display: grid;
- grid-template-rows
- grid-template-columns
- row-gap, column-gap
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="RwpvwQp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="grid-template">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/RwpvwQp">
  grid-template</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.3 Grid Template Areas 
- layout을 만들 때 용이하다.
- 자식요소에 선언을 한 후 부모에서 사용한다.
- auto: 화면을 채운다.
- repeat(n, m) 반복횟수: n, 크기: m
  ```CSS
  .grid {
    grid-template-rows: repeat(4, 200px);
    grid-template-areas:
    <!-- 사용 -->
    "header header header header"
    "content content content"    
    "footer footer footer footer";
  }
  .header {
    <!-- 선언 -->
    grid-area: header;
  }
  ```

  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="KKWYwXb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="KKWYwXb">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/KKWYwXb">
  Click</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.4 Rows and Columns 
- grid-template-areas를 사용하지 않고 조작하는 방법이다.
- grid-row/column-start/end를 이용한다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="poeBvVB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="poeBvVB">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/poeBvVB">
  poeBvVB</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.5 Shortcuts 
- `grid-column/row: start / end ;` 이렇게 단축해서 사용한다.
- `span 4` grid에서 4칸을 차지한다.
- `1/-1` 시작과 끝을 이렇게 표현할 수 있다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="JjWVozE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JjWVozE">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/JjWVozE">
  JjWVozE</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.6 Line Naming 
- `grid-template-rows: [start-line] 100px [end-line]` 이런식으로 사용한다.
- `repeat(,[line-name])` repeat에서도 사용할 수 있다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="abJxONJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="abJxONJ">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/abJxONJ">
  Click</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.7 Grid Template 
- `fr`: fraction, % 같은 것으로 요소가 담겨있는 크기의 비율로 크기를 계산한다.  
- `grid-template`를 이용해서 layout을 한눈에 볼 수 있다.
  ```css
    .grid-container {
      display: grid;
      gap: 10px;
      height: 50vh;
      grid-template:
        "header header header header" 1fr
        "content content content nav" 2fr
        "footer footer footer footer" 1fr / 1fr 1fr 1fr 1fr;
    }
  ```
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="VwpNLdG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="VwpNLdG">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/VwpNLdG">
  Click</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.8 Place Items 
- items는 grid내의 items의 위치를 조작
- `justify-items`는 수평, `align-items`는 수직
- 위치가 정해지 않았을 때, 기본적으로 늘려지는 성질
- `place-items`는 위 두개의 속성의 단축 속성이다.
- `place-items: [horizontal] [vertical];` 
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="oNZOeOW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="oNZOeOW">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/oNZOeOW">
  Click</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.9 Place Content 
- content는 그리드 자체를 위치를 조작
- `justify-content`는 수평, `align-content`는 수직 
- `place-content` 또한 위 두개의 단축속성이다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="oNZOGNw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="oNZOGNw">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/oNZOGNw">
  Click</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.10 Auto Columns and Rows 
- `place-self` items의 위치를 조작한다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="abJxLdp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="place-self">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/abJxLdp">
  place-self</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

- `grid-auto-rows/columns`는 grid의 크기에 제한되지 않고 무한히 items들에 스타일을 적용할 수 있다. 
- `grid-auto-flow`는 grid의 items를 채워나갈 방향을 설정한다.

  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="hoseong511" data-slug-hash="jOBRGWg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="jOBRGWg">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/jOBRGWg">
  Click</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.11 minmax 
- 화면이 줄어들 때 크기를 고정, 
 화면이 늘어날 때 크기를 고정
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="yLMrzEJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="yLMrzEJ">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/yLMrzEJ">
  Click</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.12 auto-fit auto-fill 
- 반응형 웹페이지를 만들때 이용한다.
- `auto-fill`은 grid의 칸수를 늘린다.
- `auto-fit`은 화면사이즈만큼 items의 크기를 늘려서 채운다.
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="jOBRGdq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="auto-fill, auto-fit">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/jOBRGdq">
  auto-fill, auto-fit</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.13 min-content max-content 
- item내의 content의 크기에 맞춰서 item 크기를 키울지 결정한다.

  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="hoseong511" data-slug-hash="MWpROWm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="MWpROWm">
  <span>See the Pen <a href="https://codepen.io/hoseong511/pen/MWpROWm">
  Click</a> by Song Hoseong (<a href="https://codepen.io/hoseong511">@hoseong511</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### 2.14 Grid Garden part One 
### 2.15 Grid Garden part Two 
![image](https://user-images.githubusercontent.com/62678380/122676174-c3715f80-d217-11eb-9c81-5368c402eec8.png)
