## INTRODUCTION
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
## FLEXBOX
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
1. flex를 이용하기 위해서는 container>item 기억!
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
### 1.7 flex-basis
### 1.8 Flexbox Froggy
### 1.9 Flexbox Froggy
---
## GRID
### 2.1 Life Before Grid
### 2.2 CSS Grid Basic Concepts 
### 2.3 Grid Template Areas 
### 2.4 Rows and Columns 
### 2.5 Shortcuts 
### 2.6 Line Naming 
### 2.7 Grid Template 
### 2.8 Place Items 
### 2.9 Place Content 
### 2.10 Auto Columns and Rows 
### 2.11 minmax 
### 2.12 auto-fit auto-fill 
### 2.13 min-content max-content 
### 2.14 Grid Garden part One 
### 2.15 Grid Garden part Two 