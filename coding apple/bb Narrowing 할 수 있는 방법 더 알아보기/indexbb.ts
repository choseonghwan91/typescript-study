// function 함수(a: string | undefined){
//   if (a && typeof a === 'string') { // a && 을 적어주면 undefined 를 걸러 줄 수 있음
//     // undefined 와 null 을 걸러 줄 수 있음 , 근데 안쓰는게 더 좋음 명확하지 않아서
//   }
// }

// type Fish = {swim: string}
// type Bird = {fly: string}

// function 함수(animal: Fish|Bird) {
//   if ( typeof animal === ''){  // 둘 다 오브젝트로 타입을 지정 했기 때문에 typeof 를 사용할 수 없음
//     animal.swim
//   }
// }

// type Fish = { swim: string };
// type Bird = { fly: string };

// function 함수(animal: Fish | Bird) {
//   if ("swim" in animal) { // 속성명 in 오브젝트자료
//     animal.swim;
//   }
// }

// 오브젝트 instanceof 부모class 도 있음
// let 날짜 = new Date()
// if (날짜 instanceof Date) { // 이런식으로 사용

// }

// type Car = {
//   wheel : '4개',
//   color: string
// }
// type Bike = {
//   wheel : '2개',
//   color: string
// }
// function 함수 (x: Car|Bike) {
//   if(x가 Car 타입이냐){ // 이거 어떻게 물어봄?

//   }
// }
// in keyword 쓰고 싶으면 배타적 속성을 찾아야 되는데 (Car에만 있는 속성이나, Bike에만 있는 속성)이 있어야 됨
// 부모 가 없기 때문에 Instanceof 도 사용할 수 없음
// 똑같은 타입은 하나만 만들어도 됨
// 굳이 두개를 만들어야 된다고 하면

// type Car = {
//   wheel : '4개', // literal type 을 만들어 줌, 무조건 '4개' 만 들어올 수 있음
//   color: string
// }
// type Bike = {
//   wheel : '2개', // literal type 을 만들어 줌
//   color: string
// }
// function 함수(x:Car|Bike){
//   if(x.wheel === '4개'){ // 이런식으로 리터럴 타입 이 있으면 네로잉 가능
//     console.log('x는 Car타입이예요')
//   }
// }

//
//
//

// Q1
// type Car = {
//   wheel: "4개";
//   color: string;
// };
// type Bike = {
//   wheel: "2개";
//   color: string;
// };

// function 함수(x: Car | Bike) {
//   if (x.wheel === "4개") {
//     console.log("이 차는 " + x.color);
//   } else {
//     console.log("이 바이크는 " + x.color);
//   }
// }
