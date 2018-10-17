<template>
  <div id="app">
    <home-header></home-header>
    <router-view/>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/pages/HomeHeader'
import HomeFooter from '@/pages/HomeFooter'
export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
