const buttonW = document.getElementById("white");
const buttonB = document.getElementById("blue");
const buttonR = document.getElementById("red");
const colors = ["white", "blue", "red"]
// console.log(buttonW);

buttonW.addEventListener("click", () => {
// console.log("click");
document.body.style.backgroundColor = colors[0];

});


buttonB.addEventListener("click", () => {
// console.log("click");
document.body.style.backgroundColor = colors[1];

});


buttonR.addEventListener("click", () => {
// console.log("click");
document.body.style.backgroundColor = colors[2];

});
