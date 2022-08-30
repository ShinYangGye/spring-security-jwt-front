import { createRouter, createWebHistory } from 'vue-router'
import { useAccountStore } from '../stores/account'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/account/LoginView.vue'),
      meta: { noauthOnly: true }
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/account/JoinView.vue'),
      meta: { noauthOnly: true }
    },
    {
      path: '/boardlist',
      name: 'boardlist',
      component: () => import('../views/board/BoardListView.vue')
    },
    {
      path: '/boardwrite',
      name: 'boardwrite',
      component: () => import('../views/board/BoardWriteView.vue'),
      meta: { requiredAuth: true }
    },
    {
      path: '/boardread',
      name: 'boardread',
      component: () => import('../views/board/BoardReadView.vue'),
      meta: { requiredAuth: true }
    },
    
  ]
})

router.beforeEach((to, from, next) => {

  const account = useAccountStore();
  console.log("#### router account.isLogined : " + account.isLogined);

  if (to.matched.some((recode) => recode.meta.requiredAuth)) {

    if (account.isLogined) {
      next();
      return;
    }

    // alert('로그인이 필요합니다.');
    next({name: 'login'});

  } else {
    
    if (to.matched.some((recode) => recode.meta.noauthOnly)) {
      if (account.isLogined) {
        next({name: 'home'});
      }
    }
    next();
  }

})

export default router
