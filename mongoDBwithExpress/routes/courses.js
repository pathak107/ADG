const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const courseModel = mongoose.model("Course");

router.get("/add", (req,res)=>{
    res.render("addCourse.ejs");
});

router.post("/add", (req,res)=>{
    var Course = new courseModel();
    Course.courseName = req.body.courseName;
    Course.courseDuration= req.body.courseDuration;
    Course.courseFee= req.body.courseFee;
    Course.courseID=Math.ceil(Math.random()*10);

    Course.save((err,doc)=>{
        if(!err)
        {
            res.redirect("/course/list");
        }
        else
        {
            res.send("Error occured");
        }
    });
    
});


router.get("/list",(req,res)=>{
    // var Course = new courseModel();
    // Course.courseName = "NodeJs";
    // Course.courseID= "2";
    // Course.save();

    courseModel.find((err,docs)=>{
        if(!err)
        {
            // console.log(docs);
            res.render("index.ejs",{data : docs});
        }
    });
})

module.exports= router;


