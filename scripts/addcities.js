var fs = require('fs'),
    byline = require('byline');
const mongoose = require("mongoose");
const db = require("../models");

mongoose.set('useFindAndModify', false);

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/readlocal",
    { useNewUrlParser: true }
);
db.City.collection.dropIndex("city_1", (data, err) => {
    if (err) console.log(err);
});


var stream = fs.createReadStream('cities2.csv', { encoding: 'utf8' });
stream = byline.createStream(stream);

stream.on('readable', function () {
    var line;
    while (null !== (line = stream.read())) {
        cities = line.split(",");
        statecode = cities[0].trim();
        console.log(cities, statecode);
        let cityobj = {
            city: cities[1],
            state: statecode
        };
        db.UsState.findOne({ usstate: statecode })
            .then(state => {
                if (state !== null) {
                    stateid = state._id;
                    console.log(state);
                    db.City.create({
                        city: cityobj.city,
                        state: stateid
                    }, function (err, city) {
                        console.log(city);
                        if (err) console.log(err);
                    })
                }
            })
            .catch(err => console.log(err))
    }
});

// stream.on('readable', function() {
//     var line;
//     while (null !== (line = stream.read())) {
//         cities = line.split(",");
//         statecode = cities[0].trim();
//         console.log(cities, statecode);
//         for (j = 1; j < cities.length; j++) {
//             let cityobj = {
//                 city: cities[j],
//                 state: statecode
//             };
//             db.UsState.findOne({ usstate: statecode })
//                 .then(state => {
//                     if (state !== null) {
//                         stateid = state._id;
//                         console.log(state);
//                         db.City.findOneAndUpdate({
//                             city: cityobj.city
//                         }, {
//                                 city: cityobj.city,
//                                 state: stateid
//                             }, { upsert: true, returnNewDocument: true },
//                             function (err, city) {
//                                 console.log(city);
//                                 if (err) console.log(err);
//                             })
//                             .catch(err => console.log(err));
//                     }
//                 })
//         }
//     }
//   });