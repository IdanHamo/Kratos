const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(morgan("dev"));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

mongoose
  .connect("mongodb://localhost/KratosProject")
  .then(() => console.log("successful connection"))
  .catch(() => console.log("connection failed"));

const PORT = 3105;
app.listen(PORT, () => console.log("listening to port", PORT));
