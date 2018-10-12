const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/readlocal"
);

const usstates = [
    {
      usstate: "AL",
    },
    {
        usstate: "AK",
      },
      {
        usstate: "AZ",
      },
      {
        usstate: "AR",
      },
      {
        usstate: "CA",
      },
      {
        usstate: "CO",
      },
      {
        usstate: "CT",
      },
      {
        usstate: "DE",
      },
      {
        usstate: "FL",
      },
      {
        usstate: "GA",
      },
      {
        usstate: "HI",
      },
      {
        usstate: "ID",
      },
      {
        usstate: "IL",
      },
      {
        usstate: "IN",
      },
      {
        usstate: "IA",
      },
      {
        usstate: "KS",
      },
      {
        usstate: "KY",
      },
      {
        usstate: "LA",
      },
      {
        usstate: "ME",
      },
      {
        usstate: "MD",
      },
      {
        usstate: "MA",
      },
      {
        usstate: "MI",
      },
      {
        usstate: "MN",
      },
      {
        usstate: "MS",
      },
      {
        usstate: "MO",
      },
      {
        usstate: "MT",
      },
      {
        usstate: "NE",
      },
      {
        usstate: "NV",
      },
      {
        usstate: "NH",
      },
      {
        usstate: "NJ",
      },
      {
        usstate: "NM",
      },
      {
        usstate: "NY",
      },
      {
        usstate: "NC",
      },
      {
        usstate: "ND",
      },
      {
        usstate: "OH",
      },
      {
        usstate: "OK",
      },
      {
        usstate: "OR",
      },
      {
        usstate: "PA",
      },
      {
        usstate: "RI",
      },
      {
        usstate: "SC",
      },
      {
        usstate: "SD",
      },
      {
        usstate: "TN",
      },
      {
        usstate: "TX",
      },
      {
        usstate: "UT",
      },
      {
        usstate: "VT",
      },
      {
        usstate: "VA",
      },
      {
        usstate: "WA",
      },
      {
        usstate: "WV",
      },
      {
        usstate: "WI",
      },
      {
        usstate: "WY",
      }
];

db.UsState
  .remove({})
  .then(() => db.UsState.collection.insertMany(usstates))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });