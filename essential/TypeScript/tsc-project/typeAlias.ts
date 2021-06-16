// 타입 별칭 기능
// 별명 만들기
//Aliasing primitive
type MyStringType = string;
const str ='world';

let myStr: MyStringType = 'hello';
myStr = str;

//Aliasing Union Type

let person12: string | number = 0;
person12 = 'Mark';

type StringOrNumber = string | number;
let another: StringOrNumber = 0;
another = 'Anna';

// 1. 유니온 타입은 A 도 가능하고 B도 가능한 타입
// 2. 긴 이름을 짧게

// Aliasing Tuple

let person13: [string, number] = ['Ho', 12];

type PersonTuple = [string, number];

let another1: PersonTuple = ['Anna', 21];

// Aliasing Function
type EatType = (food: string) => void;

// 타입으로서 목적이 명확하면 interface를 이용하고 
// 대상을 가리킬 뿐이라면 type Alias
