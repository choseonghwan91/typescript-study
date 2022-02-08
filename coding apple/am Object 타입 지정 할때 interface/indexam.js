// 오브젝트에 타입 지정
// type Square = { color: string; width: number };
// let 네모: Square = { color: "red", width: 100 };
// interface 로도 지정할 수 있음
// interface Square {
//   color: string;
//   width: number;
// }
// let 네모: Square = { color: "red", width: 100 };
// interface StudentType {
//   name: string;
// }
// interface TeacherType {
//   name: string;
//   age: number;
// }
// let 학생: StudentType = { name: "kim" };
// let 선생: TeacherType = { name: "kim", age: 20 };
// interface StudentType {
//   name: string;
// }
// interface TeacherType extends StudentType { // StudentType 에 지정한 걸 복사 하는 방법 (extends)
//   age: number;
// }
// let 학생: StudentType = { name: "kim" };
// let 선생: TeacherType = { name: "kim", age: 20 };
// 타입도 복사 가능
// type Animal = { name: string };
// type Cat = { age: number } & Animal; // 인터섹션 (왼쪽꺼도 만족하고 오른쪽꺼도 만족해야 됩니다 하는 것)
// interface는 복사해서 넣어준거지만, type은 교차로 둘 다 만족하는것을 원하는 것
// type 은 중복 선언 불가능, interface는 중복선언 가능
// type Animal = { name: string };
// type Cat = { age: number } & Animal;
// interface StudentType {
//   name: string;
// }
// interface StudentType {
//   score: number;
// }
// // 중복 선언 하면 StudentType 안에 { name: string; score: number; } 와 같은 것
// interface TeacherType extends StudentType {
//   age: number;
// }
// interface가 좋은 점
// interface 로 만들어서 type 을 지정 하면 나중에 사용할 때 필요한 타입이 있으면 추가 해서 사용할 수 있음
// interface는 중복 속성을 error 로 잡아줌
// interface StudentType {
//   name: string;
// }
// interface TeacherType extends StudentType { // 중복 속성이라 error
//   name: number;
// }
// type은 중복 속성 지정 시 error를 안내줌
// type Animal = { name: string };
// type Cat = { name: number } & Animal;
// let cat :Cat = {name:'야옹이'} // 사용할 때 에러 남 , 둘 다 만족해야 되기 때문에 name이 문자열이고 숫자형인건 이 세상에 없음 , Type 'string' is not assignable to type 'never'
//
//
//
// Q1
// interface Product {
//   brand: string;
//   serialNumber: number;
//   model: string[];
// }
// let 상품: Product = {
//   brand: "Samsung",
//   serialNumber: 1360,
//   model: ["TV", "phone"],
// };
// // Q2
// interface Cart {
//   product: string;
//   price: number;
// }
// let 장바구니: Cart[] = [
//   { product: "청소기", price: 7000 },
//   { product: "삼다수", price: 800 },
// ];
// // Q3
// interface ExtendsType extends Cart {
//   card: boolean;
// }
// let test: ExtendsType = { product: "컴퓨터", price: 3000000, card: true };
// // Q4
// interface ObjType {
//   plus: (a: number, b: number) => number;
//   minus: (a: number, b: number) => number;
// }
// const obj: ObjType = {
//   plus(a, b) {
//     return a + b;
//   },
//   minus(a, b) {
//     return a - b;
//   },
// };
