var SFdata;


slides = {"slideNumber": 0,
              "textData" :[slide1, slide2, slide3, slide4, slide5, slide6]};

$(document).ready(function() {
$.ajax({
    url: "https://data.sfgov.org/resource/cuks-n6tp.json?$where=date in ('2016-10-31', '2016-11-24', '2016-12-25')&category=LARCENY/THEFT",
    type: "GET",
    data: {
      "$limit" : 10000,
      "$$app_token" : "FkhniUz4GAe7dUjqw2mjFaCV4"
    }
}).done(function(data) {
   SFdata = data;
   slide1.map = [];
   slide2.map = SFdata;
   slide3.map = _.filter(SFdata, function(x) { return x.date == "2016-10-31T00:00:00.000";});
   slide4.map = _.filter(SFdata, function(x) { return x.date == "2016-11-24T00:00:00.000";});
   slide5.map = _.filter(SFdata, function(x) { return x.date == "2016-12-25T00:00:00.000";});
   slide6.map = _.filter(SFdata, function(x) { return x.pddistrict == "TENDERLOIN";});



   var slides = {"slideNumber": 0,
                 "textData" :[slide1, slide2, slide3, slide4, slide5, slide6]};
});
});


var turkey = L.icon({
        iconUrl: 'turkey-icon.png',
        iconSize: [40, 50], // size of the icon
        popupAnchor: [0,-15]
        });

var santa = L.icon({
                iconUrl: 'santa.png',
                iconSize: [40, 50], // size of the icon
                popupAnchor: [0,-15]
                });

var spooky = L.icon({iconUrl: 'Pumpkin-icon.png',
                                iconSize: [40, 50], // size of the icon
                                popupAnchor: [0,-15]
                                });

var customOptions =
        {
        'maxWidth': '400',
        'className' : 'custom'
      };
