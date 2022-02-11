// import {변수명} from '경로'
// import { 이름, 나이 } from "./a"; // 원래는 됐나봄
// console.log(이름);
// console.log(나이);

// import { Name, 나이 } from "./a";
// console.log(나이);
// let 변수: Name = "park";
// console.log(변수)

// 옛날 타입스크립트 import 방법
///<reference path='a.ts' /> 이렇게 옛날에 함

// let 변수1 : 네임스페이스.Name ='kim'// 아렇게 사용

//
//
//

// Q1
// import { Car, Bike } from "./a";
// let car: Car = {
//   wheel: 2,
//   model: "sonata",
// };
// let bike: Bike = {
//   wheel: 2,
//   model: "pcx",
// };

// console.log(car);
// console.log(bike);

// Q2
// import { ObjFunction } from "./a";

// let 함수: ObjFunction = function (a) {
//   console.log(a);
// };

// 함수({ abc: "안뇽" });

// // Q3
// namespace GoodDog {
//   export type Dog = string;
// }
// namespace BadDog {
//   export interface Dog { name : string };
// }

// let dog1 :GoodDog.Dog = 'bark';
// let dog2 :BadDog.Dog = { name : 'paw' }
