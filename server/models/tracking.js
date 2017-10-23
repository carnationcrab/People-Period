var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackingSchema = new Schema({
    username : String,
    allCycleLen : Array,
    allPeriodLen : Array,
    avgCycleLen : Number,
    avgPeriodLen : Number,
    numMonths : Number,
});

var tracks = mongoose.model('trackingSchema', trackingSchema);

module.exports = tracks;