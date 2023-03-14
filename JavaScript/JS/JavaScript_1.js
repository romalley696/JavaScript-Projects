function Colour_Function() {
    var Colour_Output;
    var Colours = document.getElementById("Colour_Input").value;
    var Colour_String = " is a rubbish colour!";
    var Colour_String1 = " is a great colour!"
    switch(Colours) {
        case "Red":
            Colour_Output = "Red" + Colour_String1;
        break;
        case "Pink":
            Colour_Output = "Pink" + Colour_String;
        break;
        case "Green":
            Colour_Output = "Green" + Colour_String;
        break;
        case "Orange":
            Colour_Output = "Orange" + Colour_String;
        break;
        case "Yellow":
            Colour_Output = "Yellow" + Colour_String1;
        break;
        case "Blue":
            Colour_Output = "Blue" + Colour_String;
        break;
        default:
            Colour_Output = "please enter a colour exactly as written on list";

    }
    document.getElementById("Output").innerHTML = Colour_Output;
}

function elements_class() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "the text changed";
}

var c = document.getElementById("Canvas_1");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "black");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 325, 80);