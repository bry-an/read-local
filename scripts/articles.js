const mongoose = require("mongoose");
const db = require("../models");
const geocoder = require("geocoder");
const axios = require("axios");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/readlocal",
    { useNewUrlParser: true }
);
// db.City.findOne({ _id: "5bc3efb393d2448a5edfdd84"})
// .then(data => console.log(data))

axios.get('http://localhost:3001/api/articles')
    .then(articles => {
        console.log(articles.data.length);
        for (var i = 1040; i < 1042; i++) {
            console.log(articles.data[i]);
            const lng = articles.data[i].lng.$numberDecimal;
            const lat = articles.data[i].lat;
            let cityobj = { city: "", state: "" };
            console.log(articles.data[i].lat, articles.data[i].lng.$numberDecimal);

            geocoder.reverseGeocode(lat, lng, function (err, data) {
                if (err) console.log(err);
                if (data.results.length > 0) {
                    var citystring = data.results[0].formatted_address.split(",", 3);
                    var numchk = citystring[0];
                    console.log(citystring);
                    if (citystring.length > 1) {
                        if ((typeof (parseInt(numchk[0].charAt(0))) === "number") || numchk === "Unnamed Road") {
                            var city = citystring[1].trim();
                            if (citystring[2]) {
                                var tempstate = citystring[2].trim().split(" ");
                                var statecode = tempstate[0].trim();
                            }
                            cityobj.city = city;
                            cityobj.state = statecode;
                            console.log(city, statecode);
                        } else {
                            var city = citystring[0].trim();
                            // citystring = citystring[1].split(" "),
                            var tempstate = citystring[1].trim().split(" ");
                            var statecode = tempstate[0].trim();
                            cityobj.city = city;
                            cityobj.state = statecode;
                            console.log(city, statecode);
                        }
                    }
                    db.UsState.findOne({ usstate: statecode })
                    .then(state => {
                        if (state !== null) {
                            stateid = state._id;
                            console.log(state);
                            db.City.findOneAndUpdate({
                                city: cityobj.city
                            }, {
                                    city: cityobj.city,
                                    state: stateid
                                }, { upsert: true, returnNewDocument: true },
                                function (err, city) {
                                    console.log(city);
                                    if (err) console.log(err);
                                })
                                .catch(err => console.log(err));
                        }
                    })
                    .catch(err => console.log(err));
                }
            }, { key: "AIzaSyDqEyqqpMD23rErtt__7gxgYsuA6pfYdOE" })

        }
    })
    .catch(err => console.log(err))


// db.Article.find()
// .then(data => {
//     for (var i = 0; i < 3; i++) {
//         console.log(data[i].lat, data[i].lng, data[i].location, data[i].title, data[i]._id, data[i].date);
//         const lng = data[i].lng;
//         const lat = data[i].lat;
//         console.log(data[i], lat, lng );

//         geocoder.reverseGeocode( lat, lng, function(err, data) {
//             if (err) console.log(err);
//             console.log( lat, lng );
//             citystring = data.plus_code.results[0].formatted_address.split(",", 3);
//             if (parseInt(charAt(citystring[0])) === number) {
//                 city = citystring[1],
//                 citystring = citystring[2].split(" "),
//                 statecode = citystring[0];
//             }
//             city = citystring[0],
//             citystring = citystring[1].split(" "),
//             statecode = citystring[0];
//             console.log(city, statecode);
//         }, { key: "AIzaSyDqEyqqpMD23rErtt__7gxgYsuA6pfYdOE"})

// }
// // console.log(data);
// })
// .catch(err => console.log(err))