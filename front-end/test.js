var localReverseGeocoder = require("local-reverse-geocoder")
var point = { latitude: 35.8527, longitude: 10.6 };
localReverseGeocoder.lookUp(point, function (err, res) {
  console.log(JSON.stringify(res));
});