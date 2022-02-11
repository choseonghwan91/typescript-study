// // class 를 복사해서 또 다른 클래스를 만드는것
// class User {
//   x = 10;
// }
// class NewUser extends User {
//   // User 라는 클래스에 있던 모든 값을 복사 붙여넣기 해주는 느낌
// }
// let 사람 = new NewUser();
// console.log(사람); // {x:10}
// class User {
//   protected x = 10; // private랑 유사함, 안에서만 사용가능, private보다 조금더 확장성을 제공
// }
// class NewUser extends User {
//   doThis() {
//     this.x = 20; // private 는 복사 해왔을 때 값을 사용할 수 없지만, protected 는 사용 가능
//   }
// }
// let 사람 = new NewUser();
// 사람.doThis();
// console.log(사람); // {x:20}
// static
// class User {
//   x = 10;
//   y = 20;
// }
// let 자식 = new User();
// console.log(자식); // {x:10, y:20}
// class User {
//   static x = 10;
//   y = 20;
// }
// let 자식 = new User();
// console.log(자식.x); // 못가져다 씀
// console.log(User.x); // 가능
// console.log(User.y); // 불가능
// class User {
//   private static x = 10; // 두개 같이 쓸수 있음, 두개 속성을 다 가지고 있는거임
//   y = 20;
// }
// let 자식 = new User();
// class User {
//   intro = "전문가입니다";
// }
// let 철수 = new User();
// console.log(철수);
// class User {
//   skill = "js"; // 이렇게하면 같이 뜸, {skill: 'js', intro: 'js전문가입니다'} 이렇게
//   intro = this.skill + "전문가입니다"; // js 키워드를 바꾸고 싶을때
// }
// let 철수 = new User();
// console.log(철수);
// class User {
//   static skill = "js"; // 이렇게 하면 User 에서만 사용 가능
//   // intro = this.skill + "전문가입니다"; // 이렇게 하면 this로 접근 해서 못하니까 에거 발생
//   intro = User.skill + "전문가입니다"; // User. 으로 사용 가능
// }
// let 철수 = new User();
// console.log(철수);
// User.skill = "ts"; // 이거 이후로는 skill이 ts로 변경 됨
// let 철수2 = new User();
// console.log(철수2);
//
//
//
// Q1
// class User {
//   private static x = 10; // 클래스 안에서만 User로 수정 가능
//   public static y = 20; // 밖에서 User로 수정 가능
//   protected z = 30; // extends로 복사한 class에서만 수정 가능
// }
// Q2
// class User {
//   private static x = 10;
//   public static y = 20;
//   static addOne(num: number): number {
//     return (User.x += num);
//   }
//   static printX(): void {
//     console.log(User.x);
//   }
// }
// console.log(User.addOne(3)); //이렇게 하면 x가 3 더해져야함
// console.log(User.addOne(4)); //이렇게 하면 x가 4 더해져야함
// User.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
// Q3
// class Square {
//   width;
//   height;
//   color;
//   constructor(width: number, height: number, color: string) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }
//   draw(): void {
//     const body = document.querySelector("body");
//     const box = document.createElement("div");
//     box.style.width = `${this.width.toString()}px`;
//     box.style.height = `${this.height.toString()}px`;
//     box.style.backgroundColor = this.color;
//     box.style.margin = "2px";
//     body?.appendChild(box);
//   }
// }
// let 네모 = new Square(30, 30, "red");
// 네모.draw();
// 네모.draw();
// 네모.draw();
// 네모.draw();
// // 무작위로 뿌려주는건 못했음... // 인터넷 검색해서 하는건 할수 있지만 강의 보고 하나 검색한거 보고 하나 똑같을 거 같음
// 답
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
var 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
