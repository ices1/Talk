<template>
    <div>
        <div class="post">
          <h3 class="title"> {{ post.title }} </h3>
          <span>发帖人：</span>
            <router-link :to="'/user/' + post.userId">
              <img class="avatar" :src="'http://localhost:3002/avatars/' + post.avatar" alt="">
              <span class="post-username"> {{ post.username  }} </span>
            </router-link>
          <span class="float-right"> {{  postTime(post.timestamp) }} </span>
          <div class="content"> {{ post.content }} </div>
        </div>
        <div class="comments">
          <h3>Comments:</h3>
          <ul>
            <li v-for="(item, index) of comments" :key="item.id">
            <div class="user-info">
              <router-link :to="'/user/' + item.userId">
                <img class="avatar" :src="'http://localhost:3002/avatars/' + item.avatar" alt="">
                <span class="post-username"> {{ item.username }} </span>
              </router-link>
              <span class="float-right"> {{ postTime(item.timestamp) }} </span>
            </div>
            <div class="cms-info">
              <span>回帖：</span>
              <span class="float-right"> {{ '('+(index + 1) + 'L'+')'}} </span>
              <p class="cms-cnt"> {{ item.content }} </p>
            </div>
            </li>
          </ul>
          <p v-if='!comments.length' class="no-cms"> 当前还没有评论 </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {postTime} from '@/assets/js/common.js'

export default {
  name: 'Post',
  data () {
    return {
      post: {},
      comments: [],
      id: this.$route.params.id
    }
  },
  mounted () {
    console.log(this.id)
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get('http://localhost:3002/api/post/' + this.id).then(this.getData)
    },
    getData (res) {
      if (res.status === 200) {
        console.log(res)
        // console.log(res.data.data.posts)
        this.post = res.data.data.post
        this.comments = res.data.data.comments
      } else {
        console.log(res)
      }
    },
    postTime (t) {
      return postTime(t)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .post, .comments
    color: #9E9E9E
    margin: .6rem auto 0
    padding: .4rem
    box-shadow: .01rem .05rem .2rem
  .post
    .title
      font-size: .5rem
      color: #333
    .content
      color: #333
      line-height: .4rem
      text-indent: .4rem
      padding: .4rem 0
  .comments h3
    color: #9E9E9E
    font-size: .5rem
  .cms-info
    margin: .1rem .2rem
    border-bottom: .02rem solid #3333
  .cms-cnt
    margin: .4rem
    color: #333
  .no-cms
    color: #9E9E9E
    font-size: .5rem
    text-align: center
    padding: .6rem
</style>
