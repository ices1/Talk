<template>
    <div class="account-page">
        <h3 class="page-title">登入</h3>
        <a class="test-acc" @click="testAcc()">启动测试账号</a>
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
                <img class="input-captcha" @click="changeCap" ref="captcha" src="/api/captcha" alt="captcha">
            </div>
            <div class="input-item">
                <router-link class="forgot" to="/forgot">忘记密码</router-link>
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
    this.changeCap()
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
          self.$emit('loginStatus', res.data)
          self.$router.push('/')
        })
        .catch(function (error) {
          alert(error.response.data.message)
          // console.log('登入失败', error.response)
        })
    },
    // 是否启动测试账号
    testAcc () {
      this.username = 'Avatar_2'
      this.password = '12345'
    },
    // 更换新验证码
    changeCap () {
      this.$refs.captcha.src = '/api/captcha?' + Date.now()
    }
  }
}
</script>

<style lang="stylus" scoped>
.forgot
  color #03a9f4
  text-decoration underline
.test-acc
  float right
  color red
</style>
