const connection = require('./models');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser');

const courseRoute= require('./routes/courses.js');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended : true
}));


app.use("/course",courseRoute);

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});