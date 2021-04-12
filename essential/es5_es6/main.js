'use strict'

// 반복문 
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i =0; i < 10; i++){
  const li = document.createElement('li')
  li.textContent = `list-${ i+1 }`
  if ( (i + 1) % 2 === 0){
    li.addEventListener('click', () => {
      console.log(li.textContent);
    })
  }
  ulEl.appendChild(li)
}