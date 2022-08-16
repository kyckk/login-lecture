"use strict";

    class UserStorage {
      static #users ={//내부데이터는 변수명으로 바로호출되면안된다=>은닉화를 '#변수명'
            id:["woorimIT","나개발","강팀장"],
            psword:["1234","1234","123456"],
            name:["우리밋", "나개발","김팀장"],
        };
     static getUsers(...fields){
        
        const users =this.#users;
        //console.log(...fields);
        //console.log(users);
        const newUsers =fields.reduce((newUsers,field)=>{
           
            if(users.hasOwnProperty(field)){
                newUsers[field] =users[field];
            }
           
            return newUsers;
        },{});
    
        return newUsers;
     }

     static getUserInfo(id){
        const users= this.#users;
        const idx =users.id.indexOf(id);
        const usersKeys=Object.keys(users);//=>[id,psword]
        const userInfo =usersKeys.reduce((newUser,info)=>{
            newUser[info] =users[info][idx];
            return newUser;
        },{});
        return userInfo;
     }
}
module.exports = UserStorage;