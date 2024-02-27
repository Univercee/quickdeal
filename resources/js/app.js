import router from './libs/router';
import './libs/axios';
import {createApp} from 'vue';
import App from './App.vue';
import navbar from './components/navbar.vue';

const app = createApp(App);
app.component('navbar', navbar);
app.use(router);


app.mount("#app");