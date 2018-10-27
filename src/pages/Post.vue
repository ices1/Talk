<template>
    <div>
        <div class="post">
          <h3 class="title"> {{ post.title }} </h3>
          <span>发帖人：</span>
            <router-link :to="'/user/' + post.userId">
              <img v-if="flag" class="avatar" :src="'/api/avatars/' + post.avatar" alt="">
              <span class="post-username"> {{ post.username }} </span>
            </router-link>
          <div class="float-right post-time">

            <span class="float-right"> {{  postTime(post.timestamp) }} </span>
            <span class="float-right del-post" v-if="showDelBtn(post.userId)" @click="deleteInfo(post.id, 'post')"> 删除 </span>
          </div>
          <div class="content"> {{ post.content }} </div>
        </div>
        <div class="comments">
          <h3>Comments:</h3>
          <ul>
            <li class='cms-wrap' v-for="(item, index) of comments" :key="item.id">
            <div class="user-info">
              <router-link :to="'/user/' + item.userId">
                <img v-if="flag" class="avatar" :src="'/api/avatars/' + item.avatar" alt="">
                <span class="post-username"> {{ item.username }} </span>
              </router-link>
              <span class="float-right"> {{ postTime(item.timestamp) }} </span>
            </div>
            <div class="cms-info">
              <span>回帖：</span>
              <span class="float-right"> {{ '('+(index + 1) + 'L'+')'}} </span>
              <span class="float-right del-cmt" v-if="showDelBtn(item.userId)" @click="deleteInfo(item.id, 'comment', index)"> 删除 </span>
              <p class="cms-cnt"> {{ item.content }} </p>
            </div>
            </li>
          </ul>
          <p v-if='!comments.length' class="no-cms"> 当前还没有评论 </p>
        </div>
        <div class='add-comment'>
          <p v-if="!showCmtBtn" class="add-cmt-status"><router-link to="/login"> 请先 登录 后再评论... </router-link></p>
          <textarea class="add-cmt-cnt" v-if="showCmtBtn" @keyup.enter="pushCmt" name="addComment" placeholder="请输入评论" v-model="addComment"></textarea>
          <button class="add-cmt-btn" v-if="showCmtBtn" @click="pushCmt">发布评论</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {postTime} from '@/assets/js/common.js'
import qs from 'qs'

export default {
  name: 'Post',
  props: ['isLogin'],
  data () {
    return {
      post: {},
      comments: [],
      flag: false,
      id: this.$route.params.id,
      addComment: '',
      loginUser: ''
    }
  },
  computed: {
    showCmtBtn () {
      return this.isLogin && this.isLogin.id
    }
  },
  mounted () {
    // console.log(this.id)
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get('/api/post/' + this.id).then(this.getData)
    },
    getData (res) {
      if (res.status === 200) {
        // console.log(res)
        this.post = res.data.data.post
        this.comments = res.data.data.comments
        this.$emit('loginStatus', res.data.data.user)
        this.loginUser = res.data.data.user
        this.flag = true
      } else {
        console.log(res)
      }
    },
    postTime (t) {
      return postTime(t)
    },
    pushCmt () {
      if (this.addComment.trim() === '') {
        alert('评论不能为空')
        return
      }
      // 提交评论
      axios.post('/api/add-comment', qs.stringify({
        // userId: this.userId,
        postid: this.post.id,
        content: this.addComment.trim()
      })).then((res) => {
        // avatar, content, id, postId, timestamp, userId, username:
        this.comments.push({
          avatar: this.loginUser.avatar,
          content: this.addComment.trim(),
          id: res.data.commentId.id,
          postId: this.post.id,
          timestamp: Date.now(),
          userId: this.loginUser.id,
          username: this.loginUser.username
        })
        this.addComment = ''
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    // 显示删除按钮
    showDelBtn (userId) {
      // 先判断是否登录，再判断登录人是否为帖子本人
      console.log(this.loginUser)
      return this.loginUser && this.loginUser.id === userId
    },
    // 判断是否删除评论，帖子
    deleteInfo (id, Category, index) {
      let c = confirm('确定要删除该条信息？')
      if (c) {
        // console.log('删除', Category, id)
        this.execDel(id, Category, index)
      } else {
        // console.log('不删除', Category, id)
      }
    },
    // 执行删除评论，帖子
    execDel (id, Category, index) {
      let type = Category === 'post' ? 'post/' : 'comment/'
      axios.get('/api/delete-' + type + id)
        .then((res) => {
          // console.log(res)
          if (Category === 'post') {
            this.$router.push('/')
            // console.log('删除成功：', Category, id)
          } else {
            this.comments.splice(index, 1)
            // console.log('删除成功：', Category, id)
          }
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .post
    .title
      font-size: .5rem
      color: #333
      margin-bottom: .2rem
    .content
      color: #333
      line-height: .4rem
      text-indent: .4rem
      padding: .4rem 0
  .comments
    h3
      color: #9E9E9E
      font-size: .4rem
    .cms-info
      margin: .1rem .2rem
    .cms-cnt
      margin: .4rem
      color: #333
      line-height .4rem
    .no-cms
      color: #9E9E9E
      font-size: .36rem
      text-align: center
      padding: .5rem
    .cms-wrap
      border-bottom: .02rem solid #3333
    .cms-wrap:last-child
      border-bottom: none
  .add-comment
      color #9E9E9E
      margin 1rem auto 0.2rem
      display flow-root
      // overflow hidden
      .add-cmt-status
        text-align center
        box-shadow 0.02rem 0.05rem 0.2rem
        border-radius .5rem
        background-color #2196f3
        padding 0.4rem
        margin .6rem 0
        a
          color #fff
      .add-cmt-cnt
        padding 0.4rem
        box-sizing border-box
        box-shadow 0.02rem 0.05rem 0.1rem #2196f3
        border-radius .2rem
        color #666
        width 100%
      .add-cmt-btn
        cursor pointer
        background-color #2196f3
        color #fff
        padding .1rem .4rem
        float right
        border-radius .1rem
        margin .4rem 0
  .post-time
    position relative
  .del-cmt, .del-post
    padding 0 .4rem
    cursor pointer
    color #2196f3
    text-decoration underline
  .del-post
    position absolute
    right 0rem
    top .5rem
</style>
