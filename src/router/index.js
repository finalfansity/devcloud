import Vue from "vue";
import VueRouter from "vue-router";
import {beforeEach, afterEach} from "@/router/permission";
import Layout from '../layout'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
      }
    ]
  },
  {
    path: '/login',
    name: "Login",
    component: () => import('../views/keyauth/login/new'),
  },
  {
    path: '/cmdb',
    component: Layout,
    redirect: '/cmdb/host',
    children: [
      {
        path: 'host',
        component: () => import('@/views/cmdb/host/index'),
        name: 'CmdbHost',
      }
    ]
  },
  {
    path: '/cmdb',
    component: Layout,
    redirect: '/cmdb/search',
    children: [
      {
        path: 'search',
        component: () => import('@/views/cmdb/search/index'),
        name: 'ResourceSearch',
      },
      {
        path: 'host',
        component: () => import('@/views/cmdb/host/index'),
        name: 'ResourceHost',
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/common/error-page/404'),
    hidden: true
  },
  // 如果前面所有路径都没有匹配到页面 就跳转到404页面
  { path: '*', redirect: '/404', hidden: true }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach(beforeEach)
router.afterEach(afterEach)
export default router;
