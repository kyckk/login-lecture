"use strict";
const id =document.querySelector("#id"),
    name=document.querySelector("#name"),
    psword=document.querySelector("#psword"),
    confirmPsword=document.querySelector("#confirm-psword"),
    registerBtn =document.querySelector("#button");
    
    registerBtn.addEventListener("click",register);

    function register(){
      const req={
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword:confirmPsword.value,
      };
      console.log(req);
      // stringify =문자열로 만들어줌 
     fetch("/register",{
        method:"post",
        headers:{
            "content-Type":"application/json",
        },
        body: JSON.stringify(req),
     })
     .then((res) =>res.json())
     .then((res)=>{
        //.then((res)=> console.log(res));
        if(res.success){
          location.href ="/login";
        }else{
          alert(res.msg);
        }
    })
    .catch((err)=>{
      console.err("로그인 중에러 발생");
    });
  }