// type alias (type을 따로 지정 하고 그걸 변수화 해서 사용하는것)
// type Animal = string | number | undefined; // type으로 지정 하고
// let 동물: Animal = "kim"; // 그 타입을 사용
// 동물 = 123;

// let 동물 : { name : string, age: number } = { name:'kim', age:20}
// type Animal = { name: string; age: number }; // 대문자로 시작하고, 뒤에 type을 붙여줘도 좋음, 대문자로 시작하는건 일반 변수와 차이점
// let 동물: Animal = { name: "kim", age: 20 }; // 객체에도 마찬가지

// const 출생지역 = { region: "seoul" };
// 출생지역.region = "busan"; // 안에 속성 변경 가능

// const 여친 = {
//   name : '엠버'
// }
// 여친.name = '유라' // 값을 바꾸는걸 막아주지 않음

// type Girlfriend = {
//   readonly name : string // 읽기 전용이라 수정 하면 에러 발생
// }
// const 여친 : Girlfriend = {
//   name : '엠버'
// }
// 여친.name = '유라' // Cannot assign to 'name' because it is a read-only property.
// // 에디터에서만 에러를 띄워주는거지 자바스크립트 파일로는 바뀜

// type Girlfriend = {
//   name? : string // 여기서도 마찬가지로 ? 붙이면 string 또는 undefined 가 들어올수 있음
// }
// const 여친 : Girlfriend = {
//   name : '엠버'
// }

// type Name = string;
// type Age = number;
// type Person = Name | Age; // type 끼리 합칠 수 있음

// type PositionX = { x : number };
// type PositionY = { y : number };
// // {x: number, y: number} 로 만들고 싶을 때
// type NewType = PositionX & PositionY; // extend 한다. 합친다. 객체 하나에 합칠 때 '&'연산자 사용
// let position : NewType = {x:10, y:20}

// type PositionX = {x:number};
// type PositionX = number; // error 발생 타입은 재정의가 불가능

//
//
//

// Q1
// type Obj1 = { a: string; b: string };
// type Obj2 = { b: number; c: number };
// type Obj3 = Obj1 & Obj2;
// let test: Obj3 = { a: "1", b: '2', c: 3 }; // string 이면서 number 인 타입은 없기 never라는 타입이 할당 됨, 에러 발생

// Q2
// type Type = { color? : string , size : number , readonly position : number[]}

// Q3
// type Member = {name:string, phone:number, email:string}

// Q4
// type Member = { name: string; phone: number; email: string };
// type IsMinors = { minons: boolean };
// type MemberInfo = Member & IsMinors;
