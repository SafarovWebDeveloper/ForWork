const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const example = new Schema({
    full_name: {
        type: String,
        default: 'no name user',
        required: true
    },
    email: {
        type: String,
    },
    password:{
        type: String,
    },
    dataTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Members', example);