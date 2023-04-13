import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import {createRouter, createWebHistory} from 'vue-router'
import TestComponent from './components/TestComponent.vue'
import RegistrationPage from './components/RegistrationPage.vue'
import LoginPage from './components/LoginPage.vue'
const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/register',
            component:RegistrationPage,
            
        },
        {
            path:'/login',
            component: LoginPage
        }
    ],
    linkActiveClass:'active'
})
app.use(store);
app.use(router)
app.component('TestComponent',TestComponent)
app.mount('#app');
