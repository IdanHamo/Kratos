const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const app = express();

app.use(morgan("dev"))
app.use(express.json())

app.use(
    cors({
      origin: ["http://localhost:3000"],
    })
  );

const PORT = 3025;
app.listen(PORT, () => console.log("listening to port", PORT));
