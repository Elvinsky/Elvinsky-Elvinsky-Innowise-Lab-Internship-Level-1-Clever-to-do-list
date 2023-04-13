<template>
  <section>
    <h2>Registration</h2>
    <form @submit.prevent>
      <input
        id="name"
        v-model="name"
        placeholder="username"
        name="name"
        type="text"
      >
      <input
        id="email"
        v-model="email"
        placeholder="e-mail"
        name="email"
        type="email"
      >
      <input
        id="password"
        v-model="password"
        placeholder="password"
        name="password"
        type="password"
      >
      <input
        id="repeatPassword"
        v-model="repeatPassword"
        placeholder="repeat password"
        name="repeatPassword"
        type="password"
      >
      <div class="actions">
        <button @click="submit">
          Submit
        </button>
        <RouterLink
          to="/login"
          class="link"
        >
          Already have an account?
        </RouterLink>
      </div>
    </form>
  </section>
</template>

<script>
import {isValidCreds} from '../scripts/utils.js'
export default {    
    emits:['submit-creds'],                
    data(){
        return{
            name:'',
            email:'',
            password:'',
            repeatPassword:''
        }
    },
    methods:{
        submit(){
            const data={
                name:this.name,
                email:this.email,
                password:this.password,
                repPassword:this.repeatPassword
            }
            if(isValidCreds(data)) this.$emit('submit-creds',data)
            else{
                this.name='',
                this.email='',
                this.password=''
                this.repeatPassword=''
                return
            }
        }
    }
}
</script>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
}
form{
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
}
form button{
  align-self: flex-start;
  justify-self: start;
  background-color: rgba(18, 219, 18, 0.4);
  padding: 0.4em 0.6em 0.4em 0.6em;
  border-radius: 5px;
  font-size: 0.9em;
}
input{
  padding: 0.4em;
  width: 200px;
}
.actions{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
}
.link{
  font-size: 0.7em;
}
</style>