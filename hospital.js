var user = {
  name: "jhon",
  kidneys: [
    {
      healthy: false,
    },
  ],
};

const express = require("express");
const app = express();

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

app.get("/", function (req, res) {});

app.post("/", function (req, res) {});

app.put("/", function (req, res) {});

app.delete("/", function (req, res) {});

app.listen(3000);
