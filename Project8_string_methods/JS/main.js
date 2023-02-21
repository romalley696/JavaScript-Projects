function full_sentence() {
  var part_1 = "This ";
  var part_2 = "is ";
  var part_3 = "my ";
  var part_4 = "concatenation!"
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Concatenate").innerHTML = whole_sentence; // ------ using concatenate
}

function slice_Method() {
  var Sentence = "this is the slice method, unsure when you would use this?";
  var Section = Sentence.slice (12,24);
  var Section = Section.toUpperCase();
  document.getElementById("slice").innerHTML = Section;
  document.getElementById("search").innerHTML = Sentence.search("unsure"); // ------ using slicing
}

function string_Method() {
  var X = 69;
  document.getElementById("Numbers_to_string").innerHTML = X.toString(); // ------ finding numbers in a string
}

function precision_Method() {
  var Y = 108.852651;
  document.getElementById("Precision").innerHTML = Y.toPrecision(4); // ---------geting precise numbers
}

function toFixed() {
  var Z = 3.147824365;
  document.getElementById("Fixed").innerHTML = Z.toFixed(2); //--------- displaying numbers to a fixed decimal place
}

function tovalueOf() {
  var Text = "this is my text";
  var result = Text.valueOf();

  document.getElementById("valueOf").innerHTML = result; //-------- using the exact value
}