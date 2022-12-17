const express = require("express");
const athletesRouter = require("./routes/athletes");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/api", athletesRouter);

app.get("/", (request, response) => {
  response.send("Welcome to my API! ");
});

app.listen(port, () => {
  console.log("Running on port ", port);
});
