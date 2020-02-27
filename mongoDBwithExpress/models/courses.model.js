const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: "Required"
    },
    courseID :{
        type: String
    },
    courseDuration :{
        type: String
    },
    courseFee:{
        type : String
    }

});


mongoose.model("Course", courseSchema);

// db.createCollection("Course")
// { "courseName" : "DAA" ,
//     "courseID" : "1",
//     "courseDuration" :"5",
//     "courseFee" : "5000"
// }

// db.Course.insert({
//     courseName : "DAA" ,
//     courseID : "1",
//     courseDuration:"5",
//     courseFee : "5000"
//  })