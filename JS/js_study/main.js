// HTML 요소(Element) 1개 검색/찾기
let boxEl = document.querySelector('.box');

//  HTML 요소에 적용할 수 있는 메소드


// 1-이벤트(event, 2)

// 2-핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function(){
  console.log("hi");
  boxEl.classList.add('active');

  console.log(
    boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active')

  console.log(
    boxEl.classList.contains('active')
  );
})

console.log(boxEl);

// HTML 요소 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');

// 찾은 요소를 반복해서 함수 실행;
// 익명 함수를 인수로 추가
// boxEls.forEach(function () {});

// 첫 번째 매개변수(xxx): 반복 중인 요소.
// 두 번째 매개변수(idx): 반복 중인 번호
boxEls.forEach(function (xxx, index){
  xxx.classList.add(`order-${index + 1}`);
  console.log(index, xxx);
})