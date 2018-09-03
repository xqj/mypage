import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import About from '@/pages/About'
import Work from '@/pages/Work'
import Index from '@/pages/Index'
import Contact from '@/pages/Contact'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Main,
      children: [
        {path: "index", component: Index},
        {path: "about", component: About},
        {path: "work", component: Work},
        {path: "contact", component: Contact},
      ]
    }
  ]
})
