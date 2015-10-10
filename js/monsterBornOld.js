$(document).ready(function() {
        
$("#my_button").click(function(){
/*for (var s=0; s<storychoice.length; s++)*/
  /* display main choice image in div*/
  var message = "You chose ";
 /* var storyqs = [1,2,3,4,5,6,7,8];*/
  var story = [ 
    { answer1: "Porridge on head", pic1: "img/blackgold.JPG", answer2: "Eat all up", pic2: "img/blob.jpg"}, 
    { answer1: "Sleep in Hotel", pic1: "img/blackgold.JPG", answer2: "Eat all up", pic2: "img/blob.jpg"}, 
    { answer1: "Fall in Love", pic1: "img/blackgold.JPG", answer2: "Eat all up", pic2: "img/blob.jpg"}, 
    { answer1: "Faraway in the Forests", pic1: "img/blackgold.JPG", answer2: "Eat all up", pic2: "img/blob.jpg"}
  ];

  /*for (var s=0; s<storyqs.length; s++){
    console.log("s = " + s);*/
    $("#main-image").css("background-color", "red"); 
    $("#main-image").html("When a monster is born...");


    /* get id of radio element */
    /*$("input:radio[name=choice]").click(function(){*/
      /*var choice = $("input[id=0]:checked").val();*/

        /*var value = $(this).attr("id");*/
         /*console.log("value equals " + value);*/
         /*console.log(story[i].answer1);*/
        

        if ($("#radio0").is(":checked")) {
          alert("radio0 is checked!");
        }
        if ($("#radio1").is(":checked")) {
          alert("radio1 is checked!");
        }

          /* for (var i=0; i<story.length; i++){

    console.log("i equals " + i);*/

        /* if 0 then that's that */
        switch (value) {
          /* if choice 0 selected */
          case '0':
          /* display bg image in div*/
          /*$("#" + i).css("background-image", "url(" +  story[i].pic + ")");*/
          console.log("That's that!")
          /*console.log("story" + story[i].answer1);*/
          /*$("#0").css("background-image", "url(" +  story[i].pic1 + ")");*/
          $("#main-image").css("background-color", "blue"); /*need to add id of main story choice*/ 
          $("#main-image").html("That's that!"); /*need to add id of main story choice 

          $("#0").css("background-color", "blue");
          /*$("#0").html("<h4>" + story[i].answer1 + "</h4>");*/
          $("#0").html("That's that!");
          break;
        /* if 1 then continue story */
        case '1':
          console.log("On to the next stage, please!");
          $("#main-image").css("background-color", "green"); /*need to add id of main story choice*/ 
          $("#main-image").html("Onwards!"); /*need to add id of main story choice 

           /*$("#" + i).css("background-color", "red");*/
          /*($("#" + i).css("background-image", "url(" +  story[i].pic2 + ")");
          $("#" + i).html("<h4>" + story[i].answer2 + "</h4>");*/
          break;
        default: 
          console.log("End it now!");
        };




 /* }; *//* end of For loop */

     /*});*/


   /* }; *//* main for loop - number of stories */
}); /* end of button click function */
}); /*end of document ready function */

