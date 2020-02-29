const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userID:{
        type: String,
        required:"Required"
    },
    userName: {
        type: String,
    
    },
    userEmail :{
        type: String
    },
    userPhNumber :{
        type: String
    }

});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;

