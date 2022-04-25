require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const react = require("react");

const { mainPage } = require("./db");

app.listen(process.env.PORT, ()=>{
    console.log("서버가 가동되었습니다");
})


mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    dbName: "photocalendar"
    })
    .then(()=> console.log("성공적으로 db에 연결됐습니다"))
    .catch((err)=> console.log(err));

var now = new Date();
app.get('/', (req, res)=>{ 
    res.send("hello");
});


app.post("/", async (req, res) =>{
    const mainP = new mainPage(req.body);
    try{
        await mainP.save();
        res.send(mainP);
    }catch(err){
        res.status(500).send(err);
    }
});


//Proxy, axios 공부해오기