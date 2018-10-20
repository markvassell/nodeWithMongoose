const Scholar = require('../models/users');
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/addScholar', (req, res, next) => {
  let newScholar = new Scholar({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    class: req.body.class,
    age: req.body.age
  });
  console.log(req.body);


  Scholar.addScholar(newScholar, (err, scholar) =>{
    console.log("newScholar");

    if (err){
      res.json({success: false, msg: "Failed to register the user"});
      console.log("Scholar Couldn't be added" + err);
    } else {
      res.json({success: true, msg: "User Registered"});
      console.log("Scholar Successfully added");
    }
  });


});


module.exports = router;
