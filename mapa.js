

const URL = "https://maps.googleapis.com/maps/api/geocode/json?address=&key=AIzaSyCQetB7vKtIdydmxA1ubI-zk60PA4PKRwI";


  $('#sub').click(function() {
    var city = $('#direccion').val();
    if (city.length) {
      var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyCQetB7vKtIdydmxA1ubI-zk60PA4PKRwI`;
      $.get(url, function(data) {  
        console.log(data.results[0].geometry.location);
        let miUbi = {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng};
        
  
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng },
      zoom: 15,
    });
    new google.maps.Marker({
      position: miUbi,
      map,
      title: "Hello World!",
    });
      });
    } else {
      alert("Please enter city.");
    }
  });

  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.59196284537173, lng: -58.46002743356553 },
      zoom: 10,
    });
  }
    