// // let 이름 : string;
// // Literal types
// let 이름 : 'kim' // 이름이라는 변수에는 무조건 'kim' 이라는 문자만 들어 올 수 있음
// 이름 = 'park'// error
// let 접니다 : '대머리' | '솔로';
// 접니다 = '솔로'
// // 아래의 두가지 때문에 리터럴 타입을 사용
// // 엄격한 타입 검사
// // 자동완성
// function 함수(a: "hello"): 1 | 0 {
//   return 1;
// }
// function rps(value: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
//   return ['가위']
// }
// rps("가위");
// 리터럴 타입은 const 대신에 사용해도 좋음 const는 값 하나만 지정 할 수 있는데 리터럴 타입 사용하면 두개 지정 가능
// var 자료 = {
//   name: "kim",
// };
// function 내함수(a: "kim") {}
// 내함수(자료.name); // error 이유는 내함수의 인자는 kim 이라는 '타입'이 들어와야 되서 error
// var 자료 = {
//   name: "kim",
// } as const // 이렇게 해주면 에러 안남, 변경 할 수 없게 지정 해주는것
// function 내함수(a: "kim") {}
// 내함수(자료.name);
