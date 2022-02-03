// document.getElementById();

// let 제목 = document.querySelector("#title");
// 제목.innerHTML = "반가워요"; // error 발생 , null 이 될 수도 있고, element 가 될 수 도 있기 때문에 union type 이 지정 됨

// 그래서 narrowing 을 사용해야 됨 (narrowing 은 if null 아니면 과 같이 제외 시켜서 사용하는것)

// narrowing 1방법
// let 제목 = document.querySelector("#title");
// if (제목 !== null) {
//   제목.innerHTML = "반가워요";
// }

// narrowing 2방법
// let 제목 = document.querySelector("#title");
// if (제목 instanceof Element) { // instanceof 라는 연산자는 클래스를 배우면 알게 되지만, 오른쪽에 클래스 명을 기입 하고 왼쪽에 객체를 기입 하면 이 클래스가 객체의 인스턴스냐 를 검사하는것
//   제목.innerHTML = "반가워요";
// }

// narrowing 3방법
// let 제목 = document.querySelector("#title") as Element; // 무조건 Element 입니다 라고 해주는 것으로 사용을 지양 하는게 좋음
// 제목.innerHTML = "반가워요";

// narrowing 4방법
// let 제목 = document.querySelector("#title");
// if(제목?.innerHTML){ // ? 를 넣어주면 innerHtml이 있으면 출력 해주고, 없으면 undefined 를 남겨줌 , 옵셔널 체이닝
//   제목.innerHTML = "반가워요";
// }

// narrowing 5방법
// tsconfig.json 에서 strictNullChecks를 false 로 하면 맘대로 사용 가능

// let 링크 = document.querySelector('.link');
// if(링크 instanceof Element) {
//   링크.href = 'https://kakao.com' // href는 Element 속성에 없어서 에러 발생
// }

// let 링크 = document.querySelector(".link");
// if (링크 instanceof HTMLAnchorElement) { // 정확하게 엥커 태그라는 타입을 지정 해줘야 됨
//   링크.href = "https://kakao.com"; // 내가 찾은 html 에 맞는 태그를 입력해줘야 됨
// }

// 아래와 같은 타입들이 있음
// HTMLHeadingElement
// HTMLButtonElement

// let 버튼 = document.querySelector('#button');
// 버튼?.addEventListener('click', function() { // ? 를 넣어주면 오른쪽에 값이 있으면 실행하고, 없으면 undefined 반환 해라 라는 뜻이기 때문에 narrowing 이 됨

// })

//
//
//

// Q1
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "./gitdesk.png";
}

// Q2
let links = document.querySelectorAll(".naver");
links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
  }
});
