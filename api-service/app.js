const express = require("express");
const cors = require("cors");
const athletesRouter = require("./routes/athletes");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:8000",
  })
);

app.use("/api", athletesRouter);

app.listen(port, () => {
  console.log("Running on port ", port);
});
