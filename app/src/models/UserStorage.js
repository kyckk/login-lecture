"use strict";

    const fs = require("fs").promises;    

    class UserStorage {
        static #getUserInfo(data, id){
            const users =JSON.parse(data);
                const idx =users.id.indexOf(id);
                const usersKeys=Object.keys(users);//=>[id,psword]
                const userInfo =usersKeys.reduce((newUser,info)=>{
                    newUser[info] =users[info][idx];
                    return newUser;
                },{});
                return userInfo;
         }
     static getUsers(...fields){
        
       // const users =this.#users;
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
        //pending이랑 데이터를 전부읽어오지 못햇다라는뜻이다
        //const users= this.#users;
        return fs
        .readFile("./src/databases/users.json")
        .then((data)=>{
            
           return this.#getUserInfo(data,id);

        })//then은 위해당로직이 성공하면실행된다
        .catch((err)=>console.error(err));//위해당로직이 실패하면실행된다(err)=>console.error(err)=console.error

        
     
       
     }
     
     static save(userInfo){
       // const users =this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true};
     }
}
module.exports = UserStorage;