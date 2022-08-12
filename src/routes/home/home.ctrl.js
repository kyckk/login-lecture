"use strict";
const home = (req,res) =>{
    res.render("home/index");
};

const login =(req,res)=> {
    res.render("home/login");
};

module.exports={
    home,
    login,
};

//객체는 key,value 값을 전달해주는데 key값만적르면 자동으로 key는 value가된다
// key:value
// {
//     hello:hello,
//     login:login,
// }
