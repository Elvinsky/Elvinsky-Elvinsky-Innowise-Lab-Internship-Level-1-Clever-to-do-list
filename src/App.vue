<template>
  <RouterView
    :user="user"
    @submit-creds="handleSubmitReg"
    @on-login="handleLogin"
  />
</template>

<script>
import {isUniqueUser} from './scripts/utils.js'
import { setItem } from './scripts/dbScripts/crudApi';
import { loginQuery } from './scripts/dbScripts/queries';
export default {
    name: 'App',
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user'))
        }
    },
    methods:{
        handleSubmitReg(data){
            const dataToSet={
                username:data.name,
                email:data.email,
                password:data.password,
                id:data.id
            }
            isUniqueUser(data).then(data=>{
                if(data.length===0){
                    localStorage.setItem('user',JSON.stringify(dataToSet))
                    setItem('users',dataToSet).then(()=>this.$router.push('/home'))
                }
            })
        },
        handleLogin(email,password){
            loginQuery(email,password).then(data=>{
                if(data.length!==1){
                    return
                }
                else{
                    const dataToSet ={
                        username:data[0].username,
                        email:data[0].email,
                        password:data[0].password,
                        id:data[0].id
                    }
                    localStorage.setItem('user',JSON.stringify(dataToSet))
                    this.$router.push('/home')
                }
            })

        }
    }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border-spacing: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
