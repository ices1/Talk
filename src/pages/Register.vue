<template>
    <div class="account-page">
        <h3 class="page-title">注册</h3>
        <form action="/register" method="post" enctype='multipart/form-data'>
            <div class="input-item">
                <span class="input-title">用户名:</span>
                <input @keyup.enter="login" class="input-cnt" type="text" name="username" v-model="username">
            </div>
            <div class="input-item">
                <span class="input-title">密码:</span>
                <input @keyup.enter="login" class="input-cnt" type="password" name="password" v-model="password">
            </div>
            <div class="input-item">
                <span class="input-title">邮箱:</span>
                <input @keyup.enter="login" class="input-cnt" type="text" name="email" v-model="email">
            </div>
            <div class="input-item">
                <span class="input-title">验证码:</span>
                <buttom @keyup.enter="login" class="input-cnt input-captcha-cnt" name="avatarFile" v-model="avatarFile">上传头像</buttom>
            </div>
            <div class="input-btn-wrap">
                <button @click="login" class="input-btn">提交</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'Register',
  props: ['isLogin'],
  data () {
    return {
      username: '',
      password: '',
      emial: '',
      avatarFile: ''
    }
  },
  mounted () {
    console.log(this.isLogin)
  },
  methods: {
    login () {
      let self = this
      axios.post('/api/register', qs.stringify({
        username: this.username,
        password: this.password,
        emial: this.emial,
        avatarFile: this.avatarFile
      }))
        .then(function (res) {
          // 触发变更登录状态
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
