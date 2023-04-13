<template>
  <RouterView @submit-creds="handleSubmitReg" />
</template>

<script>
import {isUniqueUser} from './scripts/utils.js'
import { db } from './firebase';
import { setItem } from './scripts/dbScripts/crudApi';
export default {
    name: 'App',
    components: {
    },
    methods:{
        async handleSubmitReg(data){
            const dataToSet={
                username:data.name,
                email:data.email,
                password:data.password
            }
            if( (await isUniqueUser(db,data)).length===0){
                localStorage.setItem('user',JSON.stringify(dataToSet))
                await setItem(db,'users',dataToSet)
            }
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
