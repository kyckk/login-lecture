"use strict";
const UserStorage =require("./UserStorage");

class User{
    constructor(body){
        this.body  =body;

    }

   async login(){
        
        
        const client =this.body;
        const {id,psword}=await UserStorage.getUserInfo(client.id);//getUserInfo가 수행시간이느려서 (promise를반환할경우) await를붙여서 기다려준다
                                                                //따라서 login자체도 느려질수밖에없다그래서 컨트롤러로가서 await을 붙여준다
        if(id){
            if(id === client.id && psword === client.psword){
                return{ success:true};
            }
            return{success: false, msg:"비밀번호가틀렸습니다."};
        }
        return{success: false,msg:"존재하지 않는 아이디입니다."};
    }
    register(){
        const client= this.body;
        const response= UserStorage.save(client);
        return response;
    }
}

module.exports =User;