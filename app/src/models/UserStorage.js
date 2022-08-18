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
     static #getUsers(data,isAll, fields){
        const users =JSON.parse(data);
        if(isAll) return users
        const newUsers =fields.reduce((newUsers,field)=>{
           
            if(users.hasOwnProperty(field)){
                newUsers[field] =users[field];
            }
           
            return newUsers;
        },{});
    
        return newUsers;
     }
     static getUsers(isAll,...fields){
        
       // const users =this.#users;
        //console.log(...fields);
        //console.log(users);
        return fs
        .readFile("./src/databases/users.json")
        .then((data)=>{
            
           return this.#getUsers(data,isAll,fields);

        })//then은 위해당로직이 성공하면실행된다
        .catch((err)=>console.error(err));

        
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
     
     static async save(userInfo){
       // const users =this.#users;
       const users =await this.getUsers(true);//모든데이터를 가지고오겠다->"id", "psword", "name"대신인자를 true로쓴다
       console.log(users);
       if(users.id.includes(userInfo.id)){
        throw "이미 존재하는 아이디입니다.";
       }
       users.id.push(userInfo.id);
       users.name.push(userInfo.name);
       users.psword.push(userInfo.psword);
       fs.writeFile("./src/databases/users.json", JSON.stringify(users));
       return{success: true};
     }
}
module.exports = UserStorage;