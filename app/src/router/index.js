import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'top' }
  },
  {
    path: '/top/:page?',
    params: {
      page: 1
    },
    name: 'top',
    component: Home
  },
  {
    path: '/new',
    name: 'new',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
