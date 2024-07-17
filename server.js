const express = require("express");
const Person = require("./models/person");
const db = require("./db");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/getPerson", async (req, res) => {
  try {
    const allTuples = await Person.find();
    res.status(200).json({ data: allTuples });
  } catch (error) {
    console.log("Error on server side", error);
  }
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log("Data has been saved sucessfully");
    res.status(200).json("Data has been saved sucessfully");
  } catch (err) {
    console.log("Some Error occured on Saving the data!!", err.errmsg);
    res.status(500).json(err.errmsg);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
