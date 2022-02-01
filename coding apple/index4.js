// function 함수 (x: number): number {
//  return x * 2
// }
// 함수(30);
// 함수(90);
// function 함수 (x : number ): void {  // void는 return을 하지 않는 함수에 지정하는 타입, return을 하면 안된다는 조건이 있다면 void를 넣어도 됨
//   1+1;
// }
// function 함수 (x: number ) : void {
//   1+1;
// }
// 함수() // 인자에 대한 타입을 지정했는데 넣지 않으면 에러를 발생
// // An argument for 'x' was not provided.
// function 함수 (x?: number ) : void { // 인자에 ?를 붙이면 인자를 지정 해도 되고, 안해도 된다고 지정 하는것과 같음
//     1+1;
//   }
// 함수() // 인자에 물음표를 붙여서 에러가 발생하지 않음
// function 함수(x: number| string) : void {
//   console.log(x+3) // 에러 발생 (number|string 더하기 number 가 되기 때문)
// }
// 함수(2)
// function 함수(x: number| string) : void {
//   if(typeof x === 'number') { // x 의 타입이 number면 실행해라 라고 하면 에러가 안남
//     console.log(x+3)
//   }
// }
// 함수(2)
//
//
//
// Q1
// function hi(name?: string): void {
//   if (typeof name === 'string') {
//     console.log(`안녕하세요 ${name}`);
//   } else {
//     console.log('이름이 없습니다');
//   }
// }
// Q2
// function getLangth(value: number | string): number {
//   return value.toString().length;
// }
// Q3
// function checkYouCanMarry(
//   money: number,
//   house: boolean,
//   charm: string
// ): string | void {
//   let score: number = 0;
//   score += money;
//   if (house) {
//     score += 500;
//   }
//   if (charm === "상") {
//     score += 100;
//   }
//   if (score >= 600) {
//     return "결혼가능";
//   }
//   return;
// }
// checkYouCanMarry(700, false, "중");
// checkYouCanMarry(100, false, "상");
