<template>
    <div>
        <ul>
          <li v-for="(item, index) of posts" :key="index">
            <h3> {{item.title}} </h3>
            <span> {{item.content}} </span>
            <!-- <span> {{item.username}} </span> -->
          </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get('http://localhost:3002/api/posts').then(this.getPosts)
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

<style>
</style>
