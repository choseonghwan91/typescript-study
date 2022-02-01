// function 내함수(x: number | string) {
//   if(typeof x === 'string'){ // narrowing
//     return x+'1';
//   } else {
//     return x+1;
//   }
// }
// 내함수(123);
// function 내함수(x: number | string) {
//   let array: number[] = [];
//   if (typeof x === "number") { // narrowing 으로 타입을 확정해줘야 에러가 안남
//     array[0] = x;
//   }
// }
// function 내함수(x: number | string) {
//   let array: number[] = [];
//   array[0] = x as number; // Assertion ( as number 를 써주면 왼쪽에 있는 값을 number로 덮어서 사용 할 수도 있음)
// }
// 내함수(123);
// function 내함수(x: number | string) {
//   let array: number[] = [];
//   array[0] = x as number; // Assertion ( as number 를 써주면 왼쪽에 있는 값을 number로 덮어서 사용 할 수도 있음)
// } // 되도록 사용하면 안됨, 버그 추적이 힘듬, 꼭 이 타입이 들어온다라고 확신있을때 사용하거나, 기존 코드 바꿀때 급할때나 사용
// 내함수(123);
//
//
//
// Q1
// function cleaning(arr: (string | number)[]): number[] {
//   let result;
//   result = arr.map((num: string | number): number => {
//     return Number(num);
//   });
//   return result;
// }
// console.log(cleaning(["1", 2, "3", 4, "5"]));
// Q2
// function checkSubject(obj: { subject: string | string[] }): string {
//   let result;
//   if (typeof obj.subject === "string") {
//     result = obj.subject;
//   } else {
//     result = obj.subject[obj.subject.length - 1];
//   }
//   return result;
// }
// let 철수쌤 = { subject: "math" };
// let 영희쌤 = { subject: ["science", "english"] };
// let 민수쌤 = { subject: ["science", "art", "korean"] };
// console.log(checkSubject(철수쌤));
// console.log(checkSubject(영희쌤));
// console.log(checkSubject(민수쌤));
