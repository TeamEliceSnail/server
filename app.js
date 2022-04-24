require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const react = require("react");

app.listen(process.env.PORT, ()=>{
    console.log("서버가 가동되었습니다");
})


mongoose.connect("mongodb://localhost:27017/[디비 이름]",
    {useNewUrlParser: true, useInifiedTopology: true});

mongoose.connection.on('error', console.error.bind(console, "에러가 발생했습니다"));


app.get('/', (req, res)=>{
    
});


// Proxy, axios 공부해오기