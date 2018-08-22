import Vue from 'vue'
import Router from 'vue-router'
import PagesIndex from '@/pages/Index'
import PagesLogin from '@/pages/Login'
import PagesRegister from '@/pages/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: PagesIndex
    },
    {
      path: '/login',
      name: 'Login',
      component: PagesLogin
    },
    {
      path: '/register',
      name: 'Register',
      component: PagesRegister
    }
  ]
})
