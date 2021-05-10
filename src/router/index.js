import Vue from 'vue'
import VueRouter from 'vue-router'

// pages
import Home from '../pages/Home.vue'
import Error404 from '../pages/Error404.vue'


// слой
import AboutLayout from '../pages/OnePageLayout/OnePageLayout.vue'
// пути страницы-слоя AboutLayout
import About from '../pages/OnePageLayout/About.vue'
import AboutItem from '../pages/OnePageLayout/AboutItem.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about-page',
    name: 'AboutLayout',
    component: AboutLayout,
    // дети данного роута с началом page-one/ребенок
    children: [
      {
        // path оставляем пустой, по дефолту будет показываться он с ' '
        path: '',
        name: 'About',
        component: About
      },
      {
        path: ':id',
        name: 'AboutItem',
        component: AboutItem,
      },
      // редирект если написали путь http://localhost:8080/#/about-page/3/awdadwad после 3
      {
        path: '*/*',
        redirect:{name:'About'}

      },
    ]
  },

  {
    path: '*',
    name: 'Error404',
    component: Error404
  },

]

const router = new VueRouter({
  routes
})

export default router
