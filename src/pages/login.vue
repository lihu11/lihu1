<template>
  <div class="fullscreen">
    <div class="conImgBox">
      <img src="../assets/img/houtai2.png" alt="" class="conImg">
      <div class="loginForm">
        <h3 class="title">金白菜</h3>
        <div class="el-form-item__content">
          <i class="fa fa-user"></i>
          <input type="text" class="el-input__inner" placeholder="手机号" v-model="username">
        </div>
         <div class="el-form-item__content">
           <i class="fa fa-unlock-alt"></i>
           <input type="text" class="el-input__inner" placeholder="密码" v-model="password">
        </div>
        <el-button type="danger" class="loginBtn" @click.prevent="handleLogin">登&#x3000;录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      username: 'Administrator',
      password: '123456',
      isLoging: false,
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin () {
      if (!this.username) {
          return this.$message.warning("请输入手机号")
      }
      else if (!this.password) {
          return this.$message.warning("请输入密码")
      }
      this.isLoging = true
      this.login({
        username: this.username,
        password: this.password
      }).then(res => {
        this.$message.success('登录成功')
        this.$router.push({name: 'home'})
        this.isLoging = false
      })
    }
  }
}
</script>
<style type="text/css">
 .fullscreen{
   background-image: url('../assets/img/houtai1.png');
   background-repeat: no-repeat;
   background-size: 100% 100%;
   width: 100%;
   height: 100%;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 .conImgBox{
   width: 95%;
   position: relative;
 }
 .conImgBox img{
   width: 100%;
 }
 .title{
   font-size: 26px;
   color: #333333;
   margin: 0 auto 40px auto;
   text-align: center;
 }
 .loginForm{
   position: absolute;
   width:520px;
   right: 10%;
   top: 20%;
   z-index: 99;
   padding: 35px 35px 15px 35px;
 }
 .fa-user,.fa-unlock-alt {
   color: #889aa4;
   font-size: 16px;
 }
 .el-form-item__content{
   border: 1px solid #dcdfe6;
   border-radius: 4px;
   height: 50px;
   display: flex;
   display: -webkit-flex;
   align-items: center;
   padding-left: 15px;
   margin-bottom: 22px;
 }
 .el-input__inner{
   border: none;
   height: 100%;
 }
 .loginBtn{
   width: 100%;
 }
</style>
