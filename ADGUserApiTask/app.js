const express= require('express');
const app = express();
var port = process.env.PORT||3000

const userRoutes=require('./api/routes/user');
app.use('/users',userRoutes);


app.listen(port,()=>{
    console.log("Server started at port 3000");
});