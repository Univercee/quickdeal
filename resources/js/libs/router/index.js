import { createRouter, createWebHashHistory } from 'vue-router';
import index from '../../views/index.vue';
import taskmanager from '../../views/taskmanager.vue';
import update from '../../views/update.vue';

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
  {
    path: '/update/:id',
    name: 'update',
    component: update
  },
  {
    path: '/:notFound',
    component: index
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router