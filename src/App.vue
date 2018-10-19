<template>
  <div id="app">
    <div class="wrap">
      <home-header></home-header>
      <router-view/>
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
