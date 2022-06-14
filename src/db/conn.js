const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/platformUser", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("Connection Succesful");
}).catch((e)=>{
    console.log(e);
})