import Vue from 'vue'
import Router from 'vue-router'
import TabHome from '@/screen/Tab';
import NewsDetail from '@/screen/NewsDetail';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TabHome',
      component: TabHome,
    },
    {
      path: '/newsdetail',
      name: 'NewsDetail',
      component: NewsDetail,
    }
  ]
})
