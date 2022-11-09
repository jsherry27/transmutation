const circleBtn = document.querySelector(".circle-btn");
circleBtn.addEventListener("click", (e) => {
  console.log("you clicked this cirlce");
});

const squareBtn = document.querySelector(".square-btn");
squareBtn.addEventListener("click", (e) => {
  console.log("you clicked this square");
});
const triangleBtn = document.querySelector(".triangle-btn");
triangleBtn.addEventListener("click", (e) => {
  console.log("you clicked this triangle");
});

const blueEl = document.querySelector(".blue");
blueEl.classList.add("blue");

const greenEl = document.querySelector(".green");
greenEl.classList.add("green");

const redEl = document.querySelector(".red");
redEl.classList.add("red");

const changeshapeEl = document.querySelector(".shape-container");
// circleBtn.addEventListener("click", (e) => {
//   squareBtn.classList.add("square-btn");
// });

// JUSTIN: right now you know how to target the classes
// now you simply need to have each class shape listen for when you click
// the color and then it change to that color. and when you click
// on another shape it changes to that shape.

// const nameCheck = (name) => {
//   console.log(`Hey ${name} how's it going?`);
// };
// console.log(nameCheck("John"));
