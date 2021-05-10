require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Work in Progress!");
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
