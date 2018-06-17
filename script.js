//default variables
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('background');
var colorOutput = document.querySelector('h3');

//functions

//background setter
function setBackground() {
    body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
    colorText();
};

//output current background value to screen
function colorText() {
    colorOutput.textContent = body.style.background;
}

//listen for changes to color picker 1
color1.addEventListener('change', setBackground);

//listen for changes to color picker 2
color2.addEventListener('change', setBackground);

//onload functions
setBackground();
colorText();

