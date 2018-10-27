<template>
    <div>
        <div class="user-banner">
            <div class=" ">
                <img class="avatar  top-avatar" v-if="flag" :src="'/api/avatars/' + userinfo.avatar" alt="">
            </div>
            <div class="top-intr">
              <p class="top-username"> {{ userinfo.username }} </p>
              <span class="post-total"> {{ '发帖数：' + posts.length }} </span>
              <span class="cms-total"> {{ '评论数：' + comments.length }} </span>
            </div>
        </div>
        <div class="post">
            <h3 class="intr-title">他发过的主题</h3>
            <div class="">
                <ul>
                    <li class='post-info' v-for="(item, index) of posts" :key="index">
                        <router-link :to="'/post/' + item.id">
                        <h3 class="cnt-title"> {{ item.title }} </h3>
                        <p class="content"> {{ item.content }} </p>
                        </router-link>
                        <span class="float-right idTime"> {{ idTime(item.timestamp) }}</span>
                    </li>
                </ul>
                <p v-if='!posts.length' class="no-cms"> 从未发送过任何主题 </p>
            </div>
        </div>
        <div class="comments">
            <h3 class="intr-title">他发过的评论</h3>
            <ul>
            <li class='cms-info' v-for="item of comments" :key="item.id">
                <router-link :to="'/post/' + item.postId">
                <h3 class="cnt-title"> {{ item.postTitle }} </h3>
                <p class="content"> {{ item.content }} </p>
                </router-link>
                <span class="float-right idTime"> {{ idTime(item.timestamp) }}</span>
            </li>
            </ul>
            <p v-if='!comments.length' class="no-cms"> 从未发送过评论 </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { indexTime } from '@/assets/js/common.js'

export default {
  name: 'User',
  data () {
    return {
      posts: [],
      comments: [],
      userinfo: {},
      flag: false,
      id: this.$route.params.id
    }
  },
  mounted () {
    axios.defaults.withCredentials = true
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get('/api/user/' + this.id).then(this.getData)
    },
    getData (res) {
      if (res.status === 200) {
        // console.log(res)
        this.posts = res.data.data.posts
        this.comments = res.data.data.comments
        this.userinfo = res.data.data.userinfo
        this.$emit('loginStatus', res.data.data.user)
        this.flag = true
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

  .content, .cnt-title
    ellipsis()
    color: #333
    line-height: .6rem
  .intr-title
    font-size: 0.4rem
    color: #9E9E9E
    margin-bottom: .2rem
  .user-banner
    margin: .4rem 0
    background: #2196f3
    padding: .2rem
    height: 1.2rem
    box-shadow: 4px 12px 11px 8px
    color: #3333
    border-radius: .2rem
    .top-avatar
      float: left
      width: 1.2rem
      height: 1.2rem
      margin: 0 .2rem
    .top-intr
      line-height: .6rem
      color: #fff
    .post-total
      margin-right: 1rem
    @media screen and (min-width: 30rem)
      .top-avatar
        margin-right: 2rem !important
  .post-info, .cms-info
    padding: .1rem .2rem .5rem
    border-bottom: .02rem solid #3333
  .post-info:last-child, .cms-info:last-child
    border-bottom: none
  .cnt-title
    font-size: .4rem
  .no-cms
    color: #9E9E9E
    font-size: .4rem
    text-align: center
    padding: .6rem
</style>
