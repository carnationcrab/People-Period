var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var checkInSchema = new Schema({
    date: String,
    period: Boolean,
    flow: String,
    mood: String,
    symptoms: Array,
    userName: String
});

var CheckIns = mongoose.model('checkInSchema', checkInSchema);

module.exports = CheckIns;
