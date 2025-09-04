const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const auth = require("./routes/auth");
const upload = require("./routes/upload");
const plates = require("./routes/plates");
const save = require("./routes/save");

app.use(express.json());
app.use(cors());

app.listen(1000,()=>{
    console.log("Server started");
});

app.use('/uploads', express.static('uploads'));
app.use("/api/v1",auth);
app.use("/api/v2",save);


