const mongoose = require('mongoose');

// const bcrypt = require('bcrypt');
// const saltRounds = 10; //10자리 salt
// const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        maxlength: 30
    },
    image: String,
    email : {
        type: String,
        maxlength: 50
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}