<template>
  <section>
    <h2>Lgin</h2>
    <form @submit.prevent>
      <input
        id="email"
        v-model="email"
        placeholder="e-mail"
        name="email"
        type="text"
      >
      <input
        id="password"
        v-model="password"
        placeholder="password"
        name="password"
        type="password"
      >
      <div class="actions">
        <button @click="submit">
          Login
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
export default {
    emits:['on-login'],
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        submit(){
            this.$emit('on-login',this.email,this.password)
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