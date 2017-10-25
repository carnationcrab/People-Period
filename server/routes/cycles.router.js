var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Cycles = require('../models/cycles.js')
var bodyParser = require('body-parser');


router.use(bodyParser.json());

router.get('/', function (req, res) {
        console.log('In get route');
        Cycles.find({username: req.user.username}).then(function (data) {
            res.send(data);
        });
    });


router.post('/', function (req, res) {
    console.log('req.body', req.body);
    
    var cycleToAdd = new Cycles({
        cycleLen : req.body[0].cycleStat,
        periodLen : req.body[0].periodStat,
        username : req.user.username,
    })
    console.log('In checkIn Post with', cycleToAdd);

    cycleToAdd.save(function(error, response){
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