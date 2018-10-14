const mongoose = require("mongoose");
const db = require("../models");
const geocoder = require("geocoder");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/readlocal"
);

db.Article.find()
.then(data => {
    for (var i = 0; i < 3; i++) {
        const lat = data[i].lat;
        const lng = data[i].lng;
        console.log(typeof lat, typeof lng);

        geocoder.reverseGeocode( lat, lng, function(err, data) {
            if (err) console.log(err);
            console.log(data);
        }, { key: "AIzaSyDqEyqqpMD23rErtt__7gxgYsuA6pfYdOE"})

}
// console.log(data);
})