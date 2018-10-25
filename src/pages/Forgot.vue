<template>
    <div class="account-page">
        <h3 class="page-title">忘记密码</h3>
        <div>
            <div class="input-item">
                <span class="input-title">用户名:</span>
                <input @keyup.enter="login" class="input-cnt" type="text" name="username" v-model="username">
            </div>
            <div class="input-item">
                <span class="input-title">邮箱:</span>
                <input @keyup.enter="login" class="input-cnt" type="text" name="email" v-model="email" placeholder="输入注册时邮箱，系统将发送邮件到该地址">
            </div>
            <div class="input-btn-wrap">
                <button @click="login" class="input-btn">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'Forgot',
  data () {
    return {
      username: '',
      email: ''
    }
  },
  methods: {
    login () {
      let self = this
      axios.post('/api/send-email', qs.stringify({
        username: this.username,
        email: this.email
      }))
        .then(function (res) {
          console.log(res)
          self.$router.push('/')
        })
        .catch(function (error) {
          console.log('登入失败', error)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.forgot
  color #03a9f4
  text-decoration underline
</style>
