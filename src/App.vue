<template>
  <RouterView
    :user="user"
  />
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            error:false
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
