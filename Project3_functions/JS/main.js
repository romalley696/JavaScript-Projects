// addition
function addition_Function() { 
  var addition = 2+2;
  document.getElementById("math").innerHTML = "2+2= "+ addition;
}

// subtraction
function subtraction_Function() { 
  var Subtraction = 5-2;
  document.getElementById("math1").innerHTML = "5-2= " + Subtraction;
}

// multiplicaton
function multiplication_Function() { 
  var Multiplication = 8*5;
  document.getElementById("math5").innerHTML = "8*5= " + Multiplication;
}

// multiple maths
function more_Math() { 
  var simple_Math = (1+2)*10/2-5;
  document.getElementById("math2").innerHTML = "1 plus 2, multiplied by 10, divided in half the subracted by 5 equals " + simple_Math;
}

// remainders
function modulus_Operator() {
  var simple_Math1 = 25% 6;
  document.getElementById("math3").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Math1;
}

// displaying negatives
function negation_Operator() {
  var x =10
  document.getElementById("math4").innerHTML = -x
}

// using incrementation
function incrementation(){
  var y = 5.25;
   y++;
  document.getElementById("increment").innerHTML = (y);
}

// using decrementation
function decrementation(){
  var z = 2.5;
   z--;
  document.getElementById("decrement").innerHTML = (z);
}



//getting a random number
window.alert(Math.random() *100);






