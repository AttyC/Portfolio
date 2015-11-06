$(document).ready(function() {

  $('#monster_button').hide();    // replay button - hide until end

   // Array of images and text to show for story options
  var monsterStory = [ 
  //0
      { story1: "it's a FARAWAY-IN-THE-FORESTS monster, or ... ", 
        story2: "it's an UNDER-YOUR-BED monster", 
        b0: "If it's a FARAWAY-IN-THE-FORESTS monster ...",
        b1: "If it's an UNDER-YOUR-BED monster ...",
        bg1: "rgb(226,26,37)"},
//1        
      { story1: "it EATS YOU, or ...", 
        story2: "you make friends and TAKE IT TO SCHOOL.", 
        b0: "If it EATS YOU ...",
        b1: "But if you TAKE IT TO SCHOOL ...",
        bg1: "#197278"},
//2
      { story1: "it SITS QUIETLY, does its HOMEWORK and becomes the first monster to play for the SCHOOL BASKETBALL TEAM, or ...", 
        story2: "it eats the HEAD TEACHER.", 
        b0: "If it SITS QUIETLY ...",
        b1: "But if it eats the HEAD TEACHER ... ",
        bg1: "#31572C"},
//3
      { story1: "it SITS QUIETLY, does its HOMEWORK and becomes the first monster to play for the SCHOOL BASKETBALL TEAM, or ...", 
        story2: "it eats the HEAD TEACHER.", 
        b0: "If it SITS QUIETLY ...",
        b1: "But if it eats the HEAD TEACHER ... ",
        bg1: "#rgb(226,26,37)"},
//4
      { story1: "it growls \"YUMMY!\" and DANCES BOOGIE-WOOGIE, or ...", 
        story2: "it growls \"SORRY!\" and WALKS OFF through the wall.", 
        b0: "If it DANCES BOOGIE-WOOGIE ...",
        b1: "But if it WALKS OFF ... ",
        bg1: "#197278"},
//5
      { story1: "it SITS IN THE PARK and scratches its head, or ...", 
        story2: "it takes a deep breath and sets off for the FARAWAY-FORESTS.", 
        b0: "If it SITS IN THE PARK ...",
        b1: "But if it sets off for the FARAWAY-FORESTS ... ",
        bg1: "#31572C"}     
    ];
  //variables for story
  var poss = "<h5>...there are two possibilities - </h5>";
  var either = " either ";
  var choice = "Make your choice!";
  var intro ="<div class='start'><p>I was inspired to write a program while reading this wonderful book to my children, so I could practice my code and make them a game, at the same time. The story is about what happens when a monster is born and presents a series of boolean selections (there are two possibilities...). I would read the book and plan the code in my head while they fell asleep!</p></div>"
  //var github_link = "<a href='https://github.com/AttyC/Portfolio/blob/master/js/monsterBorn.js' target='_blank'>jQuery code on Github</a><br/>";
  //var amazon_link = "<a href='http://www.amazon.co.uk/When-A-Monster-Is-Born/dp/1846165113' target='_blank'>View Book on Amazon</a>";
  var i = 0; //set first screen
  $("#monsterPic").html(intro + "<h2>When a <span class='monster'>Monster</span> is Born...</h2>"  + poss + "<p>" + either + monsterStory[i].story1 + "<br/>" + monsterStory[i].story2 + "</p>" + choice);
  //$("#monsterPic").css("background", monsterStory[i].bg1);

  //buttons for story choices - 0 or 1
  $('#button0').html("<span>" + monsterStory[i].b0 + "</span>");
  $('#button1').html("<span>" + monsterStory[i].b1 + "</span>");


  //make story choice
  $('.choiceButton').click(function () {
  
    if (this.id == 'button1') {        // button0 will be success choice until I can randomise buttons
       
      if (i < monsterStory.length-1) {  // if more stories stages to come
        i++;

        console.log(i);   //remove this
        console.log(monsterStory.length);
        
        $("#monsterPic").css("background-color", monsterStory[i].bg1);   //set background image and text for next stage
        $("#monsterPic").html(poss + either + monsterStory[i].story1 + "<br/>" + monsterStory[i].story2 ); 

      }
      else {
        $('#monster_button').show(); //show replay button      
        $("#monsterPic").addClass("that");   
        $("#monsterPic").html("That's That!"); // this ends the 'loop' and exits the game
        $('#button0').hide();
        $('#button1').hide(); 
        
      }

      $('#button0').html(monsterStory[i].b0);  // set button labels to show next story choices
      $('#button1').html(monsterStory[i].b1);
    }
    else if (this.id == 'button0') {    //button1 will be no-success choice until I can randomise buttons
      
      $('#monster_button').show(); //show replay button      
      $("#monsterPic").addClass("that");   
      $("#monsterPic").html("That's That!"); // this ends the 'loop' and exits the game
      $('#button0').hide();
      $('#button1').hide(); 


      $('#monster_button').click(function () {  // refresh page to restart game
        location.reload();
      });
    }
   
  }); //end of choiceButton function
  
}); /*end of document ready function */

    /*$("#monsterPic1").css("background", monsterStory[i].bg1); 
        $("#monsterPic1").html(monsterStory[i].q1); 
    $("#monsterPic2").css("background", monsterStory[i].bg2); 
        $("#monsterPic2").html(monsterStory[i].q2); */