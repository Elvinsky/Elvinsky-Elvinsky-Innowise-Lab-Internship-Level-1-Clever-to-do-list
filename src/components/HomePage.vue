<template>
  <section>
    <div>{{ user.username }}</div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            user:{}
        }
    },
    created(){
        this.user=JSON.parse(localStorage.getItem('user'))
    }
}
</script>

<style scoped>

</style>