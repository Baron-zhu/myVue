import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index';
import News from '@/pages/News';
import About from '@/pages/About';
import Detail from "@/pages/Detail";
import List from "@/pages/List";
import Goods from "@/pages/Goods";
import GoodsIndex from "@/pages/GoodsIndex";
import GoodsType from "@/pages/GoodsType";
import GoodsSearch from "@/pages/GoodsSearch";
import Order from "@/pages/Order";
import Car from "@/pages/Car";
export default new Router({
  // mode: "history",
  routes:[
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/news',
      redirect: "/news/index.html", // 重定向
      name: 'News',
      component: News,
      children: [
        {
          path: "/news/index.html",
          alias: "/news", // 别名
          name: "List",
          component: List
        },
        {
          path: "/news/:id",
          name: "Detail",
          component: Detail
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/goods',
      redirect: '/goods/index.html',
      name: 'Goods',
      component: Goods,
      children: [
        {
          path: "/goods/index.html",
          alias: "/goods",
          name: "GoodsIndex",
          component: GoodsIndex
        },
        {
          path: "/goods/type",
          name: "GoodsType",
          component: GoodsType
        },
        {
          path: "/goods/search",
          name: "GoodsSearch",
          component: GoodsSearch
        }
      ]
    },
    {
      path: "/order",
      name: "Order",
      component: Order
    },
    {
      path: "/car",
      name: "Car",
      component: Car
    }
  ]
});


// export default new Router({
//   mode: "history",
//   routes: [
//     {
//       path: '/',
//       name: 'Index',
//       component: Index
//     },
//     {
//       path: '/about',
//       name: 'About',
//       component: About
//     }
//   ]
// })
