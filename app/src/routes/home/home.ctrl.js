"use strict";


const output ={
     home : (req,res) =>{
        res.render("home/index");
    },
    login :(req,res)=> {
        res.render("home/login");
    },

};

const users ={
    id:["woorimIT","나개발","강팀장"],
    psword:["1234","1234","123456"],
};

const process ={
    login: (req,res)=>{
            const id =req.body.id,
                psword=req.body.psword;
        if(users.id.includes(id)){
           const idx =users.id.indexOf(id);
           if(users.psword[idx]=== psword){
            return res.json({
                success: true,
            });
           }
        }
        return res.json({
           success:false, 
           msg:"로그인에 실패하셨습니다.",
        });
    },

};




module.exports={
    output,
    process,
};

//객체는 key,value 값을 전달해주는데 key값만적르면 자동으로 key는 value가된다
// key:value
// {
//     hello:hello,
//     login:login,
// }
