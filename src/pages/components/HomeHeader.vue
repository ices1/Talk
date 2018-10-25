<template>
  <div class="header-nav">
    <ul class="nav-menu">
      <li><router-link to="/">Home</router-link></li>
      <li v-show="!showItem"><router-link to="/login">Login</router-link></li>
      <li v-show="!showItem"><router-link to="/register">Resigiter</router-link></li>
      <li v-show="showItem"><router-link to="/logout">Logout</router-link></li>
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
export default {
  name: 'HomeHeader',
  props: ['isLogin'],
  data () {
    return {}
  },
  computed: {
    showItem () {
      console.log(this.isLogin, this.isLogin.username)
      let show = this.isLogin.id

      return show
      // let show = this.bus.user
      // return show === undefined
    }
  }
}
</script>

<style lang="stylus" scoped>
  h1, h2
    font-weight: normal
  ul
    list-style-type: none
    padding: 0

  li
    display: inline-block
    margin: 0 10px

  a
    color: #9e9e9e
  .header-nav
    height 1rem
    line-height 1rem
    font-size .4rem
    .nav-menu
      display inline-block
    .nav-user
      float right
</style>
