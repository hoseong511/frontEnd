// 콜백(CallBack)
// 함수의 인수로 사용되는 함수

// ex. setTimeout(함수, 시간)

function timeout(call) {
  setTimeout( () => {
    console.log("Ho!!");
    call() // 실행 위치를 보장하고자 하는 용도로 이용함
  }, 3000)
}

timeout(() => {
  console.log('Done!!!1');
})

// 모든 처리 이후에 원하는 함수가 실행되도록 보장
// 처리가 완료된 후에 원하는 함수를 실행시키고 싶을 때 이용