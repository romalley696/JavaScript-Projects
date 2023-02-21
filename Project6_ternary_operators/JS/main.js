// using ternary operator
function Ride_Function () {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = (Height< 52) ? "you are too short": "you are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

// using or not using keywords and understanding their uses
function Vehicle (Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail", 2019, "White");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year ;
}

// demonstrating nested functions
function count_Function(){
  document.getElementById("nested_function").innerHTML = Count ();
  function Count () {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one () ;
    return Starting_point;
  }
}

var x = 5;
function Add_numbers_1() {
  document.write (5 + x + "<br>");
}
function Add_numbers_2() {
  document.write (x + 50 + "<br>");
}
Add_numbers_1 ();
Add_numbers_2 ();


function Add_numbers_3() {
  var y = 15
  document.write (5 + y + "<br>");
}
function Add_numbers_4() {
  document.write (y + 50 + "<br>");
}
Add_numbers_3 ();
Add_numbers_4 ();

function Add_numbers_5() {
  var z = 10
  console.log (5 + z + "<br>");
}
function Add_numbers_6() {
  console.log (z + 90 + "<br>");
}
Add_numbers_5 ();
Add_numbers_6 ();