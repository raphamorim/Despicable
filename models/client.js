var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var client = new Schema({
        name:  String,
        age: Number,
        city: String,
        email: String
    },
    {
        versionKey: false
    });

module.exports = mongoose.model('Client', client);