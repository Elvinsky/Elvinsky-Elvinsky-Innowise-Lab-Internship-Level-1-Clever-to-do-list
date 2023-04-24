import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import {createRouter, createWebHistory} from 'vue-router'
import RegistrationPage from './components/Auth/RegistrationPage.vue'
import LoginPage from './components/Auth/LoginPage.vue'
import HomePage from './components/HomePage.vue'
import TodoView from './components/Todos/TodoView.vue'
const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            name:'register',
            path:'/register',
            component:RegistrationPage,
            
        },
        {
            name:'login',
            path:'/login',
            component: LoginPage
        },
        {
            name:'home',
            path:'/home',
            component:HomePage,
            beforeEnter:function(to,from,next){
                const user = JSON.parse(localStorage.getItem('user'))
                if(user === null) next({name:'login'})
                next()
            }
        },
        {
            name:'todoDetails',
            path:'/todos/:id',
            props:true,
            component:TodoView
        }
    ],
    linkActiveClass:'active'
})
app.use(store);
app.use(router)
app.mount('#app');
