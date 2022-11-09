const circleBtn = document.querySelector(".circle-btn");
// circleBtn.addEventListener("click", (e) => {
//   console.log("you clicked this cirlce");
// });

const squareBtn = document.querySelector(".square-btn");
// squareBtn.addEventListener("click", (e) => {
//   console.log("you clicked this square");
// });
const triangleBtn = document.querySelector(".triangle-btn");
// triangleBtn.addEventListener("click", (e) => {
//   console.log("you clicked this triangle");
// });

const blueEl = document.querySelector(".blue");
// blueEl.classList.add("blue");

const greenEl = document.querySelector(".green");
// greenEl.classList.add("green");

const redEl = document.querySelector(".red");
// redEl.classList.add("red");

const changeEl = document.querySelector(".change");
circleBtn.addEventListener("click", (e) => {
    changeEl.classList.toggle("circle-formation")
    changeEl.classList.remove("square")
    changeEl.classList.remove("triangle")
    blueEl.addEventListener("click", (e) => {
        changeEl.classList.toggle("blue")
        changeEl.classList.remove("green")
        changeEl.classList.remove("red")
    })
    greenEl.addEventListener("click", (e) => {
        changeEl.classList.toggle("green")
        changeEl.classList.remove("blue")
        changeEl.classList.remove("red")
    })
    redEl.addEventListener("click", (e) => {
        changeEl.classList.toggle("red")
        changeEl.classList.remove("blue")
        changeEl.classList.remove("green")
    })
})
squareBtn.addEventListener("click", (e) => {
    changeEl.classList.toggle("square")
    changeEl.classList.remove("circle")
    changeEl.classList.remove("triangle")
    blueEl.addEventListener("click", (e) => {
        changeEl.classList.toggle("blue")
        changeEl.classList.remove("green")
        changeEl.classList.remove("red")
    })
    greenEl.addEventListener("click", (e) => {
        changeEl.classList.toggle("green")
        changeEl.classList.remove("blue")
        changeEl.classList.remove("red")
    })
    redEl.addEventListener("click", (e) => {
        changeEl.classList.toggle("red")
        changeEl.classList.remove("blue")
        changeEl.classList.remove("green")
    })
})
triangleBtn.addEventListener("click", (e) => {
    changeEl.classList.toggle("triangle")
    changeEl.classList.remove("square");
    changeEl.classList.remove("circle-formation");
    blueEl.addEventListener("click", (e) => {
        changeEl.classList.toggle("blue")
        changeEl.classList.remove("green")
        changeEl.classList.remove("red")
    })
    greenEl.addEventListener("click", (e) => {
        changeEl.classList.toggle("green")
        changeEl.classList.remove("blue")
        changeEl.classList.remove("red")
    })
    redEl.addEventListener("click", (e) => {
        changeEl.classList.toggle("red")
        changeEl.classList.remove("blue")
        changeEl.classList.remove("green")
    })
})

// Below is what I started with

// circleBtn.addEventListener("click", (e) => {
//     blueEl.addEventListener("click", (e) => {
//         circleBtn.classList.add("blue")
//     })
// });


// JUSTIN: right now you know how to target the classes
// now you simply need to have each class shape listen for when you click
// the color and then it change to that color. and when you click
// on another shape it changes to that shape.

// const nameCheck = (name) => {
//   console.log(`Hey ${name} how's it going?`);
// };
// console.log(nameCheck("John"));
