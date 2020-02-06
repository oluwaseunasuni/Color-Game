var colors = generateRandomColors();


//loops through all squares and assigns a color to each
//updates H1 with required color to be guessed
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //adds initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //picks color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "correct";
            //changes colors of others suares to that of the correctly clicked square
            changeColors(clickedColor);
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
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get random color and push into array

    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
   var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + "," + g + "," + b + ")";
}