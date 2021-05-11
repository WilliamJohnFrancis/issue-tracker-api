require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./api/routes")(app);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
