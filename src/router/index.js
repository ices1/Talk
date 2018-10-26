import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Post from '@/pages/Post'
import User from '@/pages/User'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Forgot from '@/pages/Forgot'
import ResetPw from '@/pages/ResetPw'
import Push from '@/pages/Push'

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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/reset-password/:id',
      name: 'ResetPW',
      component: ResetPw
    },
    {
      path: '/push',
      name: 'Push',
      component: Push
    }
  ]
})
