const mongoose = require("mongoose");

// mongoDb connection URL
const mongoURL = "mongodb://localhost:27017/learnMongo";

// Setup mongoDB connection
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database is now Connected!!");
});
db.on("error", (err) => {
  console.log("Some Error occured on Mongodb->", err);
});
db.on("disconnected", () => {
  console.log("Mongodb is disconnected!!");
});

module.exports = db;
