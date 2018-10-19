import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Post from '@/pages/post/Post'

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
      name: 'post',
      component: Post
    }
  ]
})
