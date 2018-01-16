
 //Get Firebase started

 //Have Firebase store my data

  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCLOzxvu7_aXXo4loYIgwricJqIeU8j0ZA",
    authDomain: "train-data-9aa99.firebaseapp.com",
    databaseURL: "https://train-data-9aa99.firebaseio.com",
    projectId: "train-data-9aa99",
    storageBucket: "train-data-9aa99.appspot.com",
    messagingSenderId: "146235200571"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Button for adding a new train
$('#newTrainBtn').on("click", function(){

  //Grabs user input
  var train = $("#trainInput1").val().trim();
  var place = $("#placeInput1").val().trim();
  var arrival = $("#arrivalInput1").val().trim();
  // Create object for holding train data
  var newTrain = {
        train: train,
        place: place,
        arrival: arrival
  }

  
  database.ref().push(newTrain);


//Make sure its getting user input
  console.log(newTrain.train);
  console.log(newTrain.place);
  console.log(newTrain.next);
  console.log(newTrain.arrival);

  // Clears all of the text-boxes
  $('#trainInput1').val("");
  $('#placeInput1').val("");
  $('#arrivalInput1').val("");


});


// Creates a Firebase event for adding trains to the database and a row in the html
database.ref().on("child_added", function(childSnapshot){
  console.log(childSnapshot.val());


  $("#full-member-list").append("<div class='well'><span id='train'> " + childSnapshot.val().train +
        " </span><span id='place'> " + childSnapshot.val().place +
        " </span><span id='next'> " + childSnapshot.val().next+
        " </span><span id='arrival'> " + childSnapshot.val().arrival + " </span></div>");



  // Store everything into a variable
  var train = childSnapshot.val().train;
  var place = childSnapshot.val().place;
  var arrival = childSnapshot.val().arrival;

  

       
  $("#trainTable > tbody").append("<tr><td>" + train + "</td><td>" + place  + "</td><td>" + arrival + "</td><td>");

}, function(errorObject) {
            console.log("Errors handled: " + errorObject.code);
          });


