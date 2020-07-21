import Vue from 'vue'
import VueRouter from 'vue-router'
import ErrorView from '@/views/ErrorView'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import(
      /* webpackChunkName: "markdown" */
      /* webpackMode: "lazy-once" */
      '@/views/MarkdownView'
    ),
    props: {path: "README"},
  },
  {
    path: '/posts',
    name: 'Posts',
    component: ()=> import(
      /* webpackChunkName: "posts" */
      /* webpackMode: "lazy-once" */
      '@/views/PostsView'
    )
  },
  {path: "*", component: ErrorView}

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
