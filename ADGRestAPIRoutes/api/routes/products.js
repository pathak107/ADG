const express= require('express');
const router = express.Router();

router.get('/',function(req,res)
{
    res.send("get request handled");
});
router.post('/',function(req,res)
{
    res.send("post request handles");
});

router.get('/:id',function(req,res){
    const productsid=req.params.id;
    res.send("The product id is : "+ productsid);
});

router.patch('/:id',function(req,res){
    const productsid=req.params.id;
    res.send("Updated the product : "+ productsid);
});

router.delete('/:id',function(req,res){
    const productsid=req.params.id;
    res.send("DEleted the product : "+ productsid);
});

module.exports= router;