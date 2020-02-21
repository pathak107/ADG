const express= require('express');
const app= express();

const productRoutes= require('./api/routes/products');
const order=require('./api/routes/order');
app.use('/products',productRoutes);
app.use('/order',order);

var port = process.env.PORT|| 3000
app.listen(port,function(){
    console.log("Server started at port "+ port);
})