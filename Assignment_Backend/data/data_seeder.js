const countriesModel = require('../models/countries_model');
const countriesList = require('./countires');



module.exports.dataSeed = () => {

    //inserting the data
    countriesModel.insertMany(countriesList).then((data)=>{
        console.log("Data seeding into db was done successfully and record count is ",data.length)
    }).catch((err)=>{
        console.log("Error in data seeding into db  with error ",err)
    })
}

