<template>
  <div class="header">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-show="!showItem"><router-link to="/login">Login</router-link></li>
      <li v-show="!showItem"><router-link to="/resigiter">Resigiter</router-link></li>
      <li v-show="showItem"><router-link to="/logout">Logout</router-link></li>
      <li v-show="showItem"><router-link to="/push">Push</router-link></li>
    </ul>
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
      let show = this.isLogin.id

      return show
      // let show = this.bus.user
      // return show === undefined
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
