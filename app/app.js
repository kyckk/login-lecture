"use strict";
const express= require("express");
const bodyParser =require("body-parser");
const app =express();


//라우팅
const home =require("./src/routes/home");//index.js파일을require로 불러온다

//앱세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));//${__dirname}현재 위치(app.js)를반환해주고 express.static=정적경로로 추가해준다
app.use(bodyParser.json());
//url을 통해 전달되는 데이터를 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드 .

module.exports =app;

//package.json


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

