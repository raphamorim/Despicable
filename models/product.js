var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var product = new Schema({
        name:  String,
        price: Number,
        quantity: Number,
        category: Number,
        description: String
    },
    {
        versionKey: false
    });

module.exports = mongoose.model('Product', product);