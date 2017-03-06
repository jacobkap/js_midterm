
var map = L.map('map', {
  center: [37.7609, -122.3928],
  zoom: 12
});

var Esri_WorldTopoMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


$(function(){$("#button-next").click(function() {
  nextButton();
                                                });
});

$(function(){$("#button-previous").click(function() {
  previousButton();
                                                    });
});

var markers = [];
makeMap = function(data) {
   _.map(data, function(crime) {
    if (crime.date == "2016-10-31T00:00:00.000") {
      holiday = spooky;
    } else if (crime.date == "2016-11-24T00:00:00.000") {
      holiday = turkey;
    } else { holiday = santa; }


    markersTemp = new L.marker([crime.y, crime.x] , {icon: holiday});
    markers.push(markersTemp);

    markersTemp.addTo(map).bindPopup('Crime: ' + crime.descript  + '<br>' +
                                                                   'Address: ' + crime.address + '<br>' +
                                                                   'Resolution: ' + crime.resolution + '<br>' +
                                                                   'District: ' + crime.pddistrict, customOptions);

});
};

removeMarkers = function() {
for(i = 0; i < markers.length; i++) {
    map.removeLayer(markers[i]);
    }
};


mapper = function(data, view) {
  removeMarkers();
  makeMap(data);
};


var nextButton = function() {
  if (slides.slideNumber < slides.textData.length - 1) {
    slides.slideNumber += 1;
    map.setView([37.7609, -122.3928], 12);
  }
  if (slides.slideNumber === slides.textData.length - 1) {
    $('#button-next').hide();
    map.setView([37.7839293, -122.4093617], 15);
}
  $('h1').text(slides.textData[slides.slideNumber].title);
  $('h2').text(slides.textData[slides.slideNumber].text);
  $('#button-previous').show();
  mapper(slides.textData[slides.slideNumber].map);
};

var previousButton = function() {
  if (slides.slideNumber > 0) {
   slides.slideNumber -= 1;
 }
 if (slides.slideNumber === 0) {
   $('#button-previous').hide();}
 $('h1').text(slides.textData[slides.slideNumber].title);
 $('h2').text(slides.textData[slides.slideNumber].text);
 $('#button-next').show();
 mapper(slides.textData[slides.slideNumber].map);
 map.setView([37.7609, -122.3928], 12);
};
