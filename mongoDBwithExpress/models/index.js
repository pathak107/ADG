const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ADGdb', {useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(!err)
    {
        console.log("Succesfuly connected to database");
    }
    else{
        console.log("Error in connecting to database");
    }
});
const Course = require('./courses.model');