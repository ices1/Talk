<template>
    <div>
        <div>Post: {{ $route.params.id }}</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Post',
  data () {
    return {}
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      // axios.get('http://localhost:3002/api/posts').then(this.getPosts)
    },
    getPosts (res) {
      if (res.status === 200) {
        console.log(res)
        this.posts = res.data.data.posts
        console.log(res.data.data.posts)
      } else {
        console.log(res)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
