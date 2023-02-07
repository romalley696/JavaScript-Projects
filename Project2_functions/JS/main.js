function changeColor(newColor) { //button function for changing colour to text
    const elem = document.getElementById('para');
    elem.style.color = newColor;
  }

function myfunction() { //click text function for changing text
    var sentence = "I am learning";
    sentence+= " a lot from this book";
    document.getElementById("concatenate").innerHTML=sentence;
}

