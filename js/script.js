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
 if(randomNumber > .3333333333 && randomNumber < .666666666){
    $("#computerChoice").html("rock");
     computerChoice = "rock";
 }  
    else if(randomNumber < .333333333){
        $("#computerChoice").html("paper")
        computerChoice = "paper";
    }
     else if (randomNumber > .6666666) {
         $("#computerChoice").html("scissors")
                 computerChoice = "scissors";

     }
    if(userChoice === computerChoice ){
        $("#result").html("draw")
    }
    else if(userChoice === "paper" && computerChoice === "rock"){
        $("#result").html("user Choice wins")
        
    }
 else if (userChoice === "scissors" && computerChoice === "rock"){
        $("#result").html("computer Choice wins")
    }
    else if (userChoice === "scissors" && computerChoice === "paper"){
        $("#result").html("user Choice wins")}
    else if (userChoice === "scissors" && computerChoice === "scissors"){
        $("#result").html("draw")
    }
    else if (userChoice === "paper" && computerChoice === "paper"){
        $("#result").html("draw")
    }
    else if (userChoice === "paper" && computerChoice === "scissors"){
        $("#result").html("computer Choice wins")
    }
    else if (userChoice === "rock" && computerChoice === "scissors"){
        $("#result").html("user Choice wins")
    }
    else if (userChoice === "rock" && computerChoice === "rock"){
        $("#result").html("draw")
    }
    else if (userChoice === "rock" && computerChoice === "paper"){
        $("#result").html("computer Choice wins")
    } 
    else{
        $('#result').html("error")
    }
});


    