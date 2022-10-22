const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username']
    },
    userImage: {
        type: String,
        required: false
    },
    phoneNo: {
        type: String,
        required: [true, 'Please add a Phone number']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add a valid email'
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
  
},
    {
        timestamps: true,
    })
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;