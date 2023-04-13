<template>
  <RouterView @submit-creds="handleSubmit" />
</template>

<script>
export default {
    name: 'App',
    components: {
    },
    methods:{
        handleSubmit(data){
            console.log(data);
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
