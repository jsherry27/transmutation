const circleBtn = document.querySelector(".circle-btn");

const squareBtn = document.querySelector(".square-btn");

const triangleBtn = document.querySelector(".triangle-btn");

const blueEl = document.querySelector(".blue");

const greenEl = document.querySelector(".green");

const redEl = document.querySelector(".red");

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
    changeEl.classList.remove("circle-formation")
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
