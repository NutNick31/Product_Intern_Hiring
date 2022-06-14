const mongoose = require("mongoose");
const url = 'mongodb+srv://rajesh:rajesh123@cluster0.1t4za.mongodb.net/prodintern?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("Connection Succesful");
}).catch((e)=>{
    console.log("Not connected.");
})