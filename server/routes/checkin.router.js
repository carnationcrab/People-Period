var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var CheckIn = require('../models/checkin.js')
var bodyParser = require('body-parser');


router.use(bodyParser.json());

router.post('/', function (req, res) {
    
    var checkInToAdd = new CheckIn({
        date : req.body.dateStatus,
        period : req.body.periodStatus,
        flow : req.body.flowStatus,
        mood : req.body.moodStatus,
        symptoms : req.body.symptomStatus
    })
    console.log('In checkIn Post with', checkInToAdd)

    checkInToAdd.save(function(error, response){
        if(error) {
            console.log('error says ->', error);
            res.sendStatus(500);
        } else {
            console.log('hooray!')
            res.sendStatus(200);
        }
    });


});

module.exports = router;