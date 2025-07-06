const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const auth = require("./routes/auth");
app.use(express.json());
app.use(cors());

app.listen(1000,()=>{
    console.log("Server started");
});

app.use("/api/v1",auth);

