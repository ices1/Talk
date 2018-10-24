<template>
    <div class="account-page">
        <h3 class="page-title">登入</h3>
        <div>
            <div class="input-item">
                <span class="input-title">用户名:</span>
                <input @keyup.enter="login" class="input-cnt" type="text" name="username" v-model="username">
            </div>
            <div class="input-item">
                <span class="input-title">密码:</span>
                <input @keyup.enter="login" class="input-cnt" type="password" name="password" v-model="password">
            </div>
            <div class="input-item">
                <span class="input-title">验证码:</span>
                <input @keyup.enter="login" class="input-cnt input-captcha-cnt" type="text" name="captcha" v-model="captcha">
                <img class="input-captcha" src="/api/captcha" alt="captcha">
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
  name: 'Login',
  props: ['isLogin'],
  data () {
    return {
      username: '',
      password: '',
      captcha: ''
    }
  },
  mounted () {
    console.log(this.isLogin)
  },
  methods: {
    login () {
      let self = this
      axios.post('/api/login', qs.stringify({
        username: this.username,
        password: this.password,
        captcha: this.captcha
      }))
        .then(function (res) {
          // 触发变更登录状态
          self.$emit('loginStatus',res.data)
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
@css {
  color: #333
}
</style>
