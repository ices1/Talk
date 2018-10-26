<template>
    <div class="post-wrap">
        <h3 class="title"> 标题: </h3>
        <input type="text" class="title-cnt" v-model="title">
        <h3 class="title"> 内容: </h3>
        <textarea class="post-cnt" name="content" v-model="content"></textarea>
        <button class="sub-btn" @click="pushCmt">发布评论</button>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'Push',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  mounted () {
    axios.defaults.withCredentials = true
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get('/api/add-post')
        .then((res) => {
          console.log(res)
          this.$emit('loginStatus', res.data.user)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    pushCmt () {
      if (this.title.trim() === '' || this.content.trim() === '') {
        alert('评论或标题不能为空')
        return
      }
      // 提交帖子
      this.sendPost()
    },
    sendPost () {
      axios.post('/api/add-post', qs.stringify({
        title: this.title,
        content: this.content.trim()
      })).then((res) => {
        console.log(res)
        this.$router.push('/post/' + res.data.post.id)
      }).catch((err) => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .post-wrap
    padding 0.4rem
    box-sizing border-box
    // box-shadow 0.02rem 0.05rem 0.1rem
    // border-radius .2rem
    color #9e9e9e
    width 100%
    margin .6rem 0
    .title
      font-size .4rem
      color #333
    .title-cnt, .post-cnt
      box-shadow 0.02rem 0.05rem 0.1rem
      border-radius .2rem
      color #9E9E9E
      margin .6rem 0
      height .6rem
      padding 0 .2rem
      width 100%
      box-sizing border-box
    .post-cnt
      height 3rem
    .sub-btn
        cursor pointer
        background-color #2196f3
        color #fff
        padding .1rem .4rem
        float right
        border-radius .1rem
        margin .4rem 0
</style>
