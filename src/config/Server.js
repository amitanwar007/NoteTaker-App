const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

exports.Server = () => {
  const URI = process.env.URL;
  mongoose.connect(URI).then((e) => {
    console.log("Connected to DB");
  });
};
