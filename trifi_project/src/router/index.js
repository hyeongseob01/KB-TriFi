import AppLayout from '../components/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/LoginPage.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_UR),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/RegisterPage.vue'),
    },
    {
      path: '/stat',
      name: 'stat',
      component: () => import('../pages/StatsPage.vue'),
    },
    {
      path: '/home',
      name: 'calender',
      component: () => import('../pages/CalendarPage.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../pages/ListPage.vue'),
    },
    {
      path: '/goal',
      name: 'goal',
      component: () => import('../pages/GoalPage.vue'),
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('../pages/MypagePage.vue'),
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('../pages/MypagePage.vue'),
    },
    {
      path: '/registeredit',
      name: 'RegisterEdit',
      component: () => import('../pages/Register_edit.vue'),
    },
  ],
});
export default router;
