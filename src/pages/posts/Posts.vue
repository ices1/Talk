<template>
    <div>
        <ul>
          <li class='post' v-for="(item, index) of posts" :key="index">
            <router-link :to="'post/' + item.id">
              <h3 class="title"> {{ item.title }} </h3>
              <p class="content"> {{ item.content }} </p>
            </router-link>
            <div class="post-info">
              <router-link :to="'user/' + item.userId">
                <span class="post-username"> {{ item.username }} </span>
                <img class="avatar" :src="'http://localhost:3002/avatars/' + item.avatar" alt="">
              </router-link>
              <span class="float-right"> {{ idTime(item.timestamp) }}</span>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import {indexTime} from '@/assets/js/common.js'

export default {
  name: 'Posts',
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
        // console.log(res)
        this.posts = res.data.data.posts
        console.log(res.data.data.posts)
      } else {
        console.log(res)
      }
    },
    idTime (t) {
      return indexTime(t)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .post
    margin: .6rem auto 0
    padding: .4rem
    box-shadow: .01rem .05rem .2rem
    color: #9E9E9E
    .title
      font-size: .5rem
      padding-bottom: .2rem
      ellipsis()
    .content
      ellipsis()
    .post-info
      margin-top: .2rem
      height: 1rem
      line-height: 1rem
      .avatar
        width: 1rem
        height: 1rem
        border-radius: 25%
        border: #9e9e9e66 .02rem solid;
        transition: .2s
        box-sizing: border-box
      .avatar:hover
        border-radius: 19% 63% 13% 69%
      .post-username
        color: #999
      .float-right
        float: right
</style>
