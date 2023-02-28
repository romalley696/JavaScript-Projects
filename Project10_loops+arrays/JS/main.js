//---counting loop
function Call_Loop() { 
  var Digit = "";
  var X = 1;
  while (X<6) {
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Loop").innerHTML = Digit;
}

//---for loop
var Instruments = ["guitar", "drums", "piano", "trumpet"];
var Content = "";
var Y;

function for_Loop() {
  for (Y=0; Y < Instruments.length; Y++) {
  Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List").innerHTML = Content;
}

//---using array
function array_function() {
  var family_ages = []
  family_ages[0] = "3";
  family_ages[1] = "6";
  family_ages[2] = "14";
  family_ages[3] = "17";
  family_ages[4] = "33";
  family_ages[5] = "36";
  document.getElementById("array").innerHTML = "this member of the family is " + family_ages[4] + " years old";
}

//---using constant 
function constant_function() {
  const Musical_instrument = {type:"guitar", brand:"fender", color:"black"};
  Musical_instrument.color = "blue";
  Musical_instrument.price = "£900";
  document.getElementById("constant").innerHTML = "The cost of the " + Musical_instrument.type + " was " + Musical_instrument.price;
}

//---let function
var X = 26;
document.write(X);
{
  let X = 9;
  document.write ("<br>" + X);
}
document.write("<br>" + X);

//---let and return
function car_info() {
let car = {
  make: "Ford ", model: "Focus ", year: "2013 ", colour: "silver ",
  description: function() {
    return "the car is a " + this.year + this.colour + this.make + this.model;
    }
  }
}
document.getElementById("Car_Object").innerHTML = car.description();