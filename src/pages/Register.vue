<template>
    <div class="account-page">
        <h3 class="page-title">注册</h3>
        <form>
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
                <span class="input-title">头像:</span>
                <input class="input-file" type="file" name="avatar" id="avatarFileLoad" @change="getFile">
                <label for="avatarFileLoad" class="input-file-label">上传头像</label>
            </div>
            <div class="input-btn-wrap">
                <button @click="submitForm($event)" class="input-btn">提交</button>
            </div>
        </form>
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
      console.log(this.avatar)
    },
    submitForm (event) {
      // 阻止默认事件
      event.preventDefault()
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
      axios.post('/api/register', formData, config)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data)
            self.$router.push('/')
          } else {
            console.log(res.data)
          }
        })
        .catch(function (error) {
          console.log('登入失败', error)
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
