// function 함수(a: string): number {}

// type 함수타입 = (a: string) => number; // 인자에 문자열, 리턴 값 숫자형 으로 타입 지정 해주는 방법, 함수 타입을 만드는 방법

// let 함수 :함수타입 = function (a){ // 함수 타입을 타입 alias 로 만들어서 사용하고 싶다면 이렇게 해서 선언한 타입함수를 할당 할 수 있음
//   return 10
// }

// // object 안에 메소드 지정 할 때
// let 회원정보 = {
//   name: 'kim',
//   plusOne() {

//   }
// }

// 회원정보.plusOne()

//
//
//

// Q1
// object 안에 메소드 지정 할 때 타입 지정
// let 회원정보 = {
//   name: "kim",
//   plusOne(a: number): number {
//     return a + 1;
//   },
//   changeName: (b: string): void => {
//     console.log("hello" + b);
//   },
// };

// type MemberType = {
//   name: string;
//   plusOne: (a: number) => number;
//   changeName: (b: string) => void;
// };

// let 회원정보: MemberType = {
//   name: "kim",
//   plusOne(a) {
//     return a + 1;
//   },
//   changeName: (b) => {
//     console.log("hello" + b);
//   },
// };

// Q2
// type CutZeroType = (str: string) => string;
// type RemoveDashType = (str: string) => number;

// const cutZero: CutZeroType = function (str) {
//   let result;
//   if (str[0] === "0") {
//     result = str.replace(/^./, "");
//   } else {
//     result = str;
//   }
//   return result;
// };
// const removeDash: RemoveDashType = function (str) {
//   let result;
//   result = str.replace(/\-/g, "");
//   return Number(result);
// };

// Q3
// type FuncType = (
//   str: string,
//   cut: CutZeroType,
//   remove: RemoveDashType
// ) => number;

// const func: FuncType = function (str, cut, remove) {
//   let result;
//   result = cut(str);
//   result = remove(result);
//   return result;
// };
// console.log(func("010-1111-2222", cutZero, removeDash));
