<template>
    <div class="account-page">
        <h3 class="page-title">登入</h3>
        <form>
            <div class="input-item">
                <span class="input-title">用户名:</span>
                <input class="input-cnt" type="text" name="username" v-model="username">
            </div>
            <div class="input-item">
                <span class="input-title">密码:</span>
                <input class="input-cnt" type="password" name="password" v-model="password">
            </div>
            <div class="input-item">
                <span class="input-title">验证码:</span>
                <input class="input-cnt input-captcha-cnt" type="text" name="captcha" v-model="captcha">
                <img class="input-captcha" src="http://localhost:3002/api/captcha" alt="captcha">
            </div>
            <div class="input-btn-wrap">
                <button @click="submit" class="input-btn">提交</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      captcha: ''
    }
  },
  methods: {
    submit () {
      let opts = {
        'Content-Type': 'application/json',
        'Access-Token': '84c6635800b14e0eba4f7ece65e095a1',
        'data': {
          'username': this.username,
          'password': this.password,
          'captcha': this.captcha
        }
      }
      axios.post('http://localhost:3002/api/login', opts)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
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
