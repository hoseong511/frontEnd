// 데이터 불변성(Immutability)
// 원시 데이터: string, number, boolean, undefined, null
// 참조형 데이터: Object, Arrya, Function (함수를 인수로 사용하는 콜백!)
/*
------------------------------------------------------------
| 1:         | 2:          | 3:          | 4:        
------------------------------------------------------------
*/
// 메모리에 저장되는 값이 있고 그 값이 들어 있는 메모리 주소가 있다.
// 메모리 주소를 통한 접근
// 데이터는 변하지 않는다. 데이터는 그 자리에 있을 뿐 ; 데이터 불변성
let a = 1
let b = 4
console.log(a, b, a === b); // 메모리 주소가 달라서
b = a 
console.log(a, b, a === b); // 메모리 주소가 같아서
a = 7
console.log(a, b, a === b); // 메모리 주소가 같아서
let c = 1 
console.log(b, c, b === c);

// 참조형 데이터 -> 가변성 선언시 새로운 메모리에 할당됨!
// 메모리 주소 참조시 항상 주의해야함 ! 자료 하나를 바꿀 시 전부 바뀌게 됨..
// 복사라는 개념을 이용하자
let d = { k: 1}
let e = { k: 1}
console.log(d, e, d === e);
d.k = 7
e = d
console.log(d, e, d===e);
d.k = 2
console.log(d, e, d === e);
let f = e
console.log(d, e, f, d===f);
d.k = 9
console.log(d, e, f, d===f);




