function my_Dictionary() { // 1st dictionary
  var Car = {
    Make:"Ford",
    Model:"Focus",
    Engine:"1.6",
    Year:"2020"
  }
  delete Car.Model //delete value
  document.getElementById("Dictionary").innerHTML = Car.Model;
}
