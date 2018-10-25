<template>
  <div id="app">
    <div class="wrap">
      <home-header :isLogin='isLogin' ></home-header>
      <keep-alive include="Home">
        <transition name="slide-fade">
          <router-view :key="$route.fullPath" :isLogin='isLogin' @loginStatus='showLogin' />
        </transition>
      </keep-alive>
      <home-footer></home-footer>
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/pages/components/HomeHeader'
import HomeFooter from '@/pages/components/HomeFooter'
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
  methods: {
    showLogin (ops) {
      this.isLogin = ops
      console.log(this.isLogin)
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
  transition: all .1s ease
.slide-fade-leave-active
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(.2rem)
  opacity: 0.8
</style>
