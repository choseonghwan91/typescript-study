// function 함수(num, ...a) {
//   // ...a rest parameter 인자가 여러개 들어올수 있다는 뜻 , num 뒤에 여러 개의 인자가 들어올수 있다
// }
// 함수(1, 3, 5, 3, 2, 6, 6);

// rest parameter 는 배열로 받아옴
// function 함수(...a) {
//   console.log(a) // array 형식으로 인자를 받아옴 , [1,3,5,3,2,6,6]
// }
// 함수(1, 3, 5, 3, 2, 6, 6);

// rest parameter 타입 지정
// function 함수(...a: number[]) {
//   console.log(a) // array 형식으로 인자를 받아옴 , [1,3,5,3,2,6,6]
// }
// 함수(1, 3, 5, 3, 2, 6, 6);

// function 함수(...a: (number | string | boolean)[]) {
//   console.log(a); // array 형식으로 인자를 받아옴 , [1,3,5,3,2,6,6]
// }
// 함수(1, "3", 5, true, 2, 6, 6);

// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = [...arr, ...arr2];  //... 을 쓰면 배열을 벗겨내고 값을 받아올 수 있음
// console.log(arr3); // [1,2,3,4,5]

// destructuring
// let arr = ['안녕', 100];
// let 변수1 = arr[0];
// let 변수2 = arr[1];

// let [변수1, 변수2] = ['안녕', 100]; // 이게 디스트럭처링

// 아래 두개가 같음
// let { student:student, age:age } = { student: true, age: 20 }; // 디스트럭처링
// let { student, age } = { student: true, age: 20 }; // 구조분해 할당으로 디스트럭처링

// let { student, age } = { student: true, age: 20 };
// let 오브젝트 = { student: true, age: 20 };
// function 함수(a, b) {
//   console.log(a, b);
// }

// 함수(오브젝트.student, 오브젝트.age);

// let { student, age } = { student: true, age: 20 };

// interface obj {
//   student: boolean;
//   age: number;
// }

// function 함수({ student, age }: obj) {
//   console.log(student, age);
// }

// 함수({ student: true, age: 20 });

//
//
//

// Q1
// function getMaxNum(...nums: number[]): number {
//   let result: number = 0;
//   nums.forEach((num: number) => {
//     if (result < num) return (result = num);
//   });
//   return result;
// }

// console.log(getMaxNum(6, 4, 7, 2));

// // Q2
// interface FuncType {
//   user: string;
//   commnet: number[];
//   admin: boolean;
// }

// function func({ user, commnet, admin }: FuncType): void {
//   console.log(user);
//   console.log(commnet);
//   console.log(admin);
// }

// func({ user: "kim", commnet: [3, 5, 4], admin: false });

// // Q3
// function funcArr([argu1, argu2, argu3]: (number | string | boolean)[]): void {
//   console.log(argu1, argu2, argu3);
// }
// funcArr([40, "wine", false]);
