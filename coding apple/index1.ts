// let 이름: string = "kim";
// 이름 = 123;

// let 이름 : string[] = ['kim', 'park'];

// let 이름 : {name: string} = {name : 'kim'};
// let 이름 : {name?: string} = {}; // ? 븉이면 없어도 된다

// let 이름: string | number = "kim"; // string 혹은 number

// type Name = string | number ; // type 지정 할때는 대문자로 보통 사용(일반 변수와 구분 하기 위해)
// let 이름 : Name = 123;

// function 함수(x: number): number {  // 인자 옆에 : 으로 타입을 지정, 반환 값에 대한 타입은 () 뒤에 타입 지정
//   return x * 2;
// }

// type Member = [number, boolean]; // 튜플 타입, 첫번째는 넘버, 두번째는 불리언 이 들어와야 된다 라고 지정
// let john: Member = [123, true];

// type Member = {
//   name : string
// }
// let john : Member = {name : 'kim'}

// type Member = {
//   [key: string] : string,  // 키가 여러개 있을 때, "[key: string]: 타입" 이런식으로 한번에 지정 해주는것도 가능
// }
// let john : Member = {name: 'kim', age: '123'}

// class User {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
// }
// class User {  // 클래스에서는 이렇게 지정
//     name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
