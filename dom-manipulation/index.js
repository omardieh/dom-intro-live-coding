// const paragraph = document.getElementById("paragraph");
// // console.log(paragraph);

// const links = document.getElementsByClassName("link");
// // console.log(links);

// const divs = document.getElementsByTagName("div");
// // console.log(divs);

// paragraph.setAttribute("class", "new-class-name");

// const link = document.querySelector("#google-link");
// link.setAttribute("href", "http://google.com");
// link.setAttribute("target", "_blank");

// link.removeAttribute("href");

// const rootElement = document.querySelector("#root");
// const h2 = document.createElement("h2");
// h2.innerHTML = "Hello World";
// rootElement.appendChild(h2);
// console.log(rootElement);

// const ul = document.getElementById("list-container");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// li1.innerHTML = "Some Text Value 1";
// li2.innerHTML = "Some Text Value 2";
// ul.append(li1, li2);
// console.log(ul);

// const ul = document.getElementById("list-container");
// for (let i = 1; i <= 10; i++) {
//   const li = document.createElement("li");
//   li.innerHTML = "List Item " + i;
//   ul.appendChild(li);
// }

// let text = document.createTextNode(
//   "<h2> This text is created dynamically </h2>"
// );
// ul.appendChild(text);

// ul.innerHTML = `<button onClikc=> Heading Tag HTML </button>`;

// const paragraph = document.getElementById("paragraph");
// const body = document.getElementsByTagName("body")[0];
// // body.removeChild(paragraph);

// paragraph.remove();
// body.innerHTML = "";

const rootElement = document.querySelector("#root");
const form = document.querySelector("#main-form");
const button = document.querySelector("#click-button");
const input = document.querySelector("#text-input");
let counter = 1;

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

button.addEventListener("click", () => {
  const textElement = document.createElement("p");
  textElement.innerHTML = "element " + counter;
  rootElement.appendChild(textElement);
  counter++;
});

input.addEventListener("change", (event) => {
  console.log(event.target.value);
});
