import { createStore } from 'vuex';
import { getTodosByDay } from '@/scripts/dbScripts/queries';
export default createStore({
    state: {
        todos: [],
        user: JSON.parse(localStorage.getItem('user')),
    },
    getters: {
        getUSer(state){
            return state.user
        },
        doneTodos(state){
            return state.todos.filter(todo=>todo.done)
        },
        doneTodosCount(state,getter){
            return getter.doneTodos.length
        },
        getTodoById:(state)=>(id)=>{
            return state.todos.find(todo=>todo.id===id)
        }
    },
    mutations: {},
    actions: {
        fetchTodosByDay(state,month,day){
            getTodosByDay(new Date('2023-'+month+'-'+day),'/users/'+state.user.id+'/todos/').then(data=>state.todos=data)
        }
    },
    modules: {},
});
