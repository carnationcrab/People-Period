var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cycleSchema = new Schema({
    username: String,
    periodLen : Number,
    cycleLen : Number,
});

var Cycles = mongoose.model('cycleSchema', cycleSchema);

module.exports = Cycles;
