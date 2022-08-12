"use strict";
const express= require("express");
const app =express();


//라우팅
const home =require("./routes/home");//index.js파일을require로 불러온다

//앱세팅
app.set("views","./views");
app.set("view engine","ejs");


app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드 .

module.exports =app;

package.json


//----------------------------------------------------
// const http = require("http");
// const app = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
//    if(req.url === "/"){
//     res.end("여기는 로그인 화면입니다");
//    }else if(req.url === "/login"){
//     res,end("여기는 로그인 화면입나디.");
//    }
// });

// app.listen(3001, ()=>{
//     console.log("http로 가동된 서버입니다. ");
// })

