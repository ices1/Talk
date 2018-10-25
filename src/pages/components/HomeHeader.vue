<template>
  <div class="header-nav">
    <ul class="nav-menu">
      <li><router-link to="/">Home</router-link></li>
      <li v-show="!showItem"><router-link to="/login">Login</router-link></li>
      <li v-show="!showItem"><router-link to="/register">Resigiter</router-link></li>
      <li v-show="showItem" @click="LogoutToHome"><router-link to="/logout">Logout</router-link></li>
      <li v-show="showItem"><router-link to="/push">Push</router-link></li>
    </ul>
    <div class="nav-user">
      <router-link v-if="showItem" :to='"/user/" + isLogin.id'>
        <span> {{isLogin.username}} </span>
        <img class="avatar  top-avatar" :src='"/api/avatars/" + isLogin.avatar' />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeHeader',
  props: ['isLogin'],
  data () {
    return {}
  },
  computed: {
    showItem () {
      return this.isLogin && this.isLogin.id
    }
  },
  methods: {
    LogoutToHome () {
      axios.get('/api/logout')
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.error(error)
        })
      this.$emit('loginStatus', {})
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  h1, h2
    font-weight normal
  ul
    list-style-type none
    padding 0
  li
    display inline-block
    margin 0 10px
  a
    color #9e9e9e
  .header-nav
    height .9rem
    line-height .9rem
    font-size .36rem
    background #333
    padding 0 .2rem
    margin 0 -.2rem
    // box-shadow 5px 3px 11px 0px
    box-shadow .1rem .05rem .05rem
    .nav-menu
      display inline-block
    .nav-user
      float right
</style>
