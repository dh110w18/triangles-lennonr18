// Part 1: Area of a triangle //

var base = 30;
var height = 40;

var triangleArea = "(base * height)/2";
var sentence = "The area of the triangle is";
var message = "sentence + triangleArea";

document.getElementById("first").innerHTML = message;

// Part 2: Hypotenuse of a triangle //

function calcHypotenuse (b, h) {
  console.log(Math.sqrt(b*b + h*h))
};

// Part 3: Triangle Object //

var triangle = {
  base: 30,
  height: 40,
  canvasId: "canvas",
  calcArea: function () {
   console.log ((this.base * this.height)/2);
}
};

var triangle = {
  base: 30,
  height: 40,
  canvasId: "canvas",
  calcHypotenuse: function () {
    console.log (Math.sqrt(this.base*this.base + this.height*this.height))
}
};

var triangle = {
  base: 30,
  height: 40,
  canvasId: "canvas",
  drawIt: function () {
    drawTriangle(this.base, this.height, this.canvasId)
}
};

// Part 4: User entered base and height //

var userBase = prompt ("Please enter a value","for the triangle's base","that is greater than 10");
var userHeight = prompt ("Please enter a value","for the triangle's height","that is greater than 0");

if (userBase <=10) {
  console.log ("Error!");
} else if (userHeight <=1) {
  console.log ("Error!");
} else {
  ("userBase = this.base","userHeight = this.height")
};

var areaMessage = ("The area of the triangle is " + ((base *height)/2));
var hypotMessage = ("The hypotenuse of the triangle is" + (Math.sqrt(this.base*this.base + this.height*this.height)));

document.getElementById("canvas").innerHTML = message;

// Par 5: Lots of triangles //

var i = 1;

while (i++ <= 5) {
  base*i;
  height*i;
}
window.drawIt
canvasId = canvas2;
triangle.drawIt ();