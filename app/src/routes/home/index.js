"use strict";

const express = require("express");
const router =express.Router();

const ctrl =require("./home.ctrl")

router.get("/", ctrl.home);
//router= 단순히 클라이언트가 도메인으로 요청이 들어왓을때 연결해주는애
//구현부가 컨트롤러역할을 수행해준다 
router.get("/login", ctrl.login);

module.exports = router;