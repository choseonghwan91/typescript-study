// class Person {
//   constructor(){
//     this.name = 'kim'
//   }
// }
// let 사람1 = new Person();
// let 사람2 = new Person();
// class Person {
//   data: number = 0; // 필드 값
// }
// let 사람1 = new Person();
// let 사람2 = new Person();
// console.log(사람1.data); // 0 출력
// console.log(사람2.data); // 0 출력
// class Person {
//   data = 0; // 타입 지정 안해도 되긴 함
// }
// let 사람1 = new Person();
// let 사람2 = new Person();
// console.log(사람1.data); // 0 출력
// console.log(사람2.data); // 0 출력
// class Person {
//   name; // 미리 만들어놔야 밑에서 사용 가능
//   constructor(){
//     this.name = 'kim'
//   }
// }
// let 사람1 = new Person();
// let 사람2 = new Person();
// class Person {
//   name: string; // 타입도 같이 지정 해주면 좋음
//   constructor(){
//     this.name = 'kim'
//   }
// }
// let 사람1 = new Person();
// let 사람2 = new Person();
// class Person {
//   name: string; // 타입도 같이 지정 해주면 좋음
//   constructor(a) {
//     this.name = a;
//   }
// }
// let 사람1 = new Person("kim");
// let 사람2 = new Person("park");
// console.log(사람1); // {name:'kim'}
// console.log(사람2); // {name:'park'}
// // constructor 안에 인자로 전달해서 원하는 값으로 생성도 가능
// class Person {
//   name: string;
//   constructor(a: string) { // 여기도 타입 지정 , return 값은 타입 지정 안해도 됨, class는 항상 객체를 반환하기 때문에 굳이 지정 안해도 됨
//     this.name = a;
//   }
// }
// let 사람1 = new Person("kim");
// let 사람2 = new Person("park");
// console.log(사람1);
// console.log(사람2);
//
//
// class Person {
//   name: string;
//   constructor(a: string) {
//     this.name = a;
//   }
// }
// Person.prototype.함수 = function () { // 이렇게 해도 나오긴 나오지만 클래스안에도 만들 수 있음
//   console.log("test");
// };
// let 사람1 = new Person("kim");
// let 사람2 = new Person("park");
// 사람1.함수();
//
// 클래스에서 함수 추가하는 방법, #클래스 안에 함수, #클래스 에서 함수 타입 지정
// class Person {
//   name: string;
//   constructor(a: string) {
//     this.name = a;
//   }
//   함수(a: string): string {
//     return "안녕" + a;
//   }
// }
// let 사람1 = new Person("kim");
// let 사람2 = new Person("park");
// console.log(사람1.함수("안녕")); // 안녕안녕
//
//
//
// Q1
// class Car {
//   model: string;
//   price: number;
//   constructor(a: string, b: number) {
//     this.model = a;
//     this.price = b;
//   }
//   tax(): number {
//     return this.price / 10;
//   }
// }
// let car1 = new Car("소나타", 3000);
// console.log(car1);
// console.log(car1.tax());
// // Q2
// class Word {
//   num: number[] = [];
//   str: string[] = [];
//   constructor(...a: (number | string)[]) {
//     a.forEach((b) => {
//       if (typeof b === "number") {
//         this.num.push(b);
//       } else {
//         this.str.push(b);
//       }
//     });
//   }
// }
// let obj = new Word("kim", 3, 5, "park");
// console.log(obj.num);
// console.log(obj.str);
