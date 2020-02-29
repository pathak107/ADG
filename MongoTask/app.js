const connection = require('./models/connection');
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const searchRoute = require('./routes/search.js');
const user = require('./models/userModel.js');

// db.createCollection("Users");

app.use('/search',searchRoute);

app.use(bodyParser.urlencoded({
    extended : true
}));

app.set('view engine', 'ejs');


//Home Route
app.get("/",(req,res)=>{
    res.render("index.ejs");
    
});

// db.createCollection("Users")
// { "userName" : "Shubham" ,
//     "userID" : "2",
//     "userEmail" :"asd@gmail.com",
//     "userPhNumber" : "813018029"
// }

app.post("/",(req,res)=>{
    var Users = new user();
    Users.userName =  req.body.Name;
    Users.userEmail= req.body.email;
    Users.userPhNumber = req.body.phNumber;
    Users.userID = Math.ceil(Math.random()*10).toString;

    Users.save((err,doc)=>{
        if(!err)
        {
            console.log("Succefully saved Data");
            res.redirect("/");
        }
        else
        {
            res.send("Error Occured...Some fields are not added properly");
            console.log(err)
        }
    });
});




var port= 3000||process.env.PORT;
app.listen(port,()=>{
    console.log("Server started succesfuly at port "+ port);
});