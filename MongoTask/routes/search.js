const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const user = require('../models/userModel.js');


router.get("/:name", (req,res)=>{
    user.findOne({userName: req.params.name},(err,user)=>{
        if(err) {
            res.send("Error occured ! Cannot find data");
            console.log(err);
            
        }
        else{
            console.log(user);
            if(user===null)
            {
                res.send("Cannot find data !");
            }
            res.render("userDetails.ejs",{userName:user.userName,UserEmail:user.userEmail,UserPhNumber:user.userPhNumber});
        }
    });
    
});



module.exports= router;


