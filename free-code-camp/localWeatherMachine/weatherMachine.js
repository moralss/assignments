
$.getJSON("https://freegeoip.net/json/?callback=?", function (data) {
  lat = data.latitude;
  long = data.longitude;
  getWeather()
});


function getWeather() {
  api = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long + "";
  $.getJSON(api, function (data) {
    var weatherType = data.weather[0].description;
    var mainWeather = data.weather[0].main;
    var tempC = data.main.temp;
    document.getElementById("degrees").innerHTML = Math.round(tempC) + "&deg;F";
    var tempF = tempC * 9 / 5 + 32;

    function displayImage() {
      var icon = data.weather[0].icon;
      displayWeather = document.getElementById("display weather");
      displayWeather.innerHTML = weatherType;
      document.getElementById("icon").innerHTML = `<img src=${icon} alt="">`;
    }
    
    $("#switch").click("on", function () {
      var unitMeasurement = document.getElementById("degrees").innerHTML;
      if (unitMeasurement.match("F")) {
        $("#degrees").html(Math.round(tempC) + "&deg;C");
        $("#unitName").html("Celsius");

      } else if (unitMeasurement.match("C")) {
        $("#degrees").html(Math.round(tempF) + "&deg;F");
        $("#unitName").html("Fahrenheit");
      }
    });
    displayImage()
  })
}