
$(document).ready(function(){

/* Projects - examples of work */
  var myProjects = [ 
    { title: "Karthaus Design", pic: "img/KD_shot.jpg", href: "http://karthaus.co.uk", description: "Responsive website templates HTML/CSS. Client specified static design." }, 
    { title: "D'Cunha Vincent Consulting", pic: "img/dcunhavincent_shot.jpg", href: "http://www.dcunhavincent.co.uk", description: "HTML, CSS, jQuery. Designed in collaboration with the client." },
    { title: "jQuery - When a Monster is Born", pic: "img/monster_shot.jpg", href: "monsterBorn.html", description: "I read a children's book and was inspired to write a program." },  
    { title: "WordPress - Dev ", pic: "img/accelerate_shot.jpg", href: "http://www.atty-dev.co.uk", description: "Custom template and themes for WordPress." }, 
    { title: "WordPress - Eliza Filby", pic: "img/efilby_screenshot.jpg", href: "https://github.com/AttyC/elizafilby", description: "View on Github: Custom WordPress site, under construction, custom themes &amp; templates" },
    { title: "Rails app - Dev", pic: "img/first_app_shot.jpg", href: "http://totsmusic.herokuapp.com", description: "First Ruby on Rails app - Stripe, Devise, Cancancan." }, 
    { title: "Bankstreet", pic: "img/bankstreet_screenshot.jpg", href: "http://bankstreet.bitballoon.com", description: "Personal band website. HTML, CSS" }
    
  ];

  /* display bg image */
  for (var i=0; i<myProjects.length; i++){
    console.log(myProjects[i]);
      $("#" + i).css({"background": "url(" +  myProjects[i].pic + ") no-repeat", "background-position": "50% 0%" }); 
      $("#" + i).html("<a target='blank' href=" + myProjects[i].href + "><p class='description'>" + myProjects[i].title + ": </br>" + myProjects[i].description + "</p></a>");
  
  };
  /* display title on hover and hide on leave */
  /*$(".image").mouseenter(function() {
    console.log(myProjects[this.id].title);
    $(this).html("<a target='blank' href=" + myProjects[this.id].href + "><h4 class='info'><span class='proj-title'>Title: </span>" 
      + myProjects[this.id].title + "</h4></a>");
  }).mouseleave(function() {
    $("h4.info").html("");
  });*/
  /* display title on hover and hide on leave */
 

/* Google Maps JavaScript APIv3 */
  var panorama;
  var address = new google.maps.LatLng(51.58842,-0.023069,16);
  function initialise () {
    /* set location */
    var mapOptions = {
      center: address,
      zoom: 8,    
      streetViewControl: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    
    /* create new marker */
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'Click to zoom',
      icon: iconBase + 'schools_maps.png'
    });
    
    /* event listener to change zoom level */
    google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
    });

  }
  google.maps.event.addDomListener(window, 'load', initialise);


/* Zebra striped table */
  var rows = $(".my-row");
  for (var i=0; i < rows.length; i++) {
    if (i%2 ===0) {
      $(rows[i]).css("background-color", "#eee");
    }
  };

  /* change Contact message box bg colour */
  $(".message-box").css("background-color","#ccc");


/* Output to page a message after Contact message box on Submit */
  $("#contact_button").on("click", function() {
    var comment = $(".message-box").val();
    $("#visible_comment").html(comment.toUpperCase() + "! jQuery is working beautifully!");
    return false;
  });

/* Output to console a message on keyup */
  $(".message-box").on("keyup", function() {
    console.log("keyup happened");
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#charCount").html(charCount);

/* change colour of character count after message box on comtact page if < > 50 */
    if (charCount > 50) {
      $("#charCount").css("color", "red");
    } else {
      $("#charCount").css("color", "black");
    }
  });
  /* tooltip */
  $(function () {
    $('#[insert ID your tooltip here]').tooltip();
  });

/* this is my own task, requested by my first client on their site, changes nav css on scroll */
/* This changes the nav from transparent to opaque and vice versa when scrolling down or up */
  var nav = $(".navbar");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 275) {
    nav.css("background-color", "#292322");
    } else {
    nav.css("background-color", "rgba(41, 35, 35, 0.2)");
    }
  });


});

