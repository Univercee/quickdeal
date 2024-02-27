import { createRouter, createWebHashHistory } from 'vue-router';
import index from '../../views/index.vue';
import taskmanager from '../../views/taskmanager.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/taskmanager',
    name: 'taskmanager',
    component: taskmanager
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router