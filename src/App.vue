<template>
  <div id="app">
    <div class="wrap">
      <home-header :isLogin='isLogin' ></home-header>
      <keep-alive>
        <router-view  :isLogin='isLogin' @loginStatus='showLogin' />
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
  .wrap
    margin: 0 .2rem
</style>
