const express = require('express');
const router = express.Router()
const countriesModel = require('../models/countries_model');


// define the home page route
router.get('/ping', (req,res)=>{
    res.status(200);
    res.json({message:'Welcome To Assignment'})
    
})

router.get('/ping', (req,res)=>{
    res.status(200);
    res.json({message:'Ping was successful'})
    
})

//define search route
router.post("/search", (req, res) => {
    let q = req.body.query;
    let query = {
      "$or": [{"title": {"$regex": q, "$options": "i"}} ]
    };
    let output = [];
  
    countriesModel.find(query).then( countries => {
        if(countries && countries.length && countries.length > 0) {
            res.status(200);
            res.json(countries)
        }else{
            res.status(200);
            res.json(output);
        }

    }).catch(err => {
      res.sendStatus(404);
      res.json({message:'No data with ',err})
    });
  
  })


module.exports = router