const buttonW = document.getElementById("white");
const buttonB = document.getElementById("blue");
const buttonR = document.getElementById("red");
const buttonSt = document.getElementById("strob");
const colors = ["white", "blue", "red"]
const colors2 = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
// console.log(buttonW);
let count = 0;
let alpha = 0;
var timer;

buttonW.addEventListener("click", () => {
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

buttonSt.addEventListener("click", () => {
 count++;
 
	if (count < 2) {
  
	strob();
	function strob() {
			alpha++;
			document.querySelector(".parent").style.background = colors2[alpha];
			alpha = -alpha;
			console.log("клик");
			timer = setTimeout(strob, 500);
  }
   
  } else {
    clearTimeout(timer); 
	document.querySelector(".parent").style.background = "rgba(0, 0, 0, 0)";
	count = 0;
  
}
 
 

});
