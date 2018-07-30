const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://mskcPrototype:qwerty1@ds259001.mlab.com:59001/patientsdata', ['patientslogs']);


router.get('/getAllPatients',function(req,res,next){
   db.patientslogs.find(function(err,userlogs){
       if(err){
           res.send(err)
       }
       res.json(userlogs);
   });
});



router.post('/addUser', function (req, res) {
    console.log('adding user to db');
    var newPatient = req.body;
    db.patientslogs.save(newPatient,function(err,useraddlogs){
        if(err){
            res.send(err);
        }
        res.json(useraddlogs);

    });

});


router.get('/getSpecifiedRecords',function(req,res,next) {

    db.patientslogs.find({ 
          
         "age": {"$gt":"33"}    
    
         }
    ,function(err,specifiedlogs){
        if (err) {
            console.log('erreor getting specified posts');
        } else {
            res.json(specifiedlogs);
        }

    })
    
});


module.exports = router;

