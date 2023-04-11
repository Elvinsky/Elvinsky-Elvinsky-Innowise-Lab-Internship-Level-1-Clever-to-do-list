import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import TestComponent from './components/TestComponent.vue'
const app = createApp(App);
app.use(store);
app.component('TestComponent',TestComponent)
createApp(App).use(store).mount('#app');
