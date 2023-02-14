document.write(typeof "word"); //string
document.write("<br>"); //line break all future <br> are same
document.write(typeof 3); //number

function my_Function () {
  document.getElementById("test").innerHTML =0/0; //display NaN
}

function my_Function1 () {
  document.getElementById("test1").innerHTML = isNaN('007'); // using NaN to see if it is a number - true
}

function my_Function2 () {
  document.getElementById("test2").innerHTML = isNaN('this is a string'); //using NaN to see if it is a number - false
}
document.write("<br>");
document.write(3E310); //infinity
document.write("<br>"); 
document.write(-3E310); //-infinty
document.write("<br>");
document.write(3>5); // boolean logic to see if is true or false - false
document.write("<br>");
document.write(18<35); // boolean logic to see if is true or false - true

console.log(5+5);
document.write("<br>");
document.write("10"+10); // type coercion as different styles will put the numbers together not add

console.log(10>15);

document.write("<br>");
document.write(10==10); //equals to true or false
document.write("<br>");
document.write("<br>");

//using === checking values and data types true or false
x=10
y=10
document.write(x===y);
document.write("<br>");
z=12
document.write(x===z);
document.write("<br>");
a="10"
document.write(x===a);
document.write("<br>");
b="bob"
document.write(x===b);
document.write("<br>");
document.write("<br>");

//using AND and OR to get a true or false 
document.write(2>1 && 5>2);
document.write("<br>");
document.write(5<10 || 6>10);


function not_Function () {
  document.getElementById("not").innerHTML = !(5>10); // using NOT fuction to get a true or false 
}
function not_Function1 () {
  document.getElementById("not1").innerHTML = !(5<10); // using NOT fuction to get a true or false 
}
