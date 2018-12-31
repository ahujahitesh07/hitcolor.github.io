var numSquares = 6;
var colors = generateRandomColors(numSquares);
/*[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)"
]*/

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


	easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

	hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].style.display = "block";
	}
});

// for New Colors Button
resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	this.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i=0 ; i<squares.length ; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
})

for (var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.background=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of picked square
		var clickedColor= this.style.background;
		// compare color with pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct..!!"
			resetButton.textContent = "Play Again.?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else{
			this.style.background="black";
			messageDisplay.textContent = "oops, Try Again..!!"
		}


	});
}

function changeColors(color){
	for(var i=0; i<squares.length; i++){
	squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[]
	for(var i=0;i<num;i++){
		//get random no. and push it into the array
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}