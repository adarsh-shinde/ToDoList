const mongoose = require('mongoose');

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
},{timestamps:true})

module.exports = new mongoose.model('todo',todoSchema);