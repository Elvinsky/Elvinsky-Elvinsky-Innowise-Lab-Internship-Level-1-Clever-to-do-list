<template>
  <div class="todo-container">
    <h2>{{ doneCount }} todos done out of {{ todosCount }}</h2>
    <TodoItem
      v-for="todo in todos"
      :id="todo.id"
      :key="todo.id"
      :title="todo.name"
      :content="todo.content"
      :done="todo.done"
      :date="todo.date"
      @on-done="handleSetDone"
    />
  </div>
</template>

<script>
import { getItems, updateItem } from '@/scripts/dbScripts/crudApi';
import TodoItem from './TodoItem.vue';
import { getTodosByDay } from '@/scripts/dbScripts/queries';
export default {
    components: { TodoItem },
    // eslint-disable-next-line vue/require-prop-types
    props:['user','day','month'],
    data() {
        return {
            todos:[]
        };
    },
    computed:{
        doneCount(){
            return this.todos.filter(el=>el.done).length
        },
        todosCount(){
            return this.todos.length
        }
    },
    watch:{
        day(){
            getTodosByDay(new Date(`2023-${this.month}-${this.day}`),'/users/'+this.user.id+'/todos/').then(data=>this.todos=data)
        },
        month(){
            getTodosByDay(new Date(`2023-${this.month}-${this.day}`),'/users/'+this.user.id+'/todos/').then(data=>this.todos=data)
        }
    },
    created() {
        getTodosByDay(new Date(`2023-${this.month}-${this.day}`),'/users/'+this.user.id+'/todos/').then(data=>this.todos=data)
    },
    methods:{
        handleSetDone(dataobj){
            getItems(`/users/${this.user.id}/todos`).then(data=>{
                const todo = (data.find(el=>el.id===dataobj.id))
                const stateEl = this.todos.find(el=>el.id===dataobj.id)
                stateEl.done=!stateEl.done
                updateItem(`/users/${this.user.id}/todos`,todo.id,{...todo,done:!dataobj.done}).then(()=>this.triggerUpdate())
            })

        }, 
        triggerUpdate(){
            this.$emit('trigger-update')
        },
    }
}
</script>

<style scoped>
.todo-container{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 2em;
    border-width: 1px;
    border-color: black;
    border-radius: 5px;
    padding: 1em;
}
</style>