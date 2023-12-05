var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var sides = document.querySelectorAll(".side");

function changeColor() {
  for (var i = 0; i < sides.length; i++) {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    sides[i].style.backgroundColor = randomColor;
  }
}

setInterval(changeColor, 1000);
