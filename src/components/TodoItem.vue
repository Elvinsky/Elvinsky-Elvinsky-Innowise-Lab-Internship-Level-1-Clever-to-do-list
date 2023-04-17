<template>
  <div class="todo-item">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <small>{{ id }}</small>
  </div>
</template>

<script>
export default {
    props:{
        id:{
            type:String,
            default:'Error'
        },
        title: {
            type:String,
            default:'Error'
        },
        content: {
            type:String,
            default:'Error'
        },
        done: {
            type: Boolean,
            default: false
        },
        date: {
            type: Number,
            default: 0,
        }
    },
    data(){
        return{}
    }
}
</script>
<style scoped>
.todo-item{
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    align-items: start;
    justify-content: start;
}

</style>