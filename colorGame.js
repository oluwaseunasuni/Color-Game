var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
})


colorDisplay.textContent = pickedColor;
//loops through all squares and assigns a color to each
for(var i = 0; i < squares.length; i++){
    //adds initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add event listeners to squares
    squares[i].addEventListener("click", function(){
        //picks color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "correct";
            //changes colors of others squares to that of the correctly clicked square
            changeColors(clickedColor);
            //updates h1 with required color to be guessed
            h1.style.backgroundColor = clickedColor;
        } else {
            //wrongly clicked square disappears
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}
 //function to change color of other squares to match correctly clicked square
function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

//function to pick random colors at start of the game
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor())
    }
    //return that array
    return arr;
}
//generates random colors
function randomColor(){
    //pick a "red" from 0 - 255
   var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}