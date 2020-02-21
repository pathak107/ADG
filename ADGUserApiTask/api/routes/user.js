const express= require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send("Get request handled at user route");
});

router.get('/:userName',function(req,res){
    res.send("Hello "+ req.params.userName);
});

router.post('/:userName/:Age',function(req,res){
    var ageCriteria="";
    if(req.params.Age<12)
    {
        ageCriteria=" child";
    }
    else if(req.params.Age>=12 && req.params.Age<18)
    {
        ageCriteria=" teen";
    }
    else
    {
        ageCriteria=" adult";
    }
    res.write("HEllo "+ req.params.userName);
    res.write("You are a "+ ageCriteria);
    res.send();
});


module.exports= router;