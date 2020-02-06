const express= require('express');
const app = express();

app.get('/',function(req,res){
    res.send("<h1>ADG server is running</h1>");
});

app.get('/name',function(req,res){
    res.write("<body style='background-color:#5F5F5F'>");
    res.write("<h1> Shubham Pathak</h1>");
    res.write("<p style = 'color:white'>Backend And Flutter Developer</p>");
    res.write("</body");
    res.send();
});

var names=["Shubham","Sidhart","Madhur","Sott Bot","Shambhavi"];

app.get('/team',function(req,res){
    res.send(names);
});


var port=3000||process.env.PORT;
app.listen(port,function(){
    console.log(`Server listening at port : ${port}`);
});