// let 회원 : number = 123;
// let 회원: number | string = 123;
// let 회원: number | string | boolean = 123;

// let 회원 : number | string ='kim';
// 회원 // 이때 마우스 올려 보면 string으로 하나로 확정
// 회원 = 123; // 넘버를 다시 할당하면 두개로 다시 바뀜

// let 회원들: number[] = [1, 2, 3];
// let 회원들: (number | string)[] = [1, "2", 3]; // 숫자 또는 문자가 들어올수 있다고 지정 소괄호로 묶어야 됨 , 안묶으면 숫자 또는 문자 들어있는 배열 이렇게 인식
// let 오브젝트: { a: string } = { a: "123" };
// let 오브젝트: { a: string | number } = { a: "123" };

// let 이름 : any; // 타입 스크립트 쓰는 의미가 없음
// 이름 = 123;
// 이름 = 'kim'
// 이름 = [];

// let 이름 : unknown; // any 와 비슷,
// 이름 = 123;
// 이름 = {};

// let 변수1 : string = 이름; // unknown 으로 지정 해서 에러를 발생, any 에는 에러 안띄움
// // Type 'unknown' is not assignable to type 'string'.

// let 이름 : unknown;
// 이름 - 1 // 타입스크립트에서는 같은 타입에서만 수식을 수행

// let 나이: string | number;
// 나이 + 1; // number 와, string | number 는 다른것이라고 판단해서 에러를 발생
// // Operator '+' cannot be applied to types 'string | number' and 'number'.
// string | number 와 같이 여러개의 타입을 묶은것을 유니온 타입이라고 한다

// let 나이 : unknown = 1;
// 나이 - 1; // 숫자로 할당 했어도 unknown 과 number는 틀리다고 판단 해서 에러 발생

//
//
//

// Q1
// let user: string = "kim";
// let age: undefined | number = undefined;
// let married: boolean = false;
// let 철수: (string | undefined | number | boolean)[] = [user, age, married];

// Q2
// let 학교: {
//   score: (number | boolean)[];
//   teacher: string;
//   friend: string | string[];
// } = {
//   score: [100, 97, 84],
//   teacher: "Phil",
//   friend: "John",
// };
// 학교.score[4] = false;
// 학교.friend = ["Lee", 학교.teacher];
