const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/website" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("connection successful");
})
.catch(() => {
    console.log("connection failed");
})
