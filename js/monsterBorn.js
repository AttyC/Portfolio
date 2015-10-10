$(document).ready(function() {

/* display page this many times */
 /* for (var s=0; s<8; s++){
    console.log("s = " + s);*/
        
  $("#submit_button").click(function(){

    /* display main choice image in div*/
    var message = "You chose ";

    var story = [ 
      { answer1: "Porridge on head", pic1: "img/blackgold.JPG", answer2: "Eat all up", pic2: "img/blob.jpg"}, 
      { answer1: "Sleep in Hotel", pic1: "img/blackgold.JPG", answer2: "Eat all up", pic2: "img/blob.jpg"}, 
      { answer1: "Fall in Love", pic1: "img/blackgold.JPG", answer2: "Eat all up", pic2: "img/blob.jpg"}, 
      { answer1: "Faraway in the Forests", pic1: "img/blackgold.JPG", answer2: "Eat all up", pic2: "img/blob.jpg"}
    ];
    i = 0;

      $("#main-image").css("background-color", "red"); 
      $("#main-image").html("When a monster is born...");


      /* get id of radio element */

          if ($("#radio0").is(":checked")) {
            alert("radio0 is checked!" + "i = " + i + story[i].pic1 );

                      /* display bg image in div*/
            $("#main-image").css("background-image", "url(" +  story[i].pic1 + ")");
            console.log("That's that!")
            $("#main-image").html("That's that!"); 

          }



          else {
            alert("radio1 is checked!");

            console.log("On to the next stage, please!");
           /* $("#main-image").css("background-color", "green");*/ /*need to add id of main story choice*/ 
            /*$("#main-image").html("Onwards!"); /*need to add id of main story choice */

            $("#main-image").css("background-image", "url(" +  story[i].pic2 + ")");
            $("#main-image").html("<h4>" + story[i].answer2 + "</h4>");

          } /*end of if statement */
          /*refresh page for next part of story */


      i++;
     /*});*/

    });/* end of button click function */

/*           location.reload(); */
  /*};*/ /* main for loop - number of stories */
}); /*end of document ready function */

