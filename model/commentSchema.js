const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comments = new Schema({
   comment:{
       type:String,
       required: true
   }
});

module.exports = mongoose.model('Comments', comments);
