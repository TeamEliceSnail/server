require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(process.env.PORT, ()=>{
    console.log("서버가 가동되었습니다");
})


mongoose.connect("mongodb://localhost:27017/[디비 이름]",
{useNewUrlParser: true, useInifiedTopology: true});