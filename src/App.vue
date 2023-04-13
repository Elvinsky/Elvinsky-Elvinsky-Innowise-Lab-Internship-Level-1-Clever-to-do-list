<template>
  <RouterView @submit-creds="handleSubmitReg" />
</template>

<script>
import {isUniqueUser} from './scripts/utils.js'
import { db } from './firebase';
export default {
    name: 'App',
    components: {
    },
    methods:{
        handleSubmitReg(data){
            if(isUniqueUser(db,data)){
                console.log('Is unique');
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
