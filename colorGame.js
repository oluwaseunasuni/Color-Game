var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init ();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

//mode buttons event listeners for game difficulty
function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

//loops through all squares and assigns a color to each
function setupSquares(){
    //square listeners
    for (var i = 0; i < squares.length; i++) {
        //adds initial colors to squares
        squares[i].addEventListener("click", function () {
            //picks color of clicked square
            var clickedColor = this.style.backgroundColor;
            //logic to be executed when correct square is picked
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "correct";
                resetButton.textContent = "Play Again?"
                //changes colors of others squares to that of the correctly clicked square
                changeColors(clickedColor);
                //updates h1 with required color to be guessed
                h1.style.backgroundColor = clickedColor;
            } else {
                //executed logic for wrong answers
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    //loops through array of colors from six squares
    for(var i = 0; i < squares.length; i++){
        //if theres a color that matches, it should display from the colors in the array
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            //hide three colors that doesn't match any of the six from the array
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})

//loops through all squares and assigns a color to each
for(var i = 0; i < squares.length; i++){
    //adds initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add event listeners to squares
    squares[i].addEventListener("click", function(){
        //picks color of clicked square
        var clickedColor = this.style.backgroundColor;
        //logic to be executed when correct square is picked
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "correct"; 
            resetButton.textContent = "Play Again?"
            //changes colors of others squares to that of the correctly clicked square
            changeColors(clickedColor);
            //updates h1 with required color to be guessed
            h1.style.backgroundColor = clickedColor;
        } else {
            //executed logic for wrong answers
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