import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Post from '@/pages/Post'
import User from '@/pages/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User
    }
  ]
})
