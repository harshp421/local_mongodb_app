const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/harshdynamic").then(()=>{
 console.log("connect success full");
}).catch((error)=>{
 console.log(error);
})

 