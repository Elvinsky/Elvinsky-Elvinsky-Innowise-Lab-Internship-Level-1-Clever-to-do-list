<template>
  <div class="todo-container">
    <TodoItem
      v-for="todo in todos"
      :id="todo.id"
      :key="todo.id"
      :title="todo.name"
      :content="todo.content"
      :done="todo.done"
      :date="todo.date"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    components: { TodoItem },
    // eslint-disable-next-line vue/require-prop-types
    props:['user','todos'],
    data() {
        return {
            
        };
    },
        
    methods:{
        
    }
}
</script>

<style scoped>
.todo-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3em;
    border-width: 1px;
    border-color: black;
    border-radius: 5px;
    padding: 1em;
}
</style>