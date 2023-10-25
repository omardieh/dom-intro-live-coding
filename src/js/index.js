let theCatDiv = document.getElementById("cat");
// console.log(theCatDiv);
theCatDiv.innerHTML = "I'm a cat";
// theCatDiv.style.backgroundColor = "red";
// theCatDiv.style.border = "2px green solid";
// theCatDiv.style.fontSize = "50px";
// theCatDiv.style.marginTop = "30px";
// theCatDiv.style.paddingBottom = "30px";

// pass styles with using Object.assign :
Object.assign(theCatDiv.style, {
  backgroundColor: "red",
  border: "2px green solid",
  fontSize: "50px",
  marginTop: "30px",
  paddingBottom: "30px",
});

// function generateRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// setInterval(() => {
//   theCatDiv.style.background = generateRandomColor();
// }, 1000);

// const mice = document.getElementsByClassName("mouse");
// // console.log(mice);

// [...mice].forEach((e, i) => {
//   e.innerHTML = `Mouse ${i + 1}`;
// });

// let divs = document.getElementsByTagName("div");
// console.log(divs);

// function generateRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// const divs = document.querySelectorAll("div");
// divs.forEach((e, i) => {
//   e.innerHTML = `div ${i + 1}`;
//   e.style.background = generateRandomColor();
// });

// const mouse = document.querySelector(".mouse");
// const div = document.querySelector("div");
// mouse.classList.add(div.className);

const div = document.querySelector("div");
console.log(div.id);
