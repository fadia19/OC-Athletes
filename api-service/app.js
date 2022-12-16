var express = require("express");

var app = express();

var port = process.env.PORT || 8080;

app.get("/", (request, response) => {
  response.send("Welcome to my API! ");
});

app.listen(port, () => {
  console.log("Running on port ", port);
});
