const express = require("express");
const app = express();
require("./conn/conn");
const auth = require("./routes/auth");
app.use(express.json());


app.listen(1000,()=>{
    console.log("Server started");
});

app.use("/api/v1",auth);

