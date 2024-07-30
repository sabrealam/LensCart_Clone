const e = require('express');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },

    favorite:{
        type:Array,
        default:[],

    },
    cart : {
        type : Array,
        default : []
    }
});

module.exports = mongoose.model('User', userSchema);