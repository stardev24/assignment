const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const dataSeeder = require('./data/data_seeder');
const searchService = require('./services/search_service');
const db = require('./db/db_setup');
const port = process.env.port || 5000;

//database setup
db.setDatabase();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Seeding the data into database
dataSeeder.dataSeed()

app.use("/api",searchService)


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
  })