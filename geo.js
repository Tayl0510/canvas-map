//geo.js
document.addEventListener("DOMContentLoaded", function(){
    
    if( navigator.geolocation ){ 
      //find the current position
      var params = {enableHighAccuracy: true, timeout:360000, maximumAge:0};
      navigator.geolocation.getCurrentPosition( mapPosition, gpsError, params); 
      }else{
        alert("Browser does not support Geo Location");
    } 
});

function mapPosition(position) {

    //prepare a 400px X 400px canvas and append it to the body of the html page
    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    canvas.id = "mapcanvas";
    document.querySelector("body").appendChild(canvas);
    var context = canvas.getContext("2d");
    var imageObj = new Image();

    // determine the center of the map
    var centerMap = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    // get the static google map using google api
    imageObj.src = "http://maps.googleapis.com/maps/api/staticmap?center="+centerMap+"&zoom=14&size=400x400&maptype=roadmap&markers=color:red|"+centerMap;
        
    // draw the map onto the canvas
    imageObj.onload = function(){
        context.drawImage(imageObj, 0, 0);
    }
}

function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}


