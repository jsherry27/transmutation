const data = [
  {
    target: ".circle-btn",
    toggle: "circle",
    remove: ["triangle", "square"],
  },
  {
    target: ".square-btn",
    toggle: "square",
    remove: ["circle", "triangle"],
  },
  {
    target: ".triangle-btn",
    toggle: "triangle",
    remove: ["square", "circle"],
  },
  {
    target: ".blue",
    toggle: "blue",
    remove: ["red", "green"],
  },
  {
    target: ".green",
    toggle: "green",
    remove: ["blue", "red"],
  },
  {
    target: ".red",
    toggle: "red",
    remove: ["blue", "green"],
  },
];

const changeEl = document.querySelector(".change");

data.forEach((d) => {
  const btn = document.querySelector(d.target);
  btn.addEventListener("click", (e) => {
    changeEl.classList.toggle(d.toggle);
    changeEl.classList.remove(...d.remove);
  });
});

// const circleBtn = document.querySelector(".circle-btn");
// const squareBtn = document.querySelector(".square-btn");
// const triangleBtn = document.querySelector(".triangle-btn");
// const blueEl = document.querySelector(".blue");
// const greenEl = document.querySelector(".green");
// const redEl = document.querySelector(".red");

// const toggleAndremoveClasses = (a, b) => {
//   changeEl.classList.toggle(a);
//   changeEl.classList.remove(...b);
// };

// BELOW WHAT ERIC SHOWED YOU
// circleBtn.addEventListener("click", (e) => {
//   toggleAndremoveClasses("circle", ["triangle", "square"]);
// });
// squareBtn.addEventListener("click", (e) => {
//   toggleAndremoveClasses("square", ["circle", "triangle"]);
// });
// triangleBtn.addEventListener("click", (e) => {
//   toggleAndremoveClasses("triangle", ["square", "circle"]);
// });
// blueEl.addEventListener("click", (e) => {
//   toggleAndremoveClasses("blue", ["red", "green"]);
// });
// greenEl.addEventListener("click", (e) => {
//   toggleAndremoveClasses("green", ["red", "blue"]);
// });
// redEl.addEventListener("click", (e) => {
//   toggleAndremoveClasses("red", ["blue", "green"]);
// });

// BELOW WHAT JUSTIN ORIGINALLY DID
// circleBtn.addEventListener("click", (e) => {
//   changeEl.classList.toggle("circle-formation");
//   changeEl.classList.remove("square", "triangle");
//   blueEl.addEventListener("click", (e) => {
//     changeEl.classList.toggle("blue");
//     changeEl.classList.remove("green", "red");
//   });
//   greenEl.addEventListener("click", (e) => {
//     changeEl.classList.toggle("green");
//     changeEl.classList.remove("blue", "red");
//   });
//   redEl.addEventListener("click", (e) => {
//     changeEl.classList.toggle("red");
//     changeEl.classList.remove("blue", "green");
//   });
// });

// Below is what I started with

// circleBtn.addEventListener("click", (e) => {
//     blueEl.addEventListener("click", (e) => {
//         circleBtn.classList.add("blue")
//     })
// });
