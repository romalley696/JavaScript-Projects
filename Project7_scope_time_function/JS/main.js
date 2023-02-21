function get_Date() { // -----this will pull time to see if morning or afternoon
  if (new Date().getHours() <12) {
    document.getElementById("greeting").innerHTML = "how are you this morning?";    
  }
  else {
    document.getElementById("greeting").innerHTML = "how are you this afternoon?";
  }
}

function Age_function() { //---------will check input to see if age is above or equal to 18
  Age = document.getElementById("Age").value;
  if (Age >= 18) {
    Vote = "you are old enough to vote!";       
  }
  else {
    Vote = "you are not old enough to vote!";
  }
  document.getElementById("How_old_are_you?").innerHTML = Vote;
  
}

function Time_function() { //--------this will go through to check time of day
  var Time = new Date().getHours();
  var Reply;
  if (Time<12 ==Time> 0) { //----between 0:00 - 12:00
    Reply = "it is morning time!";
  }
  else if (Time >12 == Time < 18) { //--------between 12:00 and 18:00
    Reply = "It is the afternoon.";
  }
  else {
    Reply = "It is evening time."; // ------ everything else displayed
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}