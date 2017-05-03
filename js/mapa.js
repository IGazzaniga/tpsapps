var mapa;
function crearMapa() {
  var ubicacion = new google.maps.LatLng(-34.904033, -57.92406);
  var mapOptions = {
    zoom: 15,
    center: ubicacion,
    };
  	
  	mapa = new google.maps.Map(document.getElementById('mapa'), mapOptions);
	
	var marcador = new google.maps.Marker({
    position: ubicacion,
    title: '¡Aquí estamos!'    
  });
	
	marcador.setMap(mapa);
};
google.maps.event.addDomListener(window, 'load', crearMapa);
    