<template>
  <div
    :class="done?'done todo-item':'todo-item'"
    @click.stop="handleViewDetails"
  >
    <input
      id="done"
      type="checkbox"
      name="done"
      :checked="done"
      @click.stop="onDone"
    >
    <h2>{{ title }}</h2>
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
    emits:['on-done'],
    methods:{
        onDone(){
            this.$emit('on-done',{id:this.id,done:this.done})
        },
        handleViewDetails(){
            this.$router.push(`/todos/${this.id}`)
        }
    }
}
</script>
<style scoped>
.todo-item{
    margin-left: 2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.3em;
    padding: 0.6em;
    background-color: rgba(255, 166, 0, 0.386);
    border-radius: 8px;
}
input{
    transform: scale(1.4);
}
.done{
    background-color: rgba(128, 128, 128, 0.574);
}

</style>