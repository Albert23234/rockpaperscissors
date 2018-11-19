// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
 var userChoice;
 var userChoice = "";
var winner = "";
var computerChoice = "";
var randomNumber = 0;
randomNumber= Math.random();
    console.log(randomNumber);
    
 userChoice=$("input").val();
 $("#userChoice").text(userChoice);
 if(randomNumber > .50){
    $("#computerChoice").html("rock");}  
    else if(randomNumber < .50){
        $("#computerChoice").html("paper")
    }
});


    