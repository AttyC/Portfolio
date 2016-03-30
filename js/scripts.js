
$(document).ready(function(){

/* Projects - examples of work */
  var myProjects = [ 
    { pic: "img/KD_shot.jpg", href: "http://karthaus.co.uk", title: "HTML, CSS, jQuery", description: "Responsive website HTML/CSS templates, jQuery for homepage." }, 
    { pic: "img/dcunhavincent_shot.jpg", href: "http://www.dcunhavincent.co.uk", title: "HTML, CSS, jQuery", description: "HTML, CSS, jQuery" },
    { pic: "img/monster_shot.jpg", href: "monsterBorn.html", title: "jQuery", description: "jQuery - simple game based on a children's book" },
    { pic: "img/recruitmentology_shot.jpg", href: "http://http://recruitmentology.co.uk", title: "WordPress, CSS", description: "WordPress admin and CSS fixes." }, 
    { pic: "img/janeward_screenshot.jpg", href: "http://www.attycool.com", title: "WordPress", description: "WordPress site for my photographer, sailor mother" }
    /*{ pic: "img/first_app_shot.jpg", href: "http://totsmusic.herokuapp.com", title: "", description: "Ruby on Rails app - Stripe, Devise, Cancancan." }*/
    /*{ pic: "img/accelerate_shot.jpg", href: "http://www.atty-dev.co.uk", title: "", description: "Practice WordPress site - custom template /child themes" } */
 
  ];

  /* display bg image */
  for (var i=0; i<myProjects.length; i++){
    console.log(myProjects[i]);
      $("#" + i).css({"background": "url(" +  myProjects[i].pic + ") no-repeat", "background-position": "50% 0%"}); 
      /*$("#" + i).html("<a target='blank' class='screenshot-target' href=" + myProjects[i].href + "><p class='description'>"  + myProjects[i].description + "</p></a>").css({"background": "url(" +  myProjects[i].pic + ") no-repeat", "background-position": "50% 0%" });*/
  
  };
  /* display title on hover and hide on leave */
 $(".image").mouseenter(function() {
    console.log(myProjects[this.id].description);
    $(this).html("<a target='blank' class='screenshot-target' href=" + myProjects[this.id].href + "><p class='description'>" + myProjects[this.id].description + "</p></a>");
  }).mouseleave(function() {
    $("p.description").html("");
    $("a.screenshot-target").css({"display": "none"});
  });
  /* display description on hover and hide on leave */
 

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

