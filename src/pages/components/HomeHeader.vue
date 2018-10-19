<template>
  <div class="header">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">Login</router-link></li>
      <li><router-link to="/">Resigiter</router-link></li>
      <li><router-link to="/">Logout</router-link></li>
      <li><router-link to="/">Push</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {}
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
