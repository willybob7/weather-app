$(document).ready(function(){
 $("#location").on("click", function(){
   getLocation();
   $("#location").hide();
 });
  var t;
  var f;
  var url = "https://fcc-weather-api.glitch.me/api/current?";
  function getLocation(){
  if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showIt);
      } else {
      $(".position").html("stupid idiot");
  }}
function showIt(position) {
   url += "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
  $.getJSON(url, function(data){
    console.log(url);
  $(".stuff").html(data.weather[0].description);
  $(".place").html(data.name + " ," + data.sys.country);
  $(".stuff").prepend('<img src = "' + data.weather[0].icon + '"><br>');
  $(".target").html( data.main.temp + " C");
  var t = data.main.temp;
  //$(".position").html(url);
  $(".button").prepend('<br><button class = "btn btn-primary"  id = "conversion"><span>Convert Units</span></button>');
  $(".stuff").prepend("<p>Humidity: " + data.main.humidity + "%</p>");

    f = t * (9/5) + 32;
    var g = f.toFixed(2);
    var count = 0;
$("#conversion").click(function() {
    count++;
    var isEven = function(someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    if (isEven(count) === false) {
        $(".target").html(g + " F");
    } else if (isEven(count) === true) {
        $(".target").html(t +" C");
    }
  });
});


}


});
