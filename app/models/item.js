const mongoose = require ('mongoose');


const itemSchema = mongoose.Schema({
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true},
    name : { type: String, required: true},
    color : { type: String, required: true},
    brand : { type: String, required: true},
    imageURL : {type: String, required: true},
    category : { type: String, required: true},
});

module.exports = mongoose.model('Item', itemSchema);