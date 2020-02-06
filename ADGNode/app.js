const logger=require('./logger.js');
console.log(logger);

logger.log("yo SHubham");

function sayHello()
{
    console.log("Hello SHubham");
}

// sayHello();

// setTimeout(function printName(){
//     console.log("Shubham");
// },300);

// console.log(module);

// setTimeout(function(){console.log}("Shubham"),300);

// const path = require('path');
// var pathObj =  path.parse(__filename);
// console.log(pathObj);

// const os=require('os');
// var totalMemory= os.totalmem();
// var freeMemory= os.freemem();

// console.log('Total memory :' + totalMemory);
// console.log(`free memory : ${freeMemory}`);

// const fs=require('fs');
// const files= fs.readdirSync('./');
// console.log(files);

// fs.readdir('./',function(err,files){
//     if(err) console.log('Error: ', err);
//     else console.log('Result',files);
// })


// const EventEmitter= require('events');
// const Logger= require('./logger');
// const logger= new Logger();
// // Register a listener
// logger.on('messageLogged',(arg)=>{
//     console.log("Ye function messageLogged event to listen kr rha hai",arg);
// });

// logger.log('message');//Since this function is being called it will
// //go into the log function and will inturn raise the emitter which inturn
// //will call the event listener
// // if you omit this function event listener wont be called



// emitter.on('Logging',(arg)=>{
//     console.log("caught the Logging event occuring and event has a message", arg);
// })
// emitter.emit('Logging',{message : "Your message has been logged"});


const http=require('http');
const server= http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Hello World");
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// server.on('connection',(socket)=>{
//     console.log("New connection");
// });
server.listen(3000);
console.log("Listeneing at port 3000");
