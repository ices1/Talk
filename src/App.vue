<template>
  <div id="app">
    <div class="wrap">
      <home-header :isLogin='isLogin' @loginStatus='showLogin'></home-header>
      <transition name="slide-fade">
        <keep-alive>
          <router-view :key="$route.fullPath" :isLogin='isLogin' @loginStatus='showLogin' />
        </keep-alive>
      </transition>
      <home-footer></home-footer>
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/pages/components/HomeHeader'
import HomeFooter from '@/pages/components/HomeFooter'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeFooter
  },
  data () {
    return {
      isLogin: {}
    }
  },
  mounted () {
    axios.defaults.withCredentials = true
    this.getUserInfo()
  },
  methods: {
    showLogin (ops) {
      this.isLogin = ops
    },
    getUserInfo () {
      axios.get('/api/isLogin')
        .then((res) => {
          this.isLogin = res.data.user
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="stylus">
#app
  max-width: 20rem
  margin: 0 auto
  position: relative
  min-height: 90vh
  .wrap
    margin: 0 .2rem
.slide-fade-enter-active
  opacity: 0.1
  transition: all .4s ease
.slide-fade-leave-active
  // opacity: 0.8
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(.2rem)
  opacity: 0.1
</style>
