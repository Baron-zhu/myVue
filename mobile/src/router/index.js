import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '@/screen/Home';
import MessageScreen from '@/screen/Message';
import ClubScreen from '@/screen/Club';
import MineScreen from '@/screen/Mine';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeScreen,
    },
    {
      path: '/message',
      name: 'Message',
      component: MessageScreen
    },
    {
      path: '/club',
      name: 'Club',
      component: ClubScreen
    },
    {
      path: '/mine',
      name: 'Mine',
      component: MineScreen
    }
  ]
})
