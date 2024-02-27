import './libs/axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './libs/router';
import store from './libs/store';
import {createApp} from 'vue';
import App from './App.vue';


import navbar from './components/navbar.vue';
import createForm from './components/create-form.vue';
import deleteForm from './components/delete-form.vue';
import taskList from './components/task-list.vue';

const app = createApp(App);
app.component('navbar', navbar);
app.component('create-form', createForm);
app.component('delete-form', deleteForm);
app.component('task-list', taskList);
app.use(router).use(store);

app.mount("#app");