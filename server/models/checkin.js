var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var checkInSchema = new Schema({
    username: String,
    date: String,
    period: Boolean,
    flow: String,
    mood: String,
    symptoms: Array,
    firstDay: Boolean,
});

var CheckIns = mongoose.model('checkInSchema', checkInSchema);

module.exports = CheckIns;
