import { createStore } from 'vuex';
import { getTodosByDay } from '@/scripts/dbScripts/queries';
import { getItems,setItem,updateItem,deleteItem } from '@/scripts/dbScripts/crudApi';
export default createStore({
    state: {
        todos: [],
        user: JSON.parse(localStorage.getItem('user')),
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getAllTodos(state) {
            return state.todos;
        },
        getTodoById: (state) => (id) => {
            return state.todos.find((todo) => todo.id === id);
        },
        getTodosByDay: (state) => (day) => {
            return state.todos.filter((todo) => todo.date === day);
        },
        getDoneTodos(state) {
            return state.todos.filter((todo) => todo.done);
        },
        getDoneTodosCount(state, getters) {
            return getters.getDoneTodos.length;
        },
    },
    mutations: {
        SET_TODOS(state, todos) {
            state.todos = todos;
        },
        ADD_TODO(state, todo) {
            state.todos.push(todo);
        },
        UPDATE_TODO(state, updatedTodo) {
            const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
            state.todos.splice(index, 1, updatedTodo);
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter((todo) => todo.id !== todoId);
        },
    },
    actions: {
        async fetchTodos({ commit, state }) {
            const todos = await getItems(`/users/${state.user.id}/todos`);
            commit('SET_TODOS', todos);
        },
        async addNewTodo({ commit, state }, todo) {
            const newTodo = await setItem(`/users/${state.user.id}/todos`, todo);
            commit('ADD_TODO', newTodo);
        },
        async updateExistingTodo({ commit, state }, todo) {
            const updatedTodo = await updateItem(`/users/${state.user.id}/todos`,todo.id, todo);
            commit('UPDATE_TODO', updatedTodo);
        },
        async deleteExistingTodo({ commit, state }, todoId) {
            await deleteItem(`/users/${state.user.id}/todos`,todoId);
            commit('DELETE_TODO', todoId);
        },
        async fetchTodosByDay({ commit, state }, date) {
            const todos = await getTodosByDay(date,`/users/${state.user.id}/todos`);
            commit('SET_TODOS', todos);
        },
    },
    modules: {},
});

