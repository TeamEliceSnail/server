const express = require("express");
const router = express.Router();


router.get("/", "보안 미들웨어",
(req,res) =>{    
    res.render("인덱스페이지")      //html 파일은 어디에..?
});

router.get("/login",
    (req, res)=>{
    res.render("로그인 페이지");
})
router.post("/login", 
    (req, res)=>{
    res.render("home")
})

router.get("/home", "보안 미들웨어",
    (res, req) =>{
    res.render("home");
})


router.post("/input", 
    "보안 미들웨어",(res,req)=>{
    res.render("/detail");
})

router.get("/detail", "보안 미들웨어",(res,req)=>{
    res.render("/detail page");
})

router.post("/detail", "보안 미들웨어", (res,req)=>{
    res.render("/detail")
})

router.get("/profile", "보안 미들웨어", (res, req)=>{
    res.render("/profile")
})

router.post("/profile", "보안 미들웨어", (res, req)=>{
    res.render("/profile")
})
