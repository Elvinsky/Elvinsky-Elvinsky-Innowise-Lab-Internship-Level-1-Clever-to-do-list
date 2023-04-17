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
import { getTodosByDay } from '@/scripts/dbScripts/queries';
export default {
    components: { TodoItem },
    props:{
        // eslint-disable-next-line vue/require-default-prop
        user:Object
    },
    data() {
        return {
            todos:{}
        };
    },
    created(){
        const userId = JSON.parse(localStorage.getItem('user')).id
        getTodosByDay(new Date('2023-04-14'),'/users/'+userId+'/todos/').then(data=>this.todos=data)
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