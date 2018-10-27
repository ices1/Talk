<template>
    <div class="account-page">
        <h3 class="page-title">注册</h3>
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
                <span class="input-title">邮箱:</span>
                <input @keyup.enter="login" class="input-cnt" type="text" name="email" placeholder="可选，填写后有找回密码功能" v-model="email">
            </div>
            <div class="input-item">
                <span class="input-title">头像:</span>
                <input class="input-file" type="file" name="avatar" id="avatarFileLoad" @change="getFile">
                <label for="avatarFileLoad" class="input-file-label">上传头像</label>
            </div>
            <div class="input-btn-wrap">
                <button @click="submitFormMid()" class="input-btn">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      email: '',
      avatar: ''
    }
  },
  methods: {
    getFile (event) {
      this.avatar = event.target.files[0]
      // console.log(this.avatar)
    },
    submitFormMid () {
      let username = this.username.trim()
      let password = this.password.trim()
      let email = this.email.trim()
      let pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
      if (username.length < 2 || username.length > 8 || encodeURI(username).length > 45) {
        alert('用户名长度中文:2-5，英文:2-8')
      } else if (password.length < 2 || password.length > 20) {
        alert('密码长度: 2-20')
      } else if (email && !pattern.test(email)) {
        alert('请输入正确邮箱地址如：abc@163.com')
      } else {
        this.submitForm()
      }
    },
    submitForm () {
      // 阻止默认事件
      // event.preventDefault()
      // 表单内容统一 为FormData格式
      let formData = new FormData()
      formData.append('username', this.username)
      formData.append('password', this.password)
      formData.append('email', this.email)
      formData.append('avatar', this.avatar)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      // 上传
      let self = this
      axios.post('/api/register', formData, config)
        .then((res) => {
          // console.log(res.data)
          alert('注册成功')
          self.$router.push('/login')
        })
        .catch((error) => {
          alert(error.response.data.message)
          // console.log('登入失败', error)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .input-file
    display none
  .input-file-label
    cursor pointer
    padding .0 .6rem
    border-radius .1rem
    background-color #333a
    color #fff
</style>
