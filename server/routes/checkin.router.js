var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var CheckIn = require('../models/checkin.js')
var bodyParser = require('body-parser');


router.use(bodyParser.json());

router.get('/', function (req, res) {
    console.log('In get route');
    CheckIn.find({username: req.user.username}).sort({date: -1}).then(function (data) {
        res.send(data);
    });
});

router.post('/', function (req, res) {
    
    var checkInToAdd = new CheckIn({
        date : req.body.dateStatus,
        period : req.body.periodStatus,
        flow : req.body.flowStatus,
        mood : req.body.moodStatus,
        firstDay : req.body.cycleStatus,
        symptoms : req.body.symptomStatus,
        username : req.user.username,
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