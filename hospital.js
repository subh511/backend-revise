var users = [
  {
    name: "jhon",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

const express = require("express");
const app = express();

app.use(express.json());

/**
 * GET Method: is asking something to the server;
 * POST Method: create something on internet;
 * PUT Method: put is used to edit some data/or put something in backend;
 * DELETE Method: delete is used to delete something from backend
 */

/**
 * Status Code;
 * 200 to 205 - everything went fine;
 * 404 - route doesn't exist;
 * 500 -
 */

app.get("/", function (req, res) {
  const jhonKidneys = users[0].kidneys;

  const numberOfKidneys = jhonKidneys.length;

  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < jhonKidneys.length; i++) {
    if (jhonKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  const newKidneys = [];

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "done!",
  });
});

app.listen(3000);
