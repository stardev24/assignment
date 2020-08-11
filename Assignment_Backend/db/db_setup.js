
const mongoose = require("mongoose")

const dbStr = "mongodb://mydb:27017/assignment";

module.exports.setDatabase = () =>{
    mongoose.connect(dbStr,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        }).then(()=>{
        console.log("DB successfull connected")
    }).catch((error)=>{
        console.log("Error in DB connection ",error);
    })
}

