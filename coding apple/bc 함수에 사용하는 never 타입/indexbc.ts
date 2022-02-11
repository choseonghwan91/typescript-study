// function 함수() : never { // 절대 끝나지 않는 함수를 만들 때 타입을 never 로 써줄수 있음 return undefined 가 보통 숨어 있음
//   throw new Error() // 에러를 내주면 끝나지 않는 함수
// }

// function 함수() : never {
//   while(true){ // true 인 동안 반복하는 거라서 끝나지 않는 함수

//   }
// }

// 대부분 쓸 곳이 없음 void 쓰면 되기 때문

// function 함수 (parameter : string){
//   if(typeof parameter == 'string'){
//     console.log(parameter)
//   } else {
//     console.log(parameter) // never 타입이 지정됨, 파라미터는 문자열만 들어올수 있는데 문자가 아니면 이라는 조건을 걸었기 때문에
//   }
// }

let 함수 = function () {
  // 함수 표현식
  throw new Error();
}; // never는 그럴리 없다 라는걸 알려주는 거라고 생각하면 됨
