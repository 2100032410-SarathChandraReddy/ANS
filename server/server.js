const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const dotenv=require("dotenv");
const routesurls = require("./routes/routes");
const cors = require("cors");

// dotenv.config()

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.dr8fhmz.mongodb.net/AMS?retryWrites=true&w=majority",
  () => {
    console.log("Database Connected!!");
  }
);

app.use(express.json());
app.use(cors());
app.use("/api", routesurls);
app.listen(6969, () => {
  console.log("Server Started on 6969");
});
