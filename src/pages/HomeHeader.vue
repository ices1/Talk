<template>
  <div class="header">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Login</a></li>
      <li><a href="#">Resigiter</a></li>
      <li><a href="#">Logout</a></li>
      <li><a href="#">Push</a></li>
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
