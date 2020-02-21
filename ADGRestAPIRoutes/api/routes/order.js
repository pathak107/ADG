const express= require('express');
const router = express.Router();

router.get('/',function(req,res)
{
    res.send("Orders were fetched");
});
router.post('/',function(req,res)
{
    res.send("Added orders");
});

router.get('/:id',function(req,res){
    const orderid=req.params.id;
    res.send("The order id is : "+ orderid);
});

router.delete('/:id',function(req,res){
    const orderid=req.params.id;
    res.send("DEleted the order : "+ orderid);
});

module.exports= router;