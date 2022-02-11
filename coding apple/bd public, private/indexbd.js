// class User {
//   name;
//   constructor(){ // constructor 사용하면 인자로 뭔가를 전달해서 사용가능
//     this.name = 'kim'
//   }
// }
// class User { // constructor 없어도 가능 하긴 함
//   name = 'kim';
// }
// class User {
//   name;
//   constructor(a){
//     this.name = a;
//   }
// }
// new User('aaa') // 이렇게 사용가능
// class User {
//   public name = 'kim'; // 밖에서 유저1.name = '안녕'; 이렇게 값을 바꿀수 있음, 근데 없어도 기본으로 지정 됨
//   constructor(a:string){
//     this.name = a;
//   }
// }
// let 유저1 = new User('park');
// 유저1.name = '안녕';
// class User {
//   public name = 'kim';
//   constructor(a:string){
//     this.name = a;
//   }
//   public 함수() {// 이렇게도 지정 가능 , prototype 만들때
//   }
// }
// let 유저1 = new User('park');
// 유저1.name = '안녕';
// class User {
//   private name = "kim"; // 안에서만 사용하고 싶으면 private 를 붙여서 사용하면 됨
//   constructor(a: string) {
//     this.name = a;
//   }
// }
// let 유저1 = new User("park");
// 유저1.name // name 은 private 키워드 기 때문에 수정할 권한이 없다
// class User {
//   name: string;
//   familyName: string = "kim";
//   constructor(a: string) {
//     this.name = a + this.familyName // 안에서 사용하려면 this 를 꼭 붙여야 됨
//   }
// }
// let 유저1 = new User("민수");
// console.log(유저1); // {familyName: "kim" ,name: "민수"}
// familyName 을 바꾸면 안되는 값이라고 하면 그걸 못바꾸게 하는 방법
// class User {
//   name: string;
//   private familyName: string = "kim"; // 이렇게 붙여주면 밖에서 수정할 수 없음
//   constructor(a: string) {
//     this.name = a + this.familyName;
//   }
// }
// let 유저1 = new User("민수");
// console.log(유저1); // {familyName: "kim" ,name: "민수kim"} 뜨는건 똑같이 뜸
// 유저1.familyName // 접근할 권한이 없음
// private 를 수정 하고 싶으면
// class User {
//   name: string;
//   private familyName: string = "kim";
//   constructor(a: string) {
//     this.name = a + this.familyName;
//   }
//   이름변경함수() {
//     this.familyName = "park"; // 바꾸고 싶으면 안에 바꿔주는 함수를 만들어주고 밖에서 사용하면 됨
//   }
// }
// let 유저1 = new User("민수");
// 유저1.이름변경함수(); // private 는 함수안에서만 접근 가능하기 때문에 이렇게 바꿔주는 함수를 만들고 사용해서 바꾸면 됨
// console.log(유저1);
// class Person {
//   name;
//   constructor(){
//     this.name = 'kim'
//   }
// }
// new Person() // 위의 코드를 축약
// class Person {
//   constructor(public name: string) {}
// }
// let 자식 = new Person("kim");
// console.log(자식); // {name : 'kim} 이 출력됨
// class Person {
//   constructor(public name: string, public age: number) {} // 이렇게 콤마찍고 다시 퍼블릭 파라미터 이런식으로 여러개의 인자도 지정 가능, 위에 따로 변수를 한번써주지 않아서 축약이 되는건데 그거나그거나 같음, 이런거도 있다 알면 좋을거 같음
// }
// let 자식 = new Person("kim", 20);
// console.log(자식); // {name : 'kim, age:20} 이 출력됨
