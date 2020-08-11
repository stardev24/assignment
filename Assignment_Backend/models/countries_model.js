const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let countries = new Schema({
    title: {
    type: String
  }
});

module.exports = mongoose.model("countries", countries);