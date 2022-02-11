// export let 이름 = "kim";
// export let 나이 = 20;
// export type Name = string;
// export let 나이 = 20;
// object 안에 숨겼습니다
// namespace 네임스페이스 {
//   export type Name = string | number;
// }
// Name // 없다고 나옴
// let 변수 :네임스페이스.Name = 'kim' // 오브젝트라서 이렇게 사용해야 됨
// export type 이름 = string;
// export interface 인터페이스 {}
// 더 옛날에는 네임스페이스가 아니라
// module 을 사용했음
//
//
//
// Q1
// export type Car = {
//   wheel: number;
//   model: string;
// };
// export interface Bike {
//   wheel: 2;
//   model: string;
// }
//Q2
// export type ObjFunction = (a?: object) => void;
