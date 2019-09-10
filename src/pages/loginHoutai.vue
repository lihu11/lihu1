<template>
<div class="houtaiContainer">
   <form class="HoutaiSecCon">
        <div class="loginTitle">账号登录</div>
        <div class="pubLineHoutai">
            <img src="../assets/img/count.png" alt="" class="userImg">
            <input type="text" class="inputPubHoutai countInput" id="countInput" placeholder="请输入账号">
        </div>
        <div class="pubLineHoutai">
            <img src="../assets/img/psw.png" alt="" class="pswImg">
            <input type="password" class="inputPubHoutai pswInput" id="pswInput" placeholder="请输入密码">
        </div>
        <input type="button" value="登录" class="submitBtnHoutai" @click="SubmitBtn">
    </form>
</div>
 
</template>
<script>
import {mapActions} from 'vuex'
import axios from 'axios'
export default {
    name:'login-houtai',
    data() {
        return {

        }
    },
    methods:{
        SubmitBtn:function () {
            console.log(11111)
        }
    }
}
</script>
<style type="text/css">
.houtaiContainer{
    background-image: url('../assets/img/loginHoutai.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    position: fixed;
    width:100%;
    height: 100%;
    padding-top: 200px;
}
.HoutaiSecCon{
    width: 620px;
    height: 373px;
    border-radius: 12px;
    background: rgba(255,255,255,0.5);
    margin: 0 auto 0;
    padding: 47px 30px 0 30px;
}
.submitBtnHoutai{
    width: 300px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    border-radius: 4px;
    font-size: 20px;
    background-color: #2b3a41!important;
    color: #ffffff;
    margin: 50px auto 0;
    display: block;
    cursor: pointer;
    outline: none;
    border: none;
}
.submitBtnHoutai:active{
    opacity: 0.8;
}
.loginTitle{
    font-size: 26px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
}
.pubLineHoutai{
    width: 300px;
    height: 54px;
    border-bottom: 1px solid #2b3a41;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    align-items: flex-end;
    padding-left: 14px;
    padding-bottom: 5px;
}
.inputPubHoutai{
    background-color: transparent;
    margin-left: 25px;
    vertical-align: middle;
    width: calc(100% - 55px);
    outline: none;
    border: none;
}
.pubLineHoutai img{
    vertical-align: middle;
}
</style>