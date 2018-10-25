<template>
    <div class="account-page">
        <h3 class="page-title">重置密码</h3>
        <div>
            <div class="input-item">
                <span class="input-title">用户名:</span>
                <input @keyup.enter="login" disabled="disabled" class="input-cnt" type="text" name="username" v-model="username">
            </div>
            <div class="input-item">
                <span class="input-title">密码:</span>
                <input @keyup.enter="login" class="input-cnt" type="password" name="password" v-model="password" placeholder="输入注册时邮箱，系统将发送邮件到该地址">
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
  name: 'ResetPw',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    this.setCookies()
  },
  methods: {
    setCookies () {
      this.username = decodeURI(this.$route.path.split('username=')[1])
      axios.get('/api/' + this.$route.path)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    login () {
      if (this.password.trim().length < 3) {
        alert('密码长度必须不小于3')
        return
      }
      let self = this
      axios.post('/api/' + this.$route.path, qs.stringify({
        username: this.username,
        password: this.password.trim()
      }))
        .then(function (res) {
          console.log(res)
          alert('密码修改成功')
          self.$router.push('/')
        })
        .catch(function (error) {
          alert('密码修改失败')
          console.log('密码修改失败', error)
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
