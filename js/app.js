//When a city is clicked, scroll slideDown
$(document).ready(function(){
  $(".city").click(function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $(".city_chosen").offset().top
      }, 1000);
  });

  //When "Choose a Different City" is clicked scroll up

  $(".different_city").click(function() {

    $("html, body").animate({
       scrollTop: 0
   }, 1000);

  });


  //On click, change h3 h5 and p tags based on city (h2)

  $(".rome").click(function(event) {
      event.preventDefault();
      $("h3").text("Rome");
      $("h4").text("When in Rome, do as the Romans do");
      $("p").text("Rome is the capital city of Italy. In Rome, they speak italian and use the Euro as currency. Rome was founded around 753 BC, making it one of the oldest continuously occupied cities in Europe. This leaves plenty of opportunities for culture and history buffs to get their fix! Not to mention, foodies will be in heaven.")

      {
  var uluru = {lat: 41.902, lng: 12.496};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });

}
  });

  //On Click, change city searched in google API to city clicked (h2)

  //On click, change h3 h5 and p tags based on city (h2)


  //On Click, change city searched in google API to city clicked (h2)

  // function initMap() {
  //   // The location of Uluru
  //   var uluru = {lat: -25.344, lng: 131.036};
  //   // The map, centered at Uluru
  //   var map = new google.maps.Map(
  //       document.getElementById('map'), {zoom: 4, center: uluru});
  //   // The marker, positioned at Uluru
  //   var marker = new google.maps.Marker({position: uluru, map: map});

  $(".london").click(function(event) {
      event.preventDefault();
      $("h3").text("London");
      $("h4").text("London is a roost for every bird");
      $("p").text("London is the capital city of England and a leading global city across many industries, including the arts, commerce, education, and entertianment. Its the world's most visited city with plenty of history and cultural activites. Fast paces city lovers will not be able to get enough of London Town!")

      {
  var uluru = {lat: 51.507, lng: 0.128};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });

}
  });

  $(".budapest").click(function(event) {
      event.preventDefault();
      $("h3").text("Budapest");
      $("h4").text("The city that unites");
      $("p").text("Budapest is the capital city of Hungary. In Budapest, they use the forint as currency and speak Hungarian. This reemerging city is famous for it's rich history, huge public baths, and infamous ruin bars. Being a less expensive European city to visit, you'll get a big bang for your buck in Budapest!")

      {
  var uluru = {lat: 47.498, lng: 19.040};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });

}
  });

  $(".berlin").click(function(event) {
      event.preventDefault();
      $("h3").text("Berlin");
      $("h4").text("You are crazy, my child. You must go to Berlin.");
      $("p").text("Berlin is the capital and largest city in Germany. In Berlin, they use the Euro as currency and speak German. Considering the city and country's history these past 100 years, there is a lot to be said for Berlin's historical attractions. Must do's include walking down the Berlin wall, taking in Museum Island, and experiencing their famous biergartens and Christmas markets.")

      {
  var uluru = {lat: 52.520, lng: 13.405};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });

}
  });

  $(".dublin").click(function(event) {
      event.preventDefault();
      $("h3").text("Dublin");
      $("h4").text("When I die Dublin will be witten in my heart");
      $("p").text("Dublin is the capital and largest city in Ireland. In Dublin, they use the Euro as currency. Dublin is most famous for it's music and pub scene and is home to many beloved artists and musicians. Not to mention, Dublin has a rich history and budding tech scene to explore. Fun loving Millenials will not be disappointed!")
      {
  var uluru = {lat: 53.349, lng: -6.260};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });

}

  });

  $(".prague").click(function(event) {
      event.preventDefault();
      $("h3").text("Prague");
      $("h4").text("Once upon a Prague");
      $("p").text("Prague is the capital and largest city in the Czech Republic. The city was once the capital of Bohemia and has stood strong through the violence of the 20th century in Eastern Europe - leaving many landmarks in tact. Prague has a budding nightlife and is famous for it's beer and loosely regulated absinthe. There is both fun to be had and timeless beauty to enjoy in Prague!")

      {
  var uluru = {lat: 50.076, lng: 14.438};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });

}
  });

  $(".paris").click(function(event) {
      event.preventDefault();
      $("h3").text("Paris");
      $("h4").text("Paris is always a good idea");
      $("p").text("Paris is the capital and largest city in France. Known for it's incredible food, sights, fashion, culture, and so much more - Paris is a city we all must experience at least once in a lifetime. Enjoy a glass of wine and baguette under the Eiffel tower, stroll the Chans de Lise, visit Versaille. There is no shortage of breathtaking experiences to be had in Paris, you'll only wish you had more time!")

      {
  var uluru = {lat: 48.857, lng: 2.352};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });

}
  });

  $(".barcelona").click(function(event) {
      event.preventDefault();
      $("h3").text("Barcelona");
      $("h4").text("A city unique in its beauty");
      $("p").text("Barcelona is a city in Spain and the capital of Catelonia. People there speak both Spanish and Catalan and use the Euro as currency. Barcelona was originally founded as a Roman city and today is well known for it's soccer team, amazing food, incredible nightlife, and rich history. Barcelona is widely revered as a quickly growing, beautiful European city.")
      {
    var uluru = {lat: 41.385, lng: 2.173};

    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
    });

    }
  });


});
