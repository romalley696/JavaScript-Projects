function Colour_Function() {
    var Colour_Output;
    var Colours = document.getElementById("Colour_Input").value;
    var Colour_String = " is a great colour!";
    switch(Colours) {
        case "Red":
            Colour_Output = "Red" + Colour_String;
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
            Colour_Output = "Yellow" + Colour_String;
        break;
        case "Blue":
            Colour_Output = "Blue" + Colour_String;
        break;
        default:
            Colour_Output = "please enter a colour exactly as written on list";

    }
    document.getElementById("Output").innerHTML = Colour_Output;
}