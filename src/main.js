import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import {createRouter, createWebHistory} from 'vue-router'
import TestComponent from './components/TestComponent.vue'
import RegistrationPage from './components/RegistrationPage.vue'
import LoginPage from './components/LoginPage.vue'
import HomePage from './components/HomePage.vue'
const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/register'
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
        }
    ],
    linkActiveClass:'active'
})
app.use(store);
app.use(router)
app.component('TestComponent',TestComponent)
app.mount('#app');
